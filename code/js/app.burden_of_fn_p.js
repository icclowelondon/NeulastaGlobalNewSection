document.addEventListener('presentationInit', function() {
	/* -- Burden of FN (P) Pages -- */
	/* Page 5 */
	var slide = app.slide.kuderer_2007_p = {
		onEnter: function(ele) {
			var fnPage5Graph1Arrow1 = $("#fn_page5_graph1_arrow1_p");
			var fnPage5Graph1Arrow2 = $("#fn_page5_graph1_arrow2_p");
			var fnPage5Graph1Arrow3 = $("#fn_page5_graph1_arrow3_p");
			
			var fnPage5Graph2Arrow1 = $("#fn_page5_graph2_arrow1_p");
			var fnPage5Graph2Arrow2 = $("#fn_page5_graph2_arrow2_p");
			var fnPage5Graph2Arrow3 = $("#fn_page5_graph2_arrow3_p");

            var fnPage5Graph1Arrow1value = $("#kuderer_2007_p_graph1_content #graph1_arrow1_value");
            var fnPage5Graph1Arrow2value = $("#kuderer_2007_p_graph1_content #graph1_arrow2_value");
            var fnPage5Graph1Arrow3value = $("#kuderer_2007_p_graph1_content #graph1_arrow3_value");

            var fnPage5Graph2Arrow1value = $("#kuderer_2007_p_graph2_content #graph2_arrow1_value");
            var fnPage5Graph2Arrow2value = $("#kuderer_2007_p_graph2_content #graph2_arrow2_value");
            var fnPage5Graph2Arrow3value = $("#kuderer_2007_p_graph2_content #graph2_arrow3_value");

            var fnPage5Graph1Bg = $("#fn_page5_graph1_holder_p");
            var fnPage5Graph2Bg = $("#fn_page5_graph2_holder_p");
			
			setTimeout(function() {
				fnPage5Graph1Bg.click(function(){
			fnPage5Graph1Arrow1.css({"height":"242px"});
			fnPage5Graph1Arrow2.css({"height":"80px"});
			fnPage5Graph1Arrow3.css({"height":"151px"});

			setTimeout(function() {

                fnPage5Graph1Arrow1value.css("display","block");
                fnPage5Graph1Arrow2value.css("display","block");
                fnPage5Graph1Arrow3value.css("display","block");
            }, 500);

			});
			
			fnPage5Graph2Bg.click(function(){
			fnPage5Graph2Arrow1.css({"height":"196px"});
			fnPage5Graph2Arrow2.css({"height":"57px"});
			fnPage5Graph2Arrow3.css({"height":"145px"});

			 setTimeout(function() {

                fnPage5Graph2Arrow1value.css("display","block");
                fnPage5Graph2Arrow2value.css("display","block");
                fnPage5Graph2Arrow3value.css("display","block");
            }, 500);

			});

			}, 300);

           

		},
		onExit: function(ele) {
			var fnPage5Graph1Arrow1 = $("#fn_page5_graph1_arrow1_p");
			var fnPage5Graph1Arrow2 = $("#fn_page5_graph1_arrow2_p");
			var fnPage5Graph1Arrow3 = $("#fn_page5_graph1_arrow3_p");
			
			var fnPage5Graph2Arrow1 = $("#fn_page5_graph2_arrow1_p");
			var fnPage5Graph2Arrow2 = $("#fn_page5_graph2_arrow2_p");
			var fnPage5Graph2Arrow3 = $("#fn_page5_graph2_arrow3_p");

            var fnPage5Graph1Arrow1value = $("#kuderer_2007_p_graph1_content #graph1_arrow1_value");
            var fnPage5Graph1Arrow2value = $("#kuderer_2007_p_graph1_content #graph1_arrow2_value");
            var fnPage5Graph1Arrow3value = $("#kuderer_2007_p_graph1_content #graph1_arrow3_value");

            var fnPage5Graph2Arrow1value = $("#kuderer_2007_p_graph2_content #graph2_arrow1_value");
            var fnPage5Graph2Arrow2value = $("#kuderer_2007_p_graph2_content #graph2_arrow2_value");
            var fnPage5Graph2Arrow3value = $("#kuderer_2007_p_graph2_content #graph2_arrow3_value");

            fnPage5Graph1Arrow1value.css("display","none");
            fnPage5Graph1Arrow2value.css("display","none");
            fnPage5Graph1Arrow3value.css("display","none");
            fnPage5Graph2Arrow1value.css("display","none");
            fnPage5Graph2Arrow2value.css("display","none");
            fnPage5Graph2Arrow3value.css("display","none");
			
			fnPage5Graph1Arrow1.css({"height":"0px"});
			fnPage5Graph1Arrow2.css({"height":"0px"});
			fnPage5Graph1Arrow3.css({"height":"0px"});
			
			fnPage5Graph2Arrow1.css({"height":"0px"});
			fnPage5Graph2Arrow2.css({"height":"0px"});
			fnPage5Graph2Arrow3.css({"height":"0px"});
			
		}
   };
});