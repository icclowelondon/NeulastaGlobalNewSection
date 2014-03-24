document.addEventListener('contentLoad', function() {
	var raKeyLeft = $("#ra_key_left");
	var raRefreshBtn = $("#ra_refresh_btn");
	var raHideBoxes = $("#ra_hide_block");
	/* Central Column */
	var raCentralBlock1 = $("#ra_central_block1");
	var raCentralBlock1Arrow = $("#ra_central_block1_arrow");
	var raCentralBlock2 = $("#ra_central_block2");
	var raCentralBlock2Arrow = $("#ra_central_block2_arrow");
	var raCentralBlock3 = $("#ra_central_main_holder");
	var raCentralBlock3Arrow = $("#ra_central_block3_arrow");
	var raCentralBlock4 = $("#ra_central_block4");
	var raCentralBottomArrowLeft = $("#ra_bottom_arrow1_left");
	var raCentralBottomArrowRight = $("#ra_bottom_arrow1_right");
	/* Left Column */
	var raTopArrowLeft = $("#ra_top_arrow_left");
	var raLeftBlock1 = $("#ra_left_block1");
	var raLeftArrowMid = $("#ra_mid_down_arrow_left");
	var raLeftBlock2 = $("#ra_left_block2");
	/* Right Column */
	var raTopArrowRight = $("#ra_top_arrow_right");
	var raRightBlock1 = $("#ra_right_block1");
	var raRightArrowMid = $("#ra_mid_down_arrow_right");
	var raRightBlock2 = $("#ra_right_block2");
	/* Bottom Bits */
	var raBottomArrowLeft = $("#ra_bottom_arrow2_left");
	var raBottomBlockLeft = $("#ra_bottom_block_left");
	var raBottomBlockRight = $("#ra_bottom_block_right");
	var raBottomArrowRight = $("#ra_bottom_arrow2_right");
	/* Checkboxes */
	var raCheckBox1 = $("#ra_central_input1");
	var raCheckBox2 = $("#ra_central_input2");
	var raCheckBox3 = $("#ra_central_input3");
	var raCheckBox4 = $("#ra_central_input4");
	var raCheckBox5 = $("#ra_central_input5");
	var raCheckBox6 = $("#ra_central_input6");
	var raCheckBox7 = $("#ra_central_input7");
	
	var raRoute = 0;
	
	raHideBoxes.css({"display":"none"});
	
	function hideAll() {
		/* Central Colomn Hide */
		raCentralBlock1Arrow.css({"height":"0px"});
		raCentralBlock2.css({"opacity":"0","width":"0px","height":"0px"});
		raCentralBlock2Arrow.css({"height":"0px"});
		raCentralBlock3.css({"opacity":"0","width":"0px","height":"0px"});
		raCentralBlock3Arrow.css({"height":"0px"});
		raCentralBlock4.css({"opacity":"0","width":"0px","height":"0px"});
		raCentralBottomArrowLeft.css({"width":"0px","height":"2px"});
		raCentralBottomArrowRight.css({"width":"0px","height":"2px"});
		/* Left Column Hide */
		raTopArrowLeft.css({"width":"0px","height":"2px"});
		raLeftBlock1.css({"opacity":"0","width":"0px","height":"0px"});
		raLeftArrowMid.css({"height":"0px"});
		raLeftBlock2.css({"opacity":"0","width":"0px","height":"0px"});
		/* Right Column Hide */
		raTopArrowRight.css({"width":"0px","height":"2px"});
		raRightBlock1.css({"opacity":"0","width":"0px","height":"0px"});
		raRightArrowMid.css({"height":"0px"});
		raRightBlock2.css({"opacity":"0","width":"0px","height":"0px"});
		/* Bottom Hide */
		raBottomArrowLeft.css({"width":"0px","height":"10px"});
		raBottomBlockLeft.css({"opacity":"0","width":"0px","height":"0px"});
		raBottomBlockRight.css({"opacity":"0","width":"0px","height":"0px"});
		raBottomArrowRight.css({"width":"0px","height":"10px"});
	}
	
	hideAll();
	
	raCentralBlock1.unbind('click').click(function() {
		raHideBoxes.css({"display":"none"});
		raCentralBlock1Arrow.css({"height":"15px"});
		setTimeout(function() {
		   raCentralBlock2.css({"opacity":"1","width":"270px","height":"27px"});
		},250);
		raTopArrowLeft.css({"width":"120px"});
		setTimeout(function() {
			raTopArrowLeft.css({"height":"68px"});
		},250);
		setTimeout(function() {
		   raLeftBlock1.css({"opacity":"1","width":"180px","height":"27px"});
		}, 500);
		raTopArrowRight.css({"width":"120px"});
		setTimeout(function() {
			raTopArrowRight.css({"height":"68px"});
		},250);
		setTimeout(function() {
		   raRightBlock1.css({"opacity":"1","width":"180px","height":"27px"});
		}, 500);
	});
	
	raLeftBlock1.unbind('click').click(function() {
		raLeftArrowMid.css({"height":"293px"});
		setTimeout(function() {
		   raLeftBlock2.css({"opacity":"1","width":"180px","height":"35px"});
		},250);
	});
	
	raCentralBlock2.unbind('click').click(function() {
		raCentralBlock2Arrow.css({"height":"15px"});
		setTimeout(function() {
		   raCentralBlock3.css({"opacity":"1","width":"270px","height":"290px"});
		},250);
		setTimeout(function() {
		   raCentralBlock3Arrow.css({"height":"15px"});
		},250);
		setTimeout(function() {
		   raCentralBlock4.css({"opacity":"1","width":"235px","height":"35px"});
		},500);
	});
	
	raRightBlock1.unbind('click').click(function() {
		raRightArrowMid.css({"height":"293px"});
		setTimeout(function() {
		   raRightBlock2.css({"opacity":"1","width":"180px","height":"35px"});
		},250);
	});
	
	function raRightSideAnim() {
		   raCentralBottomArrowLeft.css({"width":"0px","height":"2px"});
			raBottomBlockLeft.css({"opacity":"0","width":"0px","height":"0px"});
			raBottomArrowLeft.css({"width":"0px","height":"2px"});
			raCentralBottomArrowRight.css({"width":"24px"});
			setTimeout(function() {
				raCentralBottomArrowRight.css({"height":"40px"});
			},250);
			setTimeout(function() {
			   raBottomBlockRight.css({"opacity":"1","width":"180px","height":"27px"});
			},500);
			setTimeout(function() {
			   raBottomArrowRight.css({"width":"44px"});
			},750);
			setTimeout(function() {
			   raBottomArrowRight.css({"height":"36px"});
			},1000);
			
	      setTimeout(function() {
			raRightArrowMid.css({"height":"293px"});
			},900);
			setTimeout(function() {
				raRightBlock2.css({"opacity":"1","width":"180px","height":"35px"});
			},1250);
			
	}
	
	function raLeftSideAnim() {
		   raCentralBottomArrowRight.css({"width":"0px","height":"2px"});
			raBottomBlockRight.css({"opacity":"0","width":"0px","height":"0px"});
			raBottomArrowRight.css({"width":"0px","height":"2px"});
			raCentralBottomArrowLeft.css({"width":"24px"});
			setTimeout(function() {
				raCentralBottomArrowLeft.css({"height":"40px"});
			},250);
			setTimeout(function() {
			   raBottomBlockLeft.css({"opacity":"1","width":"180px","height":"27px"});
			},500);
			setTimeout(function() {
			   raBottomArrowLeft.css({"width":"44px"});
			},750);
			setTimeout(function() {
				raBottomArrowLeft.css({"height":"36px"});
			},1000);
			
			setTimeout(function() {
			raLeftArrowMid.css({"height":"293px"});
			},900);
			setTimeout(function() {
				raLeftBlock2.css({"opacity":"1","width":"180px","height":"35px"});
			},1250);
	}
	
	raCentralBlock4.unbind('click').click(function() {
		var raCheckboxesAmount = $("input.ra_check_inputs:checked").length;
		if (raCheckboxesAmount <= 1) {
			raRightSideAnim()
		} else if (raCheckboxesAmount >= 1) {
			raLeftSideAnim();
		}
	});
	
	raRefreshBtn.unbind('click').click(function() {
		hideAll();
		raHideBoxes.css({"display":"block"});
		raCheckBox1.attr('checked', false);
		raCheckBox2.attr('checked', false);
		raCheckBox3.attr('checked', false);
		raCheckBox4.attr('checked', false);
		raCheckBox5.attr('checked', false);
		raCheckBox6.attr('checked', false);
		raCheckBox7.attr('checked', false);
	});
	
});