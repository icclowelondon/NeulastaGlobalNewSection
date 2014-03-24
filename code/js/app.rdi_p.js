document.addEventListener('presentationInit', function() {
	/* -- RDI (P) Pages -- */
	/* Page 1 */
	var slide = app.slide.leonard_2009_p = {
		onEnter: function(ele) {
			var rdiPage2Graph1Arrow1P = $("#rdi_page2_graph1_arrow1_p");
			var rdiPage2Graph1Arrow2P = $("#rdi_page2_graph1_arrow2_p");
			var rdiPage2Graph1Arrow3P = $("#rdi_page2_graph1_arrow3_p");
			var rdiPage2Graph1ArrowBg = $("#rdi_page2_graph1_p")
			setTimeout(function() {
				rdiPage2Graph1ArrowBg.click(function(){
	              rdiPage2Graph1Arrow1P.css({"height":"119px"});
				  rdiPage2Graph1Arrow2P.css({"height":"183px"});
				  rdiPage2Graph1Arrow3P.css({"height":"221px"});
				});
			}, 500);
		},
		onExit: function(ele) {
			var rdiPage2Graph1Arrow1P = $("#rdi_page2_graph1_arrow1_p");
			var rdiPage2Graph1Arrow2P = $("#rdi_page2_graph1_arrow2_p");
			var rdiPage2Graph1Arrow3P = $("#rdi_page2_graph1_arrow3_p");
			
			rdiPage2Graph1Arrow1P.css({"height":"0px"});
			rdiPage2Graph1Arrow2P.css({"height":"0px"});
			rdiPage2Graph1Arrow3P.css({"height":"0px"});
			
		}
   };
});

