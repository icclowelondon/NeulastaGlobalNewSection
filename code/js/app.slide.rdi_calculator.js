document.addEventListener('presentationInit', function() {
	/* -- RDI Calculator Page -- */
	/* Page 1 */
	var slide = app.slide.rdi_calculator = {
		onEnter: function(ele) {
		  e = u.ge("slide_e1");

        e.p = u.ge("presentation");
        e.sl_a = u.ge("sliderA", e);
        u.e.transform(e.sl_a, 0, 0)
        u.e.drag(e.sl_a, e.sl_a, true);
        e.sl_b = u.ge("sliderB", e);
        u.e.transform(e.sl_b, 0, 0)
        u.e.drag(e.sl_b, new Array(0, 0, 470, 373), true, true);
        e.sl_c = u.ge("sliderC", e);
        u.e.transform(e.sl_c, 0, 0)
        u.e.drag(e.sl_c, new Array(0, 0, 470, 373), true, true);
        e.sl_d = u.ge("sliderD", e);
        u.e.transform(e.sl_d, 0, 0)
        u.e.drag(e.sl_d, new Array(0, 0, 470, 373), true, true);
        e.sl_e = u.ge("sliderE", e);
        u.e.transform(e.sl_e, 0, 0)
        u.e.drag(e.sl_e, new Array(0, 0, 470, 373), true, true);
		  e.sl_f = u.ge("sliderF", e);
        u.e.transform(e.sl_f, 0, 0)
        u.e.drag(e.sl_f, new Array(0, 0, 470, 373), true, true);
        e.sl_a.e = e.sl_b.e = e.sl_c.e = e.sl_d.e = e.sl_e.e = e.sl_f.e = e;
        var no_drag = u.ge("no_drag", e);
        no_drag.e = e;
        u.e.drag(no_drag, no_drag, true);


        no_drag.picked = e.sl_a.picked = e.sl_b.picked = e.sl_c.picked = e.sl_d.picked = e.sl_e.picked = e.sl_f.picked = function (event) {
            u.e.kill(event);
            u.e.resetEvents(this.e.p);
        }
        e.sl_b.moved = e.sl_c.moved = e.sl_d.moved = e.sl_e.moved = e.sl_f.moved = function () {
            u.addClass(this, "move");
            this.e.moveSlider(this);
            this.e.drawGraph();
        }                                  
        e.sl_a.dropped = e.sl_b.dropped = e.sl_c.dropped = e.sl_d.dropped = e.sl_e.dropped = e.sl_f.dropped = function () {
            u.removeClass(this, "move");
        }
        e.moveSlider = function (s) {
            var next = u.gs(s, "next");
            var prev = u.gs(s, "prev");
            if (next && s.element_x > next.element_x) {
                u.e.transform(next, s.element_x, 0);
                this.moveSlider(next);
            }
            if (prev && s.element_x < prev.element_x) {
                u.e.transform(prev, s.element_x, 0);
                this.moveSlider(prev);
            }
        }

        e.tumor = u.ge("tumor", e);
        e.updateTumor = function (scale) {
            this.tumor.style.webkitTransform = "scale(" + (1 - scale) + ")";
        }
        e.r = u.ge("reduction", e);
        e.r.e = e;
        u.e.drag(e.r, e.r, true);
        e.r.picked = function (event) {
            u.e.kill(event);
            u.e.resetEvents(this.e.p);
        }
        e.r_f_i = 0;
        e.r_f = new Array();
        e.r_f[0] = [75, 10];
        e.r_f[1] = [67.5, 9];
        e.r_f[2] = [63.75, 8.5];
        e.r_f[3] = [60, 8];
        e.r_f[4] = [56.25, 7.5];
        e.sl_r = u.ge("slider", e.r);
        e.sl_ri = u.ge("slider_imitation", e.r);
        e.sl_ri.e = e;
        u.e.drag(e.sl_ri, e.r, true);

        e.sl_ri.moved = function (event) {
            u.e.transform(this.e.sl_r, Math.round(this.element_x / 109) * 109, 0);
            this.e.r_f_i = Math.round(this.element_x / 109);
            this.e.drawGraph();
        }
        e.sl_ri.dropped = function (event) {
            u.e.transform(this, this.e.sl_r.element_x, 0);
            this.e.r_f_i = Math.round(this.element_x / 109);
            this.e.drawGraph();
        }

        e.graph = u.ge("graph", e);
        e.graph.e = e;
        e.graph.clickMoved = function () {
            u.e.resetEvents(this.e.p);
        }

        u.e.click(e.graph);
        e.graph.width = e.graph.offsetWidth;
        e.graph.height = e.graph.offsetHeight;
        e.ctx = e.graph.getContext("2d");
        e.ctx.strokeStyle = "#006cb6";
        e.ctx.lineWidth = 2;
        e.u_f = 100 / 25;

        e.drawGraph = function () {

            var fstart = 324.25;
				var estart = 296;
            var dstart = 240.75;
            var cstart = 185.5;
            var bstart = 130.25;

            var cx = 15;
            var cy = -20;
            this.ctx.beginPath();
            this.ctx.clearRect(0, 0, this.graph.offsetWidth, this.graph.offsetHeight);
            this.ctx.moveTo(cx, cy);
            cx = cx + this.r_f[this.r_f_i][1];
            cy = cy + this.r_f[this.r_f_i][0];
            this.ctx.lineTo(cx, cy);
            this.ctx.stroke();
            var avalue = cy;
            //console.log('a = ' + cy);
				
            var b = 79 + this.sl_b.element_x;
            cx = 15 + b;
            cy = cy - (b / this.u_f);
            this.ctx.lineTo(cx, cy);
            this.ctx.stroke();
            cx = cx + this.r_f[this.r_f_i][1];
            cy = cy + this.r_f[this.r_f_i][0];
            this.ctx.lineTo(cx, cy);
            this.ctx.stroke();
            var bvalue = cy;
            //console.log('b = ' + cy);
				
            var c = 79 + this.sl_c.element_x;
            cx = 15 + c + 79;
            cy = cy - ((c - this.sl_b.element_x) / this.u_f);
            this.ctx.lineTo(cx, cy);
            this.ctx.stroke();
            cx = cx + this.r_f[this.r_f_i][1];
            cy = cy + this.r_f[this.r_f_i][0];
            this.ctx.lineTo(cx, cy);
            this.ctx.stroke();
            var cvalue = cy;
            //console.log('c = ' + cy);
				
            var d = 79 + this.sl_d.element_x;
            cx = 15 + d + 158;
            cy = cy - ((d - this.sl_c.element_x) / this.u_f);
            this.ctx.lineTo(cx, cy);
            this.ctx.stroke();
            cx = cx + this.r_f[this.r_f_i][1];
            cy = cy + this.r_f[this.r_f_i][0];
            this.ctx.lineTo(cx, cy);
            this.ctx.stroke();
            var dvalue = cy;
            //console.log('d = ' + cy);
				
				var e = 79 + this.sl_e.element_x;
            cx = 15 + e + 237;
            cy = cy - ((e - this.sl_d.element_x) / this.u_f);
            this.ctx.lineTo(cx, cy);
            this.ctx.stroke();
            cx = cx + this.r_f[this.r_f_i][1];
            cy = cy + this.r_f[this.r_f_i][0];
            this.ctx.lineTo(cx, cy);
            this.ctx.stroke();
            var evalue = cy;
            //console.log('e = ' + cy);
				
            var f = 79 + this.sl_f.element_x;
            cx = 15 + f + 316;
            cy = cy - ((f - this.sl_e.element_x) / this.u_f);
            this.ctx.lineTo(cx, cy);
            this.ctx.stroke();
            cx = cx + this.r_f[this.r_f_i][1];
            cy = cy + this.r_f[this.r_f_i][0];
            this.ctx.lineTo(cx, cy);
            this.ctx.stroke();
            cx = cx + 200;
            cy = cy - (200 / this.u_f);
            if (cy / this.graph.offsetHeight + 0.1 < 1) {
                this.ctx.lineTo(cx, cy);
                this.ctx.stroke();
                var fpos = fstart - cy;
                var breduction = (bvalue < bstart - 4.25) ? (((bstart - bvalue) / (fpos)) * 0.1) : 0;
                var creduction = (cvalue < cstart - 4.25) ? (((cstart - cvalue) / (fpos)) * 0.1) : 0;
                var dreduction = (dvalue < dstart - 4.25) ? (((dstart - dvalue) / (fpos)) * 0.1) : 0;
					 var ereduction = (evalue < estart - 4.25) ? (((estart - evalue) / (fpos)) * 0.1) : 0;
                this.updateTumor((cy / this.graph.offsetHeight + 0.2) - ((ereduction + dreduction + creduction + breduction)));
            }
            else {
                this.updateTumor(1);
            }
            this.ctx.closePath();
        }
        e.drawGraph();
		},
		onExit: function(ele) {
			
		}
   };
});