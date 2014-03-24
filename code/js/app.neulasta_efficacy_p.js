document.addEventListener('presentationInit', function() {
	/* -- Neulasta Efficacy (P) Pages -- */
	/* Page 2 */
	var slide = app.slide.aarts_2010_p = {
		onEnter: function(ele) {
			var nePage2Graph1PArrow1 = $("#ne_page2_graph1_p_arrow1");
			var nePage2Graph1PArrow2 = $("#ne_page2_graph1_p_arrow2");
			var nePage2Graph1PArrow3 = $("#ne_page2_graph1_p_arrow3");
			var nePage2Graph1Bg = $("#ne_page2_graph1_p");
			
			nePage2Graph1PArrow1.css({"height":"0px"});
			nePage2Graph1PArrow2.css({"height":"0px"});
			nePage2Graph1PArrow3.css({"height":"0px"});

			nePage2Graph1Bg.click(function(){
			
			setTimeout(function() {
				nePage2Graph1PArrow1.css({"height":"168px"});
			}, 10);
			
			setTimeout(function() {
				nePage2Graph1PArrow2.css({"height":"140px"});
			}, 10);
			
			setTimeout(function() {
				nePage2Graph1PArrow3.css({"height":"23px"});
			}, 10);

			});
		},
		onExit: function(ele) {
			var nePage2Graph1PArrow1 = $("#ne_page2_graph1_p_arrow1");
			var nePage2Graph1PArrow2 = $("#ne_page2_graph1_p_arrow2");
			var nePage2Graph1PArrow3 = $("#ne_page2_graph1_p_arrow3");
			
			nePage2Graph1PArrow1.css({"height":"0px"});
			nePage2Graph1PArrow2.css({"height":"0px"});
			nePage2Graph1PArrow3.css({"height":"0px"});
			
		}
   };
});