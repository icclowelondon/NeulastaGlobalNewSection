document.addEventListener('presentationInit', function() {
	var slide = app.slide.moa_2 = {
		onEnter: function(ele) {
			/* -- MOA Pages -- */
			/* Page 2 */
			var moaPage2GraphHolder = $("#moa_page2_data_holder");
			var moaPage2GraphLines = $("#moa_page2_data_graph_lines");
			
			moaPage2GraphLines.css({"width":"0px"});
			
			moaPage2GraphHolder.unbind('click').click(function() {
				moaPage2GraphLines.css({"width":"413px"});
			});
		},
		onExit: function(ele) {
			var moaPage2GraphHolder = $("#moa_page2_data_holder");
			var moaPage2GraphLines = $("#moa_page2_data_graph_lines");
			
			moaPage2GraphLines.css({"width":"0px"});
		}
   };
});