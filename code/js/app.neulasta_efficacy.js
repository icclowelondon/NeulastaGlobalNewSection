document.addEventListener('presentationInit', function() {
	/* -- Neulasta Efficacy Pages -- */
	/* Page 1 */
	var slide = app.slide.cooper_2011 = {
		onEnter: function(ele) {
			var nePage1Graph1Holder = $("#ne_page1_graph1_holder");
			var nePage1GraphArrow1 = $("#ne_page1_graph1_arrow1");
			var nePage1GraphArrow2 = $("#ne_page1_graph1_arrow2");
			var nePage1GraphArrow3 = $("#ne_page1_graph1_arrow3");

			var nePage1Graph2Holder = $("#ne_page1_graph2_holder");
			var nePage1Graph2Arrow1 = $("#ne_page1_graph2_arrow1");
			var nePage1Graph2Arrow2 = $("#ne_page1_graph2_arrow2");
			var nePage1Graph2Arrow3 = $("#ne_page1_graph2_arrow3");

			//var nePage1DataBottomCTACopy = $("#ne_page1_data_bottom_cta_copy");
			//var nePage1DataBottomCTA = $("#ne_page1_data_bottom_cta_btn");
			
			nePage1GraphArrow1.css({"height":"0px"});
			nePage1GraphArrow2.css({"height":"0px"});
			nePage1GraphArrow3.css({"height":"0px"});
			
			nePage1Graph2Arrow1.css({"height":"0px"});
			nePage1Graph2Arrow2.css({"height":"0px"});
			nePage1Graph2Arrow3.css({"height":"0px"});

			//nePage1DataBottomCTACopy.css({"width":"0px"});
			
			nePage1Graph1Holder.unbind('click').click(function() {
				nePage1GraphArrow1.css({"height":"209px"});
				setTimeout(function() {
			      nePage1GraphArrow2.css({"height":"96px"});
				},2000);
				setTimeout(function() {
			      nePage1GraphArrow3.css({"height":"105px"});
				},500);
			});

			nePage1Graph2Holder.unbind('click').click(function() {
				nePage1Graph2Arrow1.css({"height":"177px"});
				setTimeout(function() {
			      nePage1Graph2Arrow2.css({"height":"64px"});
				},2000);
				setTimeout(function() {
			      nePage1Graph2Arrow3.css({"height":"105px"});
				},500);
			});

			/*nePage1DataBottomCTA.click(function() {
				nePage1DataBottomCTACopy.css({"width":"260px"});
				nePage1DataBottomCTA.css({"left":"370px"});
			});*/
		},
		onExit: function(ele) {
			var nePage1Graph1Holder = $("#ne_page1_graph1_holder");
			var nePage1GraphArrow1 = $("#ne_page1_graph1_arrow1");
			var nePage1GraphArrow2 = $("#ne_page1_graph1_arrow2");
			var nePage1GraphArrow3 = $("#ne_page1_graph1_arrow3");
			//var nePage1DataBottomCTA = $("#ne_page1_data_bottom_cta_btn");
			//var nePage1DataBottomCTACopy = $("#ne_page1_data_bottom_cta_copy");
			
			nePage1GraphArrow1.css({"height":"0px"});
			nePage1GraphArrow2.css({"height":"0px"});
			nePage1GraphArrow3.css({"height":"0px"});	
			//nePage1DataBottomCTA.css({"left":"500px"});
			//nePage1DataBottomCTACopy.css({"width":"0px"});
		}
   };
	/* Page 2 */
	var slide = app.slide.aarts_2010 = {
		onEnter: function(ele) {
			var nePage2Section1Holder = $("#ne_page2_section1_holder");
			var nePage2Section2Holder = $("#ne_page2_section2_holder");
			var nePage2Section2Inner = $("#ne_page2_section2_inner");
			var nePage2Section1Image = $("#ne_page2_section1_image");
			var nePage2Section2ImagePt1 = $("#ne_page2_section2_image_pt1");
			var nePage2Section2ImagePt2 = $("#ne_page2_section2_image_pt2");
			var nePage2Section2CopyHolder = $("#ne_page2_section2_copy_holder");
			var nePage2Section2Hide = $("#ne_page2_section2_hide");
			var nePage2BottomCopy = $("#ne_page2_data_bottom");
			
			nePage2Section1Image.css({"width":"0px"});
			nePage2Section2ImagePt1.css({"width":"0px"});
			nePage2Section2ImagePt2.css({"width":"0px"});
			nePage2Section2Holder.css({"height":"108px"});
			nePage2Section2Inner.css({"height":"90px"});
			nePage2Section2Hide.css({"height":"90px"});
			nePage2Section2CopyHolder.css({"top":"0px"});
			nePage2BottomCopy.css({"bottom":"250px"});
			
			nePage2Section1Holder.unbind('click').click(function() {
				nePage2Section1Image.css({"width":"188px"});
			});
			
			nePage2Section2Holder.unbind('click').click(function() {
				nePage2Section2ImagePt1.css({"width":"617px"});
				setTimeout(function() {
			      nePage2Section2ImagePt2.css({"width":"617px"});
				},550);
				nePage2Section2Holder.css({"height":"210px"});
			   nePage2Section2Inner.css({"height":"190px"});
				nePage2Section2Hide.css({"height":"190px"});
				nePage2Section2CopyHolder.css({"top":"50px"});
				nePage2BottomCopy.css({"bottom":"160px"});
			});
		},
		onExit: function(ele) {
			var nePage2Section1Holder = $("#ne_page2_section1_holder");
			var nePage2Section2Holder = $("#ne_page2_section2_holder");
			var nePage2Section2Inner = $("#ne_page2_section2_inner");
			var nePage2Section1Image = $("#ne_page2_section1_image");
			var nePage2Section2ImagePt1 = $("#ne_page2_section2_image_pt1");
			var nePage2Section2ImagePt2 = $("#ne_page2_section2_image_pt2");
			var nePage2Section2CopyHolder = $("#ne_page2_section2_copy_holder");
			var nePage2BottomCopy = $("#ne_page2_data_bottom");
			nePage2Section1Image.css({"width":"0px"});
			nePage2Section2ImagePt1.css({"width":"0px"});
			nePage2Section2ImagePt2.css({"width":"0px"});
			nePage2Section2Holder.css({"height":"108px"});
			nePage2Section2Inner.css({"height":"90px"});
			nePage2Section2CopyHolder.css({"top":"0px"});
			nePage2BottomCopy.css({"bottom":"250px"});
		}
   };
	/* Page 3 */
	var slide = app.slide.almenar_2009 = {
		onEnter: function(ele) {
			var nePage3Section1 = $("#ne_page3_section1");
			var nePage3Section1Bar1 = $("#ne_page3_section1_bar1");
			var nePage3Section1Bar2 = $("#ne_page3_section1_bar2");
			var nePage3Section1Arrow = $("#ne_page3_section1_arrow");
			var nePage3Section1VS = $("#ne_page3_section1_vs_icon");
			var nePage3Section2 = $("#ne_page3_section2");
			var nePage3Section2Bar1 = $("#ne_page3_section2_bar1");
			var nePage3Section2Bar2 = $("#ne_page3_section2_bar2");
			var nePage3Section2Arrow = $("#ne_page3_section2_arrow");
			var nePage3Section2VS = $("#ne_page3_section2_vs_icon");
			var nePage3Section3 = $("#ne_page3_section3");
			var nePage3Section3Bar1 = $("#ne_page3_section3_bar1");
			var nePage3Section3Bar2 = $("#ne_page3_section3_bar2");
			var nePage3Section3Arrow = $("#ne_page3_section3_arrow");
			var nePage3Section3VS = $("#ne_page3_section3_vs_icon");
			
			nePage3Section1Bar1.css({"width":"0px"});
			nePage3Section1Bar2.css({"width":"0px"});
			nePage3Section1Arrow.css({"width":"0px"});
			nePage3Section1VS.css({"opacity":"0"});
			
			nePage3Section2Bar1.css({"width":"0px"});
			nePage3Section2Bar2.css({"width":"0px"});
			nePage3Section2Arrow.css({"width":"0px"});
			nePage3Section2VS.css({"opacity":"0"});
			
			nePage3Section3Bar1.css({"width":"0px"});
			nePage3Section3Bar2.css({"width":"0px"});
			nePage3Section3Arrow.css({"width":"0px"});
			nePage3Section3VS.css({"opacity":"0"});
			
			nePage3Section1.unbind('click').click(function() {
				nePage3Section1Bar1.css({"width":"119px"});
				setTimeout(function() {
				   nePage3Section1Bar2.css({"width":"260px"});
				},500);
				setTimeout(function() {
				   nePage3Section1Arrow.css({"width":"142px"});
				},1000);
				setTimeout(function() {
				   nePage3Section1VS.css({"opacity":"1"});
				},1500);
			});
			
			nePage3Section2.unbind('click').click(function() {
				nePage3Section2Bar1.css({"width":"75px"});
				setTimeout(function() {
				   nePage3Section2Bar2.css({"width":"224px"});
				},500);
				setTimeout(function() {
				   nePage3Section2Arrow.css({"width":"151px"});
				},1000);
				setTimeout(function() {
				   nePage3Section2VS.css({"opacity":"1"});
				},1500);
			});
			
			nePage3Section3.unbind('click').click(function() {
				nePage3Section3Bar1.css({"width":"103px"});
				setTimeout(function() {
				   nePage3Section3Bar2.css({"width":"216px"});
				},500);
				setTimeout(function() {
				   nePage3Section3Arrow.css({"width":"113px"});
				},1000);
				setTimeout(function() {
				   nePage3Section3VS.css({"opacity":"1"});
				},1500);
			});
		},
		onExit: function(ele) {
			var nePage3Section1 = $("#ne_page3_section1");
			var nePage3Section1Bar1 = $("#ne_page3_section1_bar1");
			var nePage3Section1Bar2 = $("#ne_page3_section1_bar2");
			var nePage3Section1Arrow = $("#ne_page3_section1_arrow");
			var nePage3Section1VS = $("#ne_page3_section1_vs_icon");
			var nePage3Section2 = $("#ne_page3_section2");
			var nePage3Section2Bar1 = $("#ne_page3_section2_bar1");
			var nePage3Section2Bar2 = $("#ne_page3_section2_bar2");
			var nePage3Section2Arrow = $("#ne_page3_section2_arrow");
			var nePage3Section2VS = $("#ne_page3_section2_vs_icon");
			var nePage3Section3 = $("#ne_page3_section3");
			var nePage3Section3Bar1 = $("#ne_page3_section3_bar1");
			var nePage3Section3Bar2 = $("#ne_page3_section3_bar2");
			var nePage3Section3Arrow = $("#ne_page3_section3_arrow");
			var nePage3Section3VS = $("#ne_page3_section3_vs_icon");
			
			nePage3Section1Bar1.css({"width":"0px"});
			nePage3Section1Bar2.css({"width":"0px"});
			nePage3Section1Arrow.css({"width":"0px"});
			nePage3Section1VS.css({"opacity":"0"});
			
			nePage3Section2Bar1.css({"width":"0px"});
			nePage3Section2Bar2.css({"width":"0px"});
			nePage3Section2Arrow.css({"width":"0px"});
			nePage3Section2VS.css({"opacity":"0"});
			
			nePage3Section3Bar1.css({"width":"0px"});
			nePage3Section3Bar2.css({"width":"0px"});
			nePage3Section3Arrow.css({"width":"0px"});
			nePage3Section3VS.css({"opacity":"0"});
		}
   };
});