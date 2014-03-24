document.addEventListener('presentationInit', function() {
	/* -- Burden of FN Pages -- */
	/* Page 1 */
	var slide = app.slide.kuderer_2006 = {
		onEnter: function(ele) {
			var fnPage1Graph1 = $("#fn_page1_graph1");
	      var fnPage1Graph2 = $("#fn_page1_graph2");
	
			fnPage1Graph1.css({"-webkit-transform":"scale(0.45)","top":"10px"});
			fnPage1Graph2.css({"-webkit-transform":"scale(1.0)","top":"300px"});
			
			fnPage1Graph1.unbind('click').click(function() {
				fnPage1Graph1.css({"-webkit-transform":"scale(1.0)","top":"60px"});
				fnPage1Graph2.css({"-webkit-transform":"scale(0.75)","top":"390px"});
			});
			
			fnPage1Graph2.unbind('click').click(function() {
				fnPage1Graph1.css({"-webkit-transform":"scale(0.45)","top":"10px"});
				fnPage1Graph2.css({"-webkit-transform":"scale(1.0)","top":"300px"});
			});
		},
		onExit: function(ele) {
			var fnPage1Graph1 = $("#fn_page1_graph1");
	      var fnPage1Graph2 = $("#fn_page1_graph2");
			
			fnPage1Graph1.css({"-webkit-transform":"scale(0.45)","top":"10px"});
			fnPage1Graph2.css({"-webkit-transform":"scale(1.0)","top":"300px"});
		}
   };
	/* Page 5 */
	var slide = app.slide.kuderer_2007 = {
		onEnter: function(ele) {
			var fnPage5GraphHolder = $("#fn_page5_graph_holder");
			var fnPage5Graph1Arrow1 = $("#fn_page5_graph1_arrow1");
			var fnPage5Graph1Arrow2 = $("#fn_page5_graph1_arrow2");
			var fnPage5Graph2Arrow1 = $("#fn_page5_graph2_arrow1");
			var fnPage5Graph2Arrow2 = $("#fn_page5_graph2_arrow2");
	
			fnPage5Graph1Arrow1.css({"height":"0px"});
			fnPage5Graph1Arrow2.css({"height":"0px"});
			fnPage5Graph2Arrow1.css({"height":"0px"});
			fnPage5Graph2Arrow2.css({"height":"0px"});
			
			fnPage5GraphHolder.unbind('click').click(function() {
				fnPage5Graph1Arrow1.css({"height":"203px"});
				fnPage5Graph1Arrow2.css({"height":"127px"});
				fnPage5Graph2Arrow1.css({"height":"168px"});
				fnPage5Graph2Arrow2.css({"height":"107px"});
			});
		},
		onExit: function(ele) {
			var fnPage5GraphHolder = $("#fn_page5_graph_holder");
			var fnPage5Graph1Arrow1 = $("#fn_page5_graph1_arrow1");
			var fnPage5Graph1Arrow2 = $("#fn_page5_graph1_arrow2");
			var fnPage5Graph2Arrow1 = $("#fn_page5_graph2_arrow1");
			var fnPage5Graph2Arrow2 = $("#fn_page5_graph2_arrow2");
			
			fnPage5Graph1Arrow1.css({"height":"0px"});
			fnPage5Graph1Arrow2.css({"height":"0px"});
			fnPage5Graph2Arrow1.css({"height":"0px"});
			fnPage5Graph2Arrow2.css({"height":"0px"});
		}
   };
});