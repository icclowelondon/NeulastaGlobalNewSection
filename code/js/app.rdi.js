document.addEventListener('presentationInit', function() {
	/* -- RDI Pages -- */
	/* Page 1 */
	var slide = app.slide.chirivella_2009 = {
		onEnter: function(ele) {
			var rdiPage1CTA = $("#rdi_page1_cta");
			var rdiPage1CTADataHolder = $("#rdi_page1_cta_data_holder");
			rdiPage1CTADataHolder.css({"width":"0px"});
			rdiPage1CTA.unbind('click').click(function() {
				rdiPage1CTADataHolder.css({"width":"470px"});
				rdiPage1CTA.css({"left":"0px"});
			});
		},
		onExit: function(ele) {
			var rdiPage1CTA = $("#rdi_page1_cta");
			var rdiPage1CTADataHolder = $("#rdi_page1_cta_data_holder");
			
			rdiPage1CTA.css({"left":"230px"});
			rdiPage1CTADataHolder.css({"width":"0px"});
		}
   };
	/* Page 2 */
	var slide = app.slide.leonard_2009 = {
		onEnter: function(ele) {
			var rdiPage2Section1Btn = $("#rdi_page2_data_table_section1_title");
			var rdiPage2Section2Btn = $("#rdi_page2_data_table_section2_title");
			var rdiPage2Section1Image = $("#rdi_page2_section1_image");
			var rdiPage2Section2Image = $("#rdi_page2_section2_image");
			var rdiPage2Section1Clocks = $("#rdi_page2_section1_clock");
			var rdiPage2Section2Clocks = $("#rdi_page2_section2_clock");
			var rdiPage2Section2Clicks = 0;
			var rdiPage2Section2ClocksPos;
			rdiPage2Section2ClocksPos = 0;
			//console.log("Init RDI Section 2 Clicks = " + rdiPage2Section2Clicks + " Pos = -" + rdiPage2Section2ClocksPos);
			
			rdiPage2Section1Image.css({"width":"0px"});
			rdiPage2Section2Image.css({"width":"0px"});
			rdiPage2Section1Clocks.css({"backgroundPosition":"0px 0px"});
			rdiPage2Section2Clocks.css({"backgroundPosition":"0px 0px"});
			
			rdiPage2Section1Btn.unbind('click').click(function() {
				rdiPage2Section1Image.css({"width":"447px"});
				rdiPage2Section1Clocks.css({"backgroundPosition":"-64px 0px"});
			});
			
			rdiPage2Section2Btn.unbind('click').click(function() {
				if (rdiPage2Section2Clicks < 7) {
				rdiPage2Section2ClocksPos += 104;
				rdiPage2Section2Clicks += 1;
				if (rdiPage2Section2Clicks >= 7) {
					rdiPage2Section2Image.css({"width":"447px"});
					rdiPage2Section2Clocks.css({"backgroundPosition":"-728px 0px"});
				} else if (rdiPage2Section2Clicks < 7) {
				   rdiPage2Section2Clocks.css({"backgroundPosition":"-" + rdiPage2Section2ClocksPos + "px"});
				}
				//console.log("RDI Section 2 Clicks = " + rdiPage2Section2Clicks + " Pos = -" + rdiPage2Section2ClocksPos);
				}
			});
			
		},
		onExit: function(ele) {
			var rdiPage2Section1Btn = $("#rdi_page2_data_table_section1_title");
			var rdiPage2Section2Btn = $("#rdi_page2_data_table_section2_title");
			var rdiPage2Section1Image = $("#rdi_page2_section1_image");
			var rdiPage2Section2Image = $("#rdi_page2_section2_image");
			var rdiPage2Section1Clocks = $("#rdi_page2_section1_clock");
			var rdiPage2Section2Clocks = $("#rdi_page2_section2_clock");
			var rdiPage2Section2Clicks = 0;
			var rdiPage2Section2ClocksPos = 0;
			
			rdiPage2Section1Image.css({"width":"0px"});
			rdiPage2Section2Image.css({"width":"0px"});
			rdiPage2Section1Clocks.css({"backgroundPosition":"0px 0px"});
			rdiPage2Section2Clocks.css({"backgroundPosition":"0px 0px"});
			//console.log("Back RDI Section 2 Clicks = " + rdiPage2Section2Clicks + " Pos = -" + rdiPage2Section2ClocksPos);
		}
   };
});