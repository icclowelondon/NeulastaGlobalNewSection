(function() {
  var AutoMenu, Collection, InlineSlideshow, MemoryManager, Presentation, Slidescroller, Slideshow, View, d;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __indexOf = Array.prototype.indexOf || function(item) {
    for (var i = 0, l = this.length; i < l; i++) {
      if (this[i] === item) return i;
    }
    return -1;
  }, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  d = document;
  window.presentationInit = d.createEvent('UIEvents');
  window.slideshowLoad = d.createEvent('UIEvents');
  window.slideshowUnload = d.createEvent('UIEvents');
  window.collectionLoad = d.createEvent('UIEvents');
  window.collectionUnload = d.createEvent('UIEvents');
  window.inlineSlideshowLoad = d.createEvent('UIEvents');
  window.inlineSlideshowUnload = d.createEvent('UIEvents');
  window.contentLoad = d.createEvent('UIEvents');
  window.contentUnload = d.createEvent('UIEvents');
  window.slideEnter = d.createEvent('UIEvents');
  window.slideExit = d.createEvent('UIEvents');
  window.sectionEnter = d.createEvent('UIEvents');
  window.sectionExit = d.createEvent('UIEvents');
  window.inlineSlideEnter = d.createEvent('UIEvents');
  window.inlineSlideExit = d.createEvent('UIEvents');
  window.appError = d.createEvent('UIEvents');
  presentationInit.initEvent('presentationInit', false, false);
  slideshowLoad.initEvent('slideshowLoad', true, false);
  slideshowUnload.initEvent('slideshowUnload', true, false);
  collectionLoad.initEvent('collectionLoad', true, false);
  collectionUnload.initEvent('collectionUnload', true, false);
  inlineSlideshowLoad.initEvent('inlineSlideshowLoad', true, false);
  inlineSlideshowUnload.initEvent('inlineSlideshowUnload', true, false);
  contentLoad.initEvent('contentLoad', true, false);
  contentUnload.initEvent('contentUnload', true, false);
  slideEnter.initEvent('slideEnter', true, false);
  slideExit.initEvent('slideExit', true, false);
  sectionEnter.initEvent('sectionEnter', true, false);
  sectionExit.initEvent('sectionExit', true, false);
  inlineSlideEnter.initEvent('inlineSlideEnter', true, false);
  inlineSlideExit.initEvent('inlineSlideExit', true, false);
  appError.initEvent('appError', true, false);
  d = document;
  window.Presentation = Presentation = (function() {
    function Presentation(config) {
      var collection, slideshow, _i, _j, _len, _len2, _ref, _ref2;
      window.app = this;
      this.config = config || {};
      this.type = config.type || 'dynamic';
      this.orientation = config.orientation || 'landscape';
      this.dimensions = this.orientation === 'landscape' ? [1024, 768] : [768, 1024];
      this.version = '2.1';
      this.manageMemory = config.manageMemory || false;
      this.wrapSlides = config.wrapSlides || this.manageMemory;
      this.pathToSlides = this.config.pathToSlides || 'slides/';
      this.loaded = null;
      this.savedEvents = {};
      this.slideshows = {};
      this.collections = {};
      this.setupByType();
      this.getElements();
      this.getAllSlides();
      _ref = this.slideshowIds;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        slideshow = _ref[_i];
        this.register(slideshow, this.slides[slideshow]);
      }
      _ref2 = this.collectionIds;
      for (_j = 0, _len2 = _ref2.length; _j < _len2; _j++) {
        collection = _ref2[_j];
        this.register(collection, this.sections[collection], 'collection');
      }
      d.dispatchEvent(presentationInit);
      return;
    }
    Presentation.prototype.setupByType = function() {
      var content, structure;
      if (this.type === 'dynamic') {
        this.slides = this.config.slideshows || {};
        this.sections = this.config.collections || {};
      } else if (this.type === 'json') {
        this.json = {};
        this.slides = {};
        this.sections = {};
        this.getData('presentation.json', __bind(function(data) {
          return this.json = data;
        }, this));
        for (structure in this.json.structures) {
          content = this.json.structures[structure].content;
          if (this.json.structures[structure].type === 'slideshow') {
            this.slides[structure] = content;
          } else {
            this.sections[structure] = content;
          }
        }
      }
      this.slideshowIds = Object.keys(this.slides);
      return this.collectionIds = Object.keys(this.sections);
    };
    Presentation.prototype.init = function(structure, content, subcontent) {
      var arr, linkArr, missing_structure, name, path, query, structure_data, type;
      content = content || '';
      subcontent = subcontent || '';
      if (this.manageMemory) {
        d.addEventListener('slideEnter', function(event) {
          return event.target.setAttribute('class', 'slide active');
        });
        d.addEventListener('slideExit', function(event) {
          return setTimeout(function() {
            return event.target.setAttribute('class', 'slide');
          }, 600);
        });
      }
      if (this.type === 'json') {
        structure = structure || this.json.storyboard[0];
        structure_data = this.json.structures[structure];
        if (structure_data) {
          type = structure_data.type;
        } else {
          missing_structure = new View({
            template: 'missing_structure',
            structure_id: structure
          });
          this.elements.slideshows.innerHTML = missing_structure.markup;
          d.dispatchEvent(appError);
          throw new Error('Referenced structure in app.init does not exist: ' + structure);
        }
      } else {
        type = type || 'slideshow';
      }
      query = window.location.search;
      if (query) {
        arr = query.split('=');
        if (arr[0] === '?path') {
          path = arr[1].match(/^(\w+\.?\w*\.?\w*)/)[1];
          linkArr = path.split('.');
          name = linkArr[0];
          content = linkArr[1] || '';
          subcontent = linkArr[2] || '';
        } else if (arr[0] === '?slide') {
          this.show(arr[1]);
          return;
        }
      }
      this.goTo(structure, content, subcontent);
    };
    Presentation.prototype.add = function(name, content, type) {
      type = type || 'slideshow';
      if (type === 'slideshow') {
        this.slideshowIds.push(name);
        this.slides[name] = content;
      } else {
        this.collectionIds.push(name);
        this.sections[name] = content;
      }
      this.register(name, content, type);
    };
    Presentation.prototype.addEvent = function(type, callback, ele) {
      var currentSlide, eventInstance, src, _base, _ref;
      currentSlide = app.slideshow.current;
      src = ele || document;
      eventInstance = [type, callback, src];
            if ((_ref = (_base = this.savedEvents)[currentSlide]) != null) {
        _ref;
      } else {
        _base[currentSlide] = [];
      };
      this.savedEvents[currentSlide].eventInstance;
      this.savedEvents[currentSlide].push(eventInstance);
      src.addEventListener(type, callback);
    };
    Presentation.prototype.removeEvents = function() {
      var currentSlide, event, _i, _len, _ref;
      currentSlide = this.slideshow.current;
      if (this.savedEvents[currentSlide]) {
        _ref = this.savedEvents[currentSlide];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          event = _ref[_i];
          event[2].removeEventListener(event[0], event[1]);
        }
      }
      delete this.savedEvents[currentSlide];
    };
    Presentation.prototype.removeElements = function(slideName) {
      var currentSlide, ele, elements, _results;
      currentSlide = slideName || app.slideshow.current;
      elements = app.slide[currentSlide].element;
      if (elements) {
        _results = [];
        for (ele in elements) {
          _results.push(elements[ele] = null);
        }
        return _results;
      }
    };
    Presentation.prototype.register = function(name, content, type) {
      type = type || 'slideshow';
      if (type === 'slideshow') {
        this.slideshows[name] = new Slideshow(name, content);
      } else {
        this.collections[name] = new Collection(name, content);
      }
    };
    Presentation.prototype.unregister = function(name, type) {
      type = type || 'slideshow';
      if (type === 'slideshow') {
        delete this.slides[name];
      } else {
        delete this.sections[name];
      }
    };
    Presentation.prototype.load = function(name, skipScroll) {
      var evt, type;
      evt = slideshowLoad;
      type = __indexOf.call(this.slideshowIds, name) >= 0 ? 'slideshow' : 'collection';
      if (this.loaded) {
        this.unLoad();
      }
      if (type === 'slideshow') {
        this.slideshow = this.loaded = this.slideshows[name];
        this.collection = null;
        this.loaded.onLoad();
      } else {
        evt = collectionLoad;
        this.collection = this.loaded = this.collections[name];
        this.slideshow = null;
        this.loaded.onLoad();
        this.setCurrent(this.collection.content[0]);
        this.insertSections(this.collection.content, this.collection.ele);
      }
      this.elements.presentation.setAttribute('class', name);
      this.insert(this.loaded);
      this.getSlides();
      this.loaded.ele.dispatchEvent(evt);
      this.loaded.ele.dispatchEvent(contentLoad);
      if (!skipScroll) {
        if (type === 'collection') {
          this.slideshow.ele.dispatchEvent(sectionEnter);
        }
        this.slideshow.scrollTo(0);
      }
    };
    Presentation.prototype.unLoad = function() {
      var evt, type;
      type = this.loaded.constructor.name;
      evt = type === 'Slideshow' ? slideshowUnload : collectionUnload;
      this.loaded.ele.dispatchEvent(evt);
      this.loaded.ele.dispatchEvent(contentUnload);
      this.loaded.onUnload();
      this.remove(this.loaded);
    };
    Presentation.prototype.insert = function(slideshow, container) {
      container = container || this.elements.slideshows;
      container.appendChild(slideshow.ele);
    };
    Presentation.prototype.insertSections = function(sections, container) {
      var missing_structure, slideshow, ss, _i, _len;
      for (_i = 0, _len = sections.length; _i < _len; _i++) {
        slideshow = sections[_i];
        ss = this.slideshows[slideshow];
        if (ss) {
          ss.direction = 'vertical';
          this.slideshows[slideshow].onLoad();
          this.insert(this.slideshows[slideshow], this.loaded.ele);
        } else {
          missing_structure = new View({
            template: 'missing_structure',
            structure_id: slideshow
          });
          this.elements.slideshows.innerHTML = missing_structure.markup;
          d.dispatchEvent(appError);
          throw new Error('Referenced section is not a slideshow: ' + slideshow);
        }
      }
    };
    Presentation.prototype.remove = function(slideshow, container) {
      container = container || this.elements.slideshows;
      container.removeChild(slideshow.ele);
    };
    Presentation.prototype.getData = function(path, callback) {
      var xhr;
      xhr = new XMLHttpRequest();
      xhr.open('GET', path, false);
      xhr.onreadystatechange = __bind(function() {
        if (xhr.readyState !== 4) {
          return;
        }
        if (xhr.status !== 0 && xhr.status !== 200) {
          if (xhr.status === 400) {
            console.log("Could not locate " + path);
          } else {
            console.error("app.getData " + path + " HTTP error: " + xhr.status);
          }
          return;
        }
        return callback(JSON.parse(xhr.responseText));
      }, this);
      xhr.send();
    };
    Presentation.prototype.getHtml = function(name, path, callback) {
      var xhr;
      if (path == null) {
        path = this.pathToSlides;
      }
      path = path + name + '.html';
      xhr = new XMLHttpRequest();
      xhr.open('GET', path, false);
      xhr.onreadystatechange = __bind(function() {
        var missing_slide;
        if (xhr.readyState !== 4) {
          return;
        }
        if (xhr.status !== 0 && xhr.status !== 200) {
          if (xhr.status === 400) {
            console.log("Could not locate " + path);
          } else {
            missing_slide = new View({
              template: 'missing_slide',
              slide_id: name
            });
            callback(missing_slide.markup);
            return d.dispatchEvent(appError);
          }
        } else {
          return callback(xhr.responseText);
        }
      }, this);
      xhr.send();
    };
    Presentation.prototype.getAllSlides = function() {
      var addEmptyFunctions, arr, name, slide, slideMethods, _i, _len, _ref;
      this.allSlides = [];
      this.slide = {};
      slideMethods = ['onEnter', 'onExit'];
      addEmptyFunctions = function(slide) {
        var method, _i, _len, _results;
        app.slide[slide] = {};
        _results = [];
        for (_i = 0, _len = slideMethods.length; _i < _len; _i++) {
          method = slideMethods[_i];
          _results.push(app.slide[slide][method] = function() {});
        }
        return _results;
      };
      _ref = this.slides;
      for (name in _ref) {
        arr = _ref[name];
        for (_i = 0, _len = arr.length; _i < _len; _i++) {
          slide = arr[_i];
          if (__indexOf.call(this.allSlides, slide) < 0) {
            this.allSlides.push(slide);
            addEmptyFunctions(slide);
          }
        }
      }
    };
    Presentation.prototype.getElements = function() {
      var eleId, globals, _i, _len;
      globals = this.config.globalElements;
      this.elements = this.elements || {};
      this.elements.presentation = d.getElementById('presentation');
      this.elements.slideshows = d.getElementById('slideshows');
      if (globals) {
        for (_i = 0, _len = globals.length; _i < _len; _i++) {
          eleId = globals[_i];
          this.elements[eleId] = d.getElementById(eleId);
        }
      }
    };
    Presentation.prototype.getSlides = function() {
      var slide, slides, _i, _len;
      this.slideElements = {};
      slides = d.querySelectorAll('.slide');
      for (_i = 0, _len = slides.length; _i < _len; _i++) {
        slide = slides[_i];
        this.slideElements[slide.id] = slide;
      }
    };
    Presentation.prototype.getSlideElements = function(slideName, ele) {
      var el, elements, slideObj, value, _results;
      slideObj = app.slide[slideName];
      slideObj.element = {};
      elements = slideObj.elements;
      if (elements) {
        _results = [];
        for (el in elements) {
          value = elements[el];
          _results.push(typeof value === 'string' ? slideObj.element[el] = ele.querySelector(value) : value[1] === 'all' ? slideObj.element[el] = ele.querySelectorAll(value[0]) : slideObj.element[el] = ele.querySelector(value[0]));
        }
        return _results;
      }
    };
    Presentation.prototype.goTo = function(name, content, subcontent) {
      var skipScroll, type, _ref, _ref2;
      type = __indexOf.call(this.slideshowIds, name) >= 0 ? 'slideshow' : 'collection';
      skipScroll = false;
      if (type === 'slideshow') {
        if (name !== ((_ref = this.slideshow) != null ? _ref.id : void 0)) {
          skipScroll = true;
          this.load(name, skipScroll);
        }
        if (!content || this.slideshow.content[0] === content) {
          this.slideshow.scrollTo(0);
        } else {
          this.slideshow.scrollTo(content, skipScroll);
        }
      } else {
        if (name !== ((_ref2 = this.collection) != null ? _ref2.id : void 0)) {
          skipScroll = true;
          this.load(name, skipScroll);
        }
        if (content) {
          this.collection.scrollTo(content, skipScroll);
        } else {
          this.collection.scrollTo(0, skipScroll);
        }
        if (subcontent) {
          this.slideshow.scrollTo(subcontent, skipScroll);
        }
      }
    };
    Presentation.prototype.show = function(content) {
      var arr;
      arr = [];
      if (typeof content === 'string') {
        arr[0] = content;
      } else {
        arr = content;
      }
      app.add('temp', arr);
      app.load('temp');
    };
    Presentation.prototype.setCurrent = function(name) {
      this.slideshow = this.slideshows[name];
    };
    Presentation.prototype.template = function(str, data) {
      var p;
      for (p in data) {
        str = str.replace(new RegExp('{' + p + '}', 'g'), data[p]);
      }
      return str;
    };
    return Presentation;
  })();
  window.Slideshow = Slideshow = (function() {
    function Slideshow(id, content, config) {
      this.id = id;
      this.content = content;
      this.config = config != null ? config : {};
      this.type = 'slideshow';
      this.direction = this.config.direction || 'horizontal';
      this.currentIndex = 0;
      this.markup = '';
    }
    Slideshow.prototype._createElement = function() {
      var section;
      section = document.createElement('section');
      section.setAttribute('id', this.id + 'Container');
      section.setAttribute('class', 'slideshow');
      this.ele = section;
    };
    Slideshow.prototype._createMarkup = function() {
      var append, file, obj, prepend, slide, _i, _j, _len, _len2, _ref, _ref2;
      prepend = app.wrapSlides ? '<div class="slideWrap">' : '';
      append = app.wrapSlides ? '</div>' : '';
      if (app.type === 'json') {
        _ref = this.content;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          slide = _ref[_i];
          obj = app.json.slides[slide];
          if (obj) {
            file = obj.file;
            slide = file.split('.')[0];
          }
          app.getHtml(slide, app.pathToSlides, __bind(function(str) {
            return this.markup += prepend + str + append;
          }, this));
        }
      } else {
        _ref2 = this.content;
        for (_j = 0, _len2 = _ref2.length; _j < _len2; _j++) {
          slide = _ref2[_j];
          app.getHtml(slide, app.pathToSlides, __bind(function(str) {
            return this.markup += prepend + str + append;
          }, this));
        }
      }
    };
    Slideshow.prototype._destroyElement = function() {
      this.ele = null;
    };
    Slideshow.prototype._isValid = function(name) {
      return __indexOf.call(this.content, name) >= 0;
    };
    Slideshow.prototype._reset = function() {
      this.direction = 'horizontal';
      this.current = this.content[0];
      this.currentIndex = 0;
      this.length = this.content.length;
      this.markup = '';
    };
    Slideshow.prototype._scroll = function(nr, skipExit) {
      var currentSlide, previous, slide, x, y;
      skipExit = skipExit || false;
      slide = app.slideElements[this.content[nr]];
      previous = app.slideElements[this.current];
      x = 0;
      y = 0;
      if (previous === slide) {
        skipExit = true;
      }
      if (this.direction === 'horizontal') {
        x = nr * -app.dimensions[0];
      } else {
        y = nr * -app.dimensions[1];
      }
      if (!skipExit) {
        previous.dispatchEvent(slideExit);
        app.slide[this.current].onExit(previous);
        app.removeEvents();
        app.removeElements();
      }
      this.ele.style.cssText += '-webkit-transform:translate3d(' + x + 'px, ' + y + 'px, 0px);';
      this._setCurrent(nr);
      currentSlide = app.slide[this.current];
      currentSlide.ele = slide;
      slide.dispatchEvent(slideEnter);
      app.getSlideElements(this.current, slide);
      currentSlide.onEnter(slide);
    };
    Slideshow.prototype._setCurrent = function(content) {
      var type;
      type = typeof content;
      if (type === 'string') {
        this.current = content;
        this.currentIndex = this.getIndex(content);
      } else if ('number') {
        this.current = this.content[content];
        this.currentIndex = content;
      }
    };
    Slideshow.prototype._setMeasurements = function() {
      if (this.direction === 'horizontal') {
        this.width = app.dimensions[0] * this.length;
      } else {
        this.width = app.dimensions[0];
      }
    };
    Slideshow.prototype.get = function(name) {
      if (name) {
        return document.getElementById(name);
      } else {
        return document.getElementById(this.current);
      }
    };
    Slideshow.prototype.getIndex = function(name) {
      if (name && this._isValid(name)) {
        return this.content.indexOf(name);
      } else {
        return this.content.indexOf(this.current);
      }
    };
    Slideshow.prototype.onLoad = function() {
      this.current = this.content[0];
      this.length = this.content.length;
      this._setMeasurements();
      this._createElement();
      this._createMarkup();
      this.ele.style.cssText = "width:" + this.width + "px;-webkit-transform:translate3d(0px, 0px, 0px);";
      return this.ele.innerHTML = this.markup;
    };
    Slideshow.prototype.onUnload = function() {
      var previous;
      previous = app.slideElements[this.current];
      previous.dispatchEvent(slideExit);
      app.slide[this.current].onExit(previous);
      this._reset();
    };
    Slideshow.prototype.next = function() {
      if (this.currentIndex < this.length - 1) {
        this._scroll(this.currentIndex + 1);
      }
    };
    Slideshow.prototype.previous = function() {
      if (this.currentIndex > 0) {
        this._scroll(this.currentIndex - 1);
      }
    };
    Slideshow.prototype.scrollTo = function(content, skipExit) {
      var order, type;
      skipExit = skipExit || false;
      type = typeof content;
      if (type === 'string') {
        order = this.getIndex(content);
        this._scroll(order, skipExit);
      } else if ('number') {
        order = Math.abs(content);
        this._scroll(order, skipExit);
      }
    };
    Slideshow.prototype.scrollToEnd = function() {
      this._scroll(this.length - 1);
    };
    Slideshow.prototype.scrollToStart = function() {
      this._scroll(0);
    };
    return Slideshow;
  })();
  window.Collection = Collection = (function() {
    __extends(Collection, Slideshow);
    function Collection() {
      Collection.__super__.constructor.apply(this, arguments);
    }
    Collection.prototype._resetSection = function() {
      var ss;
      ss = app.slideshow;
      return setTimeout(function() {
        ss.ele.style.cssText += '-webkit-transform:translate3d(0px, 0px, 0px);';
        return ss._setCurrent(0);
      }, 600);
    };
    Collection.prototype._scroll = function(nr, skipExit) {
      var collection, currentSlide, nextSlide, previous, x, y;
      skipExit = skipExit || false;
      collection = app.slideshows[this.content[nr]];
      previous = app.slideshows[this.current];
      nextSlide = app.slideElements[collection.content[0]];
      currentSlide = app.slideElements[previous.current];
      x = 0;
      y = 0;
      if (this.direction === 'horizontal') {
        x = nr * -app.dimensions[0];
      } else {
        y = nr * -app.dimensions[1];
      }
      if (!skipExit) {
        previous.ele.dispatchEvent(sectionExit);
        currentSlide.dispatchEvent(slideExit);
        app.slide[currentSlide.id].onExit(currentSlide);
        app.removeEvents();
        app.removeElements();
      }
      this.ele.style.cssText += '-webkit-transform:translate3d(' + x + 'px, ' + y + 'px, 0px);';
      this._resetSection();
      this._setCurrent(nr);
      app.setCurrent(this.current);
      collection.ele.dispatchEvent(sectionEnter);
      nextSlide.dispatchEvent(slideEnter);
      app.getSlideElements(nextSlide.id, nextSlide);
      return app.slide[nextSlide.id].onEnter(nextSlide);
    };
    Collection.prototype.onLoad = function() {
      this.type = 'collection';
      this.current = this.content[0];
      this.length = this.content.length;
      this._setMeasurements();
      this._createElement();
      this.ele.style.cssText = "width:" + this.width + "px;-webkit-transform:translate3d(0px, 0px, 0px);";
      return this.ele.setAttribute('class', 'collection');
    };
    Collection.prototype.onUnload = function() {
      var collection, currentSlide, section, _i, _len, _ref, _results;
      collection = app.slideshows[this.current];
      currentSlide = app.slideElements[collection.content[0]];
      currentSlide.dispatchEvent(slideExit);
      app.slide[currentSlide.id].onExit(currentSlide);
      collection.ele.dispatchEvent(sectionExit);
      this._reset();
      _ref = this.content;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        section = _ref[_i];
        _results.push(app.slideshows[section]._reset());
      }
      return _results;
    };
    Collection.prototype.get = function(name) {
      if (name) {
        return document.getElementById(name + 'Container');
      } else {
        return document.getElementById(this.current + 'Container');
      }
    };
    return Collection;
  })();
  window.InlineSlideshow = InlineSlideshow = (function() {
    __extends(InlineSlideshow, Slideshow);
    function InlineSlideshow(id, config) {
      this.id = id;
      this.config = config != null ? config : {};
      this.type = 'inline';
      this.content = app.slideshows[this.id].content;
      this.direction = this.config.direction || 'horizontal';
      this.current = this.content[0];
      this.currentIndex = 0;
      this.length = this.content.length;
      this.elements = {};
      this.markup = '';
    }
    InlineSlideshow.prototype._createElement = function() {
      var section;
      section = document.createElement('section');
      section.setAttribute('id', this.id);
      section.setAttribute('class', 'inline-slideshow');
      this.ele = section;
    };
    InlineSlideshow.prototype._scroll = function(nr) {
      var previous, slide, x, y;
      slide = app.slideElements[this.content[nr]];
      previous = app.slideElements[this.current];
      x = 0;
      y = 0;
      if (this.direction === 'horizontal') {
        x = nr * -app.dimensions[0];
      } else {
        y = nr * -app.dimensions[1];
      }
      if (slide !== previous) {
        previous.dispatchEvent(inlineSlideExit);
        app.slide[this.current].onExit(previous);
      }
      this.ele.style.cssText += '-webkit-transform:translate3d(' + x + 'px, ' + y + 'px, 0px);';
      this._setCurrent(nr);
      slide.dispatchEvent(inlineSlideEnter);
      app.slide[this.current].onEnter(slide);
    };
    InlineSlideshow.prototype.load = function(container) {
      app.inline = this;
      this.onLoad();
      app.insert(this, container);
      app.getSlides();
      this.ele.dispatchEvent(inlineSlideshowLoad);
      app.inline.scrollTo(0);
      console.log('Done loading inline');
    };
    InlineSlideshow.prototype.unLoad = function(container) {
      this.ele.dispatchEvent(inlineSlideshowUnload);
      app.inline = null;
      container.innerHTML = "";
      this._reset();
    };
    return InlineSlideshow;
  })();
  d = document;
  window.Slidescroller = Slidescroller = (function() {
    function Slidescroller(id) {
      this.id = id;
      this._down = __bind(this._down, this);
      this._up = __bind(this._up, this);
      this._previous = __bind(this._previous, this);
      this._next = __bind(this._next, this);
      this.ele = app.elements.presentation;
      this.type = 'slideshow';
      this.actions = {
        left: this._next,
        right: this._previous,
        up: this._up,
        down: this._down
      };
      this._connect();
    }
    Slidescroller.prototype._connect = function() {
      d.addEventListener('contentLoad', __bind(function() {
        if (this.id === app.loaded.id) {
          this.ele = d.getElementById(this.id);
        }
        this.type = app.loaded.type;
        return this._actionSetup;
      }, this));
      d.addEventListener('inlineSlideshowLoad', __bind(function() {
        return this.enableInline();
      }, this));
      d.addEventListener('inlineSlideshowUnload', __bind(function() {
        return this.disableInline();
      }, this));
      this.enableAll();
    };
    Slidescroller.prototype._actionSetup = function() {
      if (this.type === 'slideshow') {
        this._next = this._nextSlide;
        return this._previous = this._previousSlide;
      } else {
        this._next = this._nextSection;
        this._previous = this._previousSection;
        this._up = this._nextSlide;
        return this._down = this._previousSlide;
      }
    };
    Slidescroller.prototype._next = function(event) {
      if (this.type === 'slideshow') {
        this._nextSlide(event);
      } else {
        this._nextSection(event);
      }
    };
    Slidescroller.prototype._previous = function(event) {
      if (this.type === 'slideshow') {
        this._previousSlide(event);
      } else {
        this._previousSection(event);
      }
    };
    Slidescroller.prototype._up = function(event) {
      if (this.type === 'collection') {
        this._nextSlide(event);
      }
    };
    Slidescroller.prototype._down = function(event) {
      if (this.type === 'collection') {
        this._previousSlide(event);
      }
    };
    Slidescroller.prototype._addSwipeListener = function(eventName) {
      this.ele.addEventListener(eventName, this.events[eventName]);
    };
    Slidescroller.prototype._nextSection = function(event) {
      app.collection.next();
    };
    Slidescroller.prototype._nextSlide = function(event) {
      app.slideshow.next();
    };
    Slidescroller.prototype._previousSection = function(event) {
      app.collection.previous();
    };
    Slidescroller.prototype._previousSlide = function(event) {
      app.slideshow.previous();
    };
    Slidescroller.prototype._nextInline = function(event) {
      touchy.stop(event);
      app.inline.next();
    };
    Slidescroller.prototype._previousInline = function(event) {
      touchy.stop(event);
      app.inline.previous();
    };
    Slidescroller.prototype.disable = function(dir) {
      this.ele.removeEventListener('swipe' + dir, this.actions[dir]);
    };
    Slidescroller.prototype.disableAll = function() {
      this.ele.removeEventListener('swipeleft', this._next);
      this.ele.removeEventListener('swiperight', this._previous);
      this.ele.removeEventListener('swipeup', this._up);
      this.ele.removeEventListener('swipedown', this._down);
    };
    Slidescroller.prototype.enable = function(dir) {
      this.ele.addEventListener('swipe' + dir, this.actions[dir]);
    };
    Slidescroller.prototype.enableAll = function() {
      this.ele.addEventListener('swipeleft', this._next);
      this.ele.addEventListener('swiperight', this._previous);
      this.ele.addEventListener('swipeup', this._up);
      this.ele.addEventListener('swipedown', this._down);
    };
    Slidescroller.prototype.enableInline = function() {
      app.inline.ele.addEventListener('swipeleft', this._nextInline);
      app.inline.ele.addEventListener('swiperight', this._previousInline);
    };
    Slidescroller.prototype.disableInline = function() {
      app.inline.ele.removeEventListener('swipeleft', this._nextInline);
      app.inline.ele.removeEventListener('swiperight', this._previousInline);
    };
    return Slidescroller;
  })();
  window.View = View = (function() {
    function View(config) {
      var name, path, template;
      this.config = config != null ? config : {};
      this.markup = '';
      template = this.config.template || null;
      path = this.config.path || '_framework/templates/';
      name = this.config.name || null;
      if (template) {
        return View.template[template](this.config);
      } else if (name) {
        return this.compile(name, path);
      }
    }
    View.prototype.compile = function(name, path) {
      var blueprint, output, template_data;
      blueprint = '';
      app.getHtml(name, path, function(data) {
        return blueprint = data;
      });
      output = app.template(blueprint, this.config.data);
      template_data = {
        markup: output
      };
      return template_data;
    };
    return View;
  })();
  View.template = {
    missing_slide: function(config) {
      var blueprint, output, template_data;
      blueprint = '';
      app.getHtml('error_missing_slide', '_framework/templates/', function(data) {
        return blueprint = data;
      });
      output = app.template(blueprint, {
        slide_id: config.slide_id
      });
      template_data = {
        name: 'Missing slide: ' + config.slide_id,
        markup: output
      };
      return template_data;
    },
    missing_structure: function(config) {
      var blueprint, output, template_data;
      blueprint = '';
      app.getHtml('error_missing_structure', '_framework/templates/', function(data) {
        return blueprint = data;
      });
      output = app.template(blueprint, {
        structure_id: config.structure_id
      });
      template_data = {
        name: 'Missing structure: ' + config.structure_id,
        markup: output
      };
      return template_data;
    }
  };
  window.MemoryManager = MemoryManager = (function() {
    function MemoryManager(name, config) {
      this.name = name;
      this.config = config != null ? config : {};
      this._connect();
    }
    MemoryManager.prototype._connect = function() {
      document.addEventListener('slideEnter', function(event) {
        return event.target.setAttribute('class', 'slide active');
      });
      return document.addEventListener('slideExit', function(event) {
        return setTimeout(function() {
          return event.target.setAttribute('class', 'slide');
        }, 600);
      });
    };
    return MemoryManager;
  })();
  window.AutoMenu = AutoMenu = (function() {
    function AutoMenu(config) {
      this._setCurrent = __bind(this._setCurrent, this);
      this._load = __bind(this._load, this);      this.config = config || {};
      this.offset = this.config.offset || 0;
      this.linksConfig = this.config.links || {};
      this.linkIds = app.json.storyboard;
      this.structurePath = app.json.structures;
      this.ele = document.getElementById('mainmenu');
      if (this.linkIds) {
        this._init();
      }
    }
    AutoMenu.prototype._init = function() {
      return document.addEventListener('contentLoad', this._load);
    };
    AutoMenu.prototype._load = function(event) {
      document.removeEventListener('contentLoad', this._load);
      this.singleContent = false;
      if (this.linkIds.length === 1) {
        this.contentType = app.json.structures[this.linkIds[0]].type;
        this.linkIds = app[this.contentType].content;
        this.singleContent = true;
        if (this.contentType === 'collection') {
          document.addEventListener('sectionEnter', this._setCurrent);
        } else {
          document.addEventListener('slideEnter', this._setCurrent);
          this.structurePath = app.json.slides;
        }
      } else {
        document.addEventListener('contentLoad', this._setCurrent);
      }
      this._build();
      this._insert();
      this._connect();
      return this._setCurrent();
    };
    AutoMenu.prototype._build = function() {
      var classname, link, linkConfig, markup, name, skip, _i, _len, _ref;
      markup = '';
      _ref = this.linkIds;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        link = _ref[_i];
        skip = false;
        linkConfig = this.linksConfig[link];
        name = this.structurePath[link].name;
        classname = '';
        if (linkConfig) {
          skip = linkConfig.skip || skip;
          name = linkConfig.title || name;
          classname = linkConfig.classname || '';
        }
        if (!skip) {
          markup += '<li data-link="' + link + '" class="' + classname + '">' + name + '</li>';
        }
      }
      return this.markup = markup;
    };
    AutoMenu.prototype._insert = function() {
      var list, scrollLimit;
      list = document.createElement('ul');
      scrollLimit = 0;
      list.id = app.loaded.id + 'Menu';
      list.setAttribute('class', 'menu');
      list.innerHTML = this.markup;
      this.ele.appendChild(list);
      this.list = list;
      this._getWidth();
      scrollLimit = app.dimensions[0] - this.menuWidth;
      this.scroller = new Draggy(list.id, {
        restrictY: true,
        limitsX: [scrollLimit, 0]
      });
      return this.scroller.moveTo(this.offset, 0);
    };
    AutoMenu.prototype._remove = function() {
      return this.ele.innerHTML = '';
    };
    AutoMenu.prototype._getWidth = function() {
      var link, links, width, _i, _len, _results;
      links = this.ele.querySelectorAll('li');
      this.menuWidth = 0;
      _results = [];
      for (_i = 0, _len = links.length; _i < _len; _i++) {
        link = links[_i];
        width = link.getBoundingClientRect().width;
        _results.push(this.menuWidth += width);
      }
      return _results;
    };
    AutoMenu.prototype._connect = function() {
      return this.ele.addEventListener('tap', __bind(function(event) {
        var ele, link, structure;
        ele = event.target;
        if (ele.nodeType === 3) {
          ele = ele.parentNode;
        }
        link = ele.getAttribute('data-link');
        if (this.singleContent) {
          structure = app.json.storyboard[0];
          return app.goTo(structure, link);
        } else {
          return app.goTo(link);
        }
      }, this));
    };
    AutoMenu.prototype._setCurrent = function() {
      var absOffset, appWidth, content, defaultOffset, link, pos, prev, query, rightPos, toMove, wd;
      prev = this.ele.querySelector('.selected');
      content = this.singleContent ? app.loaded.current : app.loaded.id;
      query = '[data-link="' + content + '"]';
      link = this.ele.querySelector(query);
      if (prev) {
        util.removeClass(prev, 'selected');
      }
      if (link) {
        util.addClass(link, 'selected');
        pos = util.getPosition(link)[0] + this.offset;
        wd = link.getBoundingClientRect().width;
        rightPos = pos + wd;
        toMove = 0;
        defaultOffset = this.config.offset || 0;
        absOffset = Math.abs(defaultOffset);
        appWidth = app.dimensions[0];
        if (rightPos >= appWidth) {
          toMove = (rightPos - appWidth) - this.offset;
          this.list.style.webkitTransitionDuration = '0.5s';
          this.list.style.webkitTransform = 'translate3d(-' + toMove + 'px, 0, 0)';
          return this.offset = -toMove;
        } else if (pos < 0) {
          toMove = pos - this.offset;
          this.list.style.webkitTransitionDuration = '0.5s';
          this.list.style.webkitTransform = 'translate3d(-' + toMove + 'px, 0, 0)';
          return this.offset = -toMove;
        } else if (rightPos > absOffset && (rightPos + absOffset + wd) < appWidth) {
          toMove = defaultOffset;
          this.list.style.webkitTransitionDuration = '0.5s';
          this.list.style.webkitTransform = 'translate3d(' + toMove + 'px, 0, 0)';
          return this.offset = toMove;
        }
      }
    };
    return AutoMenu;
  })();
  window.debug = function() {
    document.addEventListener('presentationInit', function() {
      console.log("**** Presentation initialized");
      console.log("Registered slideshows:  " + app.slideshowIds);
      console.log("Registered collections: " + app.collectionIds);
      return window["debugger"].init();
    });
    document.addEventListener('slideshowLoad', function() {
      return console.log("**** Slideshow loaded: " + app.slideshow.id);
    });
    document.addEventListener('slideshowUnload', function() {
      return console.log("**** Slideshow unloaded: " + app.slideshow.id);
    });
    document.addEventListener('collectionLoad', function() {
      return console.log("**** Collection loaded: " + app.collection.id);
    });
    document.addEventListener('collectionUnload', function() {
      return console.log("**** Collection unloaded: " + app.collection.id);
    });
    document.addEventListener('inlineSlideshowLoad', function() {
      return console.log("**** Inline slideshow loaded: " + app.inline.id);
    });
    document.addEventListener('inlineSlideshowUnload', function() {
      return console.log("**** Inline slideshow unloaded: " + app.inline.id);
    });
    document.addEventListener('contentLoad', function(event) {
      return console.log("**** New content loaded: " + event.target.id);
    });
    document.addEventListener('contentUnload', function(event) {
      return console.log("**** Content unloaded: " + event.target.id);
    });
    document.addEventListener('slideEnter', function() {
      return console.log("---> Slide entered: " + app.slideshow.current);
    });
    document.addEventListener('slideExit', function() {
      return console.log("<--- Slide exited: " + app.slideshow.current);
    });
    document.addEventListener('sectionEnter', function() {
      return console.log(">>>> Section entered: " + app.slideshow.id);
    });
    document.addEventListener('sectionExit', function() {
      return console.log("<<<< Section exited: " + app.slideshow.id);
    });
    document.addEventListener('inlineSlideEnter', function() {
      return console.log("---> Inline slide entered: " + app.inline.current);
    });
    return document.addEventListener('inlineSlideExit', function() {
      return console.log("<--- Inline slide exited: " + app.inline.current);
    });
  };
  window["debugger"] = {
    ele: null,
    logs: null,
    isVisible: false,
    markup: '',
    init: function() {
      this.createWindow();
      this.addListeners();
      window.doc = this.doc;
      return window.log = this.log;
    },
    createBox: function() {
      var box;
      box = new View({
        name: 'debug_console'
      });
      return console.log(box);
    },
    createWindow: function() {
      var dragger, header, leftCol, logHeader, rightCol, stateBar;
      this.ele = document.createElement('section');
      header = document.createElement('header');
      stateBar = document.createElement('div');
      this.stateStructure = document.createElement('span');
      this.stateSlide = document.createElement('span');
      leftCol = document.createElement('div');
      rightCol = document.createElement('div');
      logHeader = document.createElement('h4');
      this.logs = document.createElement('div');
      this.ele.id = 'debug';
      header.innerText = 'Debug Console';
      stateBar.className = 'state-bar';
      leftCol.className = 'd-col';
      rightCol.className = 'd-col last-col';
      logHeader.innerText = 'Log output';
      stateBar.appendChild(this.stateStructure);
      stateBar.appendChild(this.stateSlide);
      this.ele.appendChild(header);
      this.ele.appendChild(stateBar);
      document.body.appendChild(this.ele);
      return dragger = new Draggy(this.ele, {});
    },
    addListeners: function() {
      document.addEventListener('longTouch', __bind(function() {
        if (this.isVisible) {
          util.removeClass(this.ele, 'showing');
          return this.isVisible = false;
        } else {
          util.addClass(this.ele, 'showing');
          return this.isVisible = true;
        }
      }, this));
      return document.addEventListener('slideEnter', __bind(function() {
        this.stateStructure.innerText = app.loaded.current;
        return this.stateSlide.innerText = app.slideshow.current;
      }, this));
    },
    log: function(msg) {
      var logEle;
      logEle = document.createElement('p');
      logEle.innerText = msg;
      return this.logs.appendChild(logEle);
    },
    clearLog: function() {
      return this.logs.innerHTML = '';
    },
    doc: function(name) {
      name = '?' + name || '';
      return window.location.href = '../docs/index.html' + name;
    }
  };
}).call(this);
