var twinRefs = false;
var switchOn = false;
var goingToSub = false;
var goingBack = false;

document.addEventListener('presentationInit', function() {
	var switchBtn = $("#switch_btn");
	switchBtn.hide();
	
	/* -- Lipeg Section Pages -- */
	/* Wealth of Evidence Page */
	var slide = app.slide.wealth_of_evidence = {
		onEnter: function(ele) {
			var wealthSwitchContent = $(".wealth_of_evidence_hidden_content");
			var wealthPreHeader = $("#wealth_of_evidence_pre_header");
			var wealthListItem1 = $("#wealth_of_evidence_list_item1");
			var wealthListItem2 = $("#wealth_of_evidence_list_item2");
			var wealthListItem2Holder = $("#wealth_of_evidence_list_item2_holder");
			var wealthSubList = $("#wealth_of_evidence_sub_list");
			var wealthTopItemHolder = $("#wealth_of_evidence_list_top_item_holder");
			var wealthTopItem = $("#wealth_of_evidence_list_top_item");
			var wealthTopItemShowBtn = $("#wealth_of_evidence_list_down_arrow3");
			var wealthTopItemLeftBtn = $("#wealth_of_evidence_list_top_tick1");
			var wealthTopItemRightBtn = $("#wealth_of_evidence_list_top_tick2");
			var subLightboxContent1 = $("#wealth_of_evidence_add_popup1").html();
			var subLightboxContent2 = $("#wealth_of_evidence_add_popup2").html();
			
			/* Lightbox extras */
			var lightBoxData = $(".lightbox_data");
			var lightBoxHolder = $(".lightbox_holder");
			var referenceBtn = $("#reference_btn");
			var referenceDataHolder = $("#reference_data");
			var largeGraphContainer = $(".large_graph_container");
			var enlargeGraph = $(".enlarge_graph");
			var enlargeGraph2 = $(".enlarge_graph2");
			var closePopup = $(".closePopup");
			
			switchBtn.show();
			switchOn = false;
			wealthTopItemHolder.hide();
			
			console.log(switchOn);
			
			switchBtn.unbind('click').click(function(){
				if (switchOn == false) {
					//wealthPreHeader.hide();
					wealthSwitchContent.css({"display":"block"});
					console.log("Switch On");
					switchOn = true;
				} else if (switchOn == true) {
					//wealthPreHeader.show();
					wealthSwitchContent.css({"display":"none"});
					wealthTopItemHolder.hide();
					console.log("Switch Off");
					switchOn = false;
				}
			});
			
			/*wealthListItem1.unbind('click').click(function() {
				wealthListItem2Holder.css({"height":"83px"});
				console.log("Show First Item");
			});
			
			wealthListItem2.unbind('click').click(function() {
				wealthSubList.css({"height":"320px"});
				console.log("Show Second Item");
			});*/
			
			wealthTopItemShowBtn.unbind('click').click(function() {
				wealthTopItemHolder.show();
				console.log("Show Top Item");
			});
			
			wealthTopItemLeftBtn.unbind('click').click(function() {
				largeGraphContainer.hide();
				referenceDataHolder.empty();
				referenceDataHolder.html(subLightboxContent1);
				lightBoxHolder.show();
				closePopup.show();
				referenceDataHolder.show();
				console.log("**** Lightbox Open");
			});
			
			wealthTopItemRightBtn.unbind('click').click(function() {
				largeGraphContainer.hide();
				referenceDataHolder.empty();
				referenceDataHolder.html(subLightboxContent2);
				lightBoxHolder.show();
				closePopup.show();
				referenceDataHolder.show();
				console.log("**** Lightbox Open");
			});
			
			
			
			/* Button Definitions */
			var mainLeftClickThrough = $(".wealth_of_evidence_list_tick_left");
			var mainLeftClickThroughBody = $("#wealth_of_evidence_list_tick7");
			var mainRightClickThroughBody = $("#wealth_of_evidence_list_right_tick7");
			
			mainLeftClickThrough.unbind('click').click(function() {
				var thisID = $(this).attr('id');
				if (thisID == "wealth_of_evidence_list_tick1") {
					subSection = 1;
					app.goTo("MOASingle");
					console.log("--> Got to MOA 2");
				} else if (thisID == "wealth_of_evidence_list_tick2") {
					subSection = 1;
					app.goTo("Cooper2011P");
					console.log("--> Got to Cooper 2011 P");
				} else if (thisID == "wealth_of_evidence_list_tick3") {
					subSection = 1;
					app.goTo("Almenar2009P");
					console.log("--> Got to Almenar 2009 P");
				} else if (thisID == "wealth_of_evidence_list_tick4") {
					subSection = 1;
					app.goTo("Leonard2009P");
					console.log("--> Got to Leonard 2009 P");
				} else if (thisID == "wealth_of_evidence_list_tick5") {
					subSection = 1;
					app.goTo("Kuderer2007P");
					console.log("--> Got to Kuderer 2007 P");
				} else if (thisID == "wealth_of_evidence_list_tick6") {
					subSection = 1;
					app.goTo("Kuderer2007P");
					console.log("--> Got to Kuderer 2007 P");
				}
			});
			
			mainLeftClickThroughBody.unbind('click').click(function() {
				subSection = 1;
				switchOn = false;
				app.goTo("BodyOfEvidence");
			});
			
			mainRightClickThroughBody.unbind('click').click(function() {
				subSection = 1;
				app.goTo("BodyOfEvidence");
			});
		},
		onExit: function(ele) {
			var wealthSwitchContent = $(".wealth_of_evidence_hidden_content");
			var wealthPreHeader = $("#wealth_of_evidence_pre_header");
			var wealthTopItemHolder = $("#wealth_of_evidence_list_top_item_holder");
			
			switchBtn.hide();
			wealthTopItemHolder.hide();
			
			wealthPreHeader.show();
			wealthSwitchContent.css({"display":"none"});
		}
   };
	
	/* Body of Evidence Page */
	var slide = app.slide.body_of_evidence = {
		onEnter: function(ele) {
			var wealthSwitchContent = $(".wealth_of_evidence_hidden_content");
			var bodyStrongCirclesHolder = $("#body_of_evidence_circles_holder_strong");
			var bodyStrongHeader = $("#wealth_of_evidence_pre_header");
			var bodyStrongTopCopy = $("#wealth_of_evidence_pre_top_copy");
			var mainBG = $("#presentation");
			var MapBtn = $("#body_of_evidence_map_btn");
			
			/* Lightbox extras */
			var lightBoxData = $(".lightbox_data");
			var lightBoxHolder = $(".lightbox_holder");
			var referenceBtn = $("#reference_btn");
			var referenceDataHolder = $("#reference_data");
			var largeGraphContainer = $(".large_graph_container");
			var enlargeGraph = $(".enlarge_graph");
			var enlargeGraph2 = $(".enlarge_graph2");
			var closePopup = $(".closePopup");
			
			switchBtn.show();
			goingToSub = false;
			
			console.log(switchOn);
			
			if (switchOn == true) {
				wealthSwitchContent.css({"display":"block"});
				bodyStrongHeader.hide();
				bodyStrongTopCopy.hide();
				bodyStrongCirclesHolder.hide();
				mainBG.addClass("non_branded_bg");
				console.log("Switch On");
			} else if (switchOn == false) {
				wealthSwitchContent.css({"display":"none"});
				bodyStrongHeader.show();
				bodyStrongTopCopy.show();
				bodyStrongCirclesHolder.show();
				mainBG.removeClass("non_branded_bg");
				console.log("Switch Off");
			}
			
			switchBtn.unbind('click').click(function(){
			   if (switchOn == false) {
					wealthSwitchContent.css({"display":"block"});
					bodyStrongHeader.hide();
					bodyStrongTopCopy.hide();
					bodyStrongCirclesHolder.hide();
					mainBG.addClass("non_branded_bg");
					switchOn = true;
					console.log("Switch On");
				} else if (switchOn == true) {
					wealthSwitchContent.css({"display":"none"});
					bodyStrongHeader.show();
					bodyStrongTopCopy.show();
					bodyStrongCirclesHolder.show();
					mainBG.removeClass("non_branded_bg");
					switchOn = false;
					console.log("Switch Off");
				}
			});
			
			MapBtn.unbind('click').click(function() {
				subSection = 2;
				goingToSub = true;
				app.goTo("WorldPage");
				console.log(subSection);
				console.log("--> Got to Map Page");
			});
			
			/* Button Definitions */
			var strongBodyBtn1 = $("#body_of_evidence_circle1");
			var strongBodyBtn2 = $("#body_of_evidence_circle2");
			var strongBodyBtn3 = $("#body_of_evidence_circle3");
			var strongBodyBtn4 = $("#body_of_evidence_circle4");
			var strongBodyBtn5 = $("#body_of_evidence_circle5");
			var strongBodyBtn6 = $("#body_of_evidence_circle6");
			var strongBodyBtn7 = $("#body_of_evidence_circle7");
			var strongBodyBtn8 = $("#body_of_evidence_circle8");
			var strongBodyBtn9 = $("#body_of_evidence_circle9");
			var strongBodyBtn10 = $("#body_of_evidence_circle10");
			
			var strongBodyPopup1 = $("#body_of_evidence_popup_nhl").html();
			var strongBodyPopup2 = $("#body_of_evidence_popup_hodgkins").html();
			var strongBodyPopup3 = $("#body_of_evidence_popup_nsclc").html();
			var strongBodyPopup4 = $("#body_of_evidence_popup_breast").html();
			var strongBodyPopup5 = $("#body_of_evidence_popup_sclc").html();
			var strongBodyPopup6 = $("#body_of_evidence_popup_ovarian").html();
			var strongBodyPopup7 = $("#body_of_evidence_popup_colorectal").html();
			var strongBodyPopup8 = $("#body_of_evidence_popup_paediatric").html();
			var strongBodyPopup9 = $("#body_of_evidence_popup_aml").html();
			var strongBodyPopup10 = $("#body_of_evidence_popup_myeloma").html();
			
			var weakBodyBtn1 = $("#body_of_evidence_weak_circle1");
			var weakBodyBtn2 = $("#body_of_evidence_weak_circle2");
			
			var weakBodyPopup1 = $("#body_of_evidence_popup_breast_weak").html();
			var weakBodyPopup2 = $("#body_of_evidence_popup_lung_weak").html();
			
			strongBodyBtn1.unbind('click').click(function() {
				largeGraphContainer.hide();
				referenceDataHolder.empty();
				referenceDataHolder.html(strongBodyPopup1);
				lightBoxHolder.show();
				referenceDataHolder.show();
				
				var strongBodyPopup1Table = $("#body_of_evidence_popup_strong1 table");
				
				//referenceDataHolder.find("#body_of_evidence_popup_strong1_up").css({backgroundPostion:"0 -29px"});
				
				referenceDataHolder.find("#body_of_evidence_popup_strong1_down").unbind('click').click(function() {
					strongBodyPopup1Table.css({"top":"-450px"});
					console.log("Table 1 goes Down");
				});
				
				referenceDataHolder.find("#body_of_evidence_popup_strong1_up").unbind('click').click(function() {
					strongBodyPopup1Table.css({"top":"0px"});
					console.log("Table 1 goes Up");
				});
				
				var strongBodyPopupCloseBtn = $(".body_of_evidence_popup_title span");
				
				strongBodyPopupCloseBtn.click(function() {
					referenceDataHolder.empty();
					lightBoxHolder.hide();
					referenceDataHolder.hide();
					closePopup.hide();
					app.scroller.enableAll();
					console.log("**** Lightbox Closed");
				});
			
				console.log("**** Lightbox Open");
			});
			
			strongBodyBtn2.unbind('click').click(function() {
				largeGraphContainer.hide();
				referenceDataHolder.empty();
				referenceDataHolder.html(strongBodyPopup2);
				lightBoxHolder.show();
				referenceDataHolder.show();
				
				var strongBodyPopupCloseBtn = $(".body_of_evidence_popup_title span");
				
				strongBodyPopupCloseBtn.click(function() {
					referenceDataHolder.empty();
					lightBoxHolder.hide();
					referenceDataHolder.hide();
					closePopup.hide();
					app.scroller.enableAll();
					console.log("**** Lightbox Closed");
				});
				
				console.log("**** Lightbox Open");
			});
			
			strongBodyBtn3.unbind('click').click(function() {
				largeGraphContainer.hide();
				referenceDataHolder.empty();
				referenceDataHolder.html(strongBodyPopup3);
				lightBoxHolder.show();
				referenceDataHolder.show();
				
				var strongBodyPopupCloseBtn = $(".body_of_evidence_popup_title span");
				
				strongBodyPopupCloseBtn.click(function() {
					referenceDataHolder.empty();
					lightBoxHolder.hide();
					referenceDataHolder.hide();
					closePopup.hide();
					app.scroller.enableAll();
					console.log("**** Lightbox Closed");
				});
				
				console.log("**** Lightbox Open");
			});
			
			strongBodyBtn4.unbind('click').click(function() {
				largeGraphContainer.hide();
				referenceDataHolder.empty();
				referenceDataHolder.html(strongBodyPopup4);
				lightBoxHolder.show();
				referenceDataHolder.show();
				
				var strongBodyPopup4Table = $("#body_of_evidence_popup_strong4 table");
				
				//referenceDataHolder.find("#body_of_evidence_popup_strong1_up").css({backgroundPostion:"0 -29px"});
				
				referenceDataHolder.find("#body_of_evidence_popup_strong4_down").unbind('click').click(function() {
					strongBodyPopup4Table.css({"top":"-400px"});
					referenceDataHolder.find("#body_of_evidence_popup_strong4").css({"height":"450px"});
					console.log("Table 4 goes Down");
				});
				
				referenceDataHolder.find("#body_of_evidence_popup_strong4_up").unbind('click').click(function() {
					strongBodyPopup4Table.css({"top":"0px"});
					referenceDataHolder.find("#body_of_evidence_popup_strong4").css({"height":"398px"});
					console.log("Table 4 goes Up");
				});
				
				var strongBodyPopupCloseBtn = $(".body_of_evidence_popup_title span");
				
				strongBodyPopupCloseBtn.click(function() {
					referenceDataHolder.empty();
					lightBoxHolder.hide();
					referenceDataHolder.hide();
					closePopup.hide();
					app.scroller.enableAll();
					
					var strongBodyPopupCloseBtn = $(".body_of_evidence_popup_title span");
				
					strongBodyPopupCloseBtn.click(function() {
						referenceDataHolder.empty();
						lightBoxHolder.hide();
						referenceDataHolder.hide();
						closePopup.hide();
						app.scroller.enableAll();
						console.log("**** Lightbox Closed");
					});
				
					console.log("**** Lightbox Closed");
				});
				
				console.log("**** Lightbox Open");
			});
			
			strongBodyBtn5.unbind('click').click(function() {
				largeGraphContainer.hide();
				referenceDataHolder.empty();
				referenceDataHolder.html(strongBodyPopup5);
				lightBoxHolder.show();
				referenceDataHolder.show();
				
				var strongBodyPopupCloseBtn = $(".body_of_evidence_popup_title span");
				
				strongBodyPopupCloseBtn.click(function() {
					referenceDataHolder.empty();
					lightBoxHolder.hide();
					referenceDataHolder.hide();
					closePopup.hide();
					app.scroller.enableAll();
					console.log("**** Lightbox Closed");
				});
				
				console.log("**** Lightbox Open");
			});
			
			strongBodyBtn6.unbind('click').click(function() {
				largeGraphContainer.hide();
				referenceDataHolder.empty();
				referenceDataHolder.html(strongBodyPopup6);
				lightBoxHolder.show();
				referenceDataHolder.show();
				
				var strongBodyPopupCloseBtn = $(".body_of_evidence_popup_title span");
				
				strongBodyPopupCloseBtn.click(function() {
					referenceDataHolder.empty();
					lightBoxHolder.hide();
					referenceDataHolder.hide();
					closePopup.hide();
					app.scroller.enableAll();
					console.log("**** Lightbox Closed");
				});
				
				console.log("**** Lightbox Open");
			});
			
			strongBodyBtn7.unbind('click').click(function() {
				largeGraphContainer.hide();
				referenceDataHolder.empty();
				referenceDataHolder.html(strongBodyPopup7);
				lightBoxHolder.show();
				referenceDataHolder.show();
				
				var strongBodyPopupCloseBtn = $(".body_of_evidence_popup_title span");
				
				strongBodyPopupCloseBtn.click(function() {
					referenceDataHolder.empty();
					lightBoxHolder.hide();
					referenceDataHolder.hide();
					closePopup.hide();
					app.scroller.enableAll();
					console.log("**** Lightbox Closed");
				});
				
				
				console.log("**** Lightbox Open");
			});
			
			strongBodyBtn8.unbind('click').click(function() {
				largeGraphContainer.hide();
				referenceDataHolder.empty();
				referenceDataHolder.html(strongBodyPopup8);
				lightBoxHolder.show();
				referenceDataHolder.show();
				
				var strongBodyPopupCloseBtn = $(".body_of_evidence_popup_title span");
				
				strongBodyPopupCloseBtn.click(function() {
					referenceDataHolder.empty();
					lightBoxHolder.hide();
					referenceDataHolder.hide();
					closePopup.hide();
					app.scroller.enableAll();
					console.log("**** Lightbox Closed");
				});
				
				console.log("**** Lightbox Open");
			});
			
			strongBodyBtn9.unbind('click').click(function() {
				largeGraphContainer.hide();
				referenceDataHolder.empty();
				referenceDataHolder.html(strongBodyPopup9);
				lightBoxHolder.show();
				referenceDataHolder.show();
				
				var strongBodyPopupCloseBtn = $(".body_of_evidence_popup_title span");
				
				strongBodyPopupCloseBtn.click(function() {
					referenceDataHolder.empty();
					lightBoxHolder.hide();
					referenceDataHolder.hide();
					closePopup.hide();
					app.scroller.enableAll();
					console.log("**** Lightbox Closed");
				});
				
				console.log("**** Lightbox Open");
			});
			
			strongBodyBtn10.unbind('click').click(function() {
				largeGraphContainer.hide();
				referenceDataHolder.empty();
				referenceDataHolder.html(strongBodyPopup10);
				lightBoxHolder.show();
				referenceDataHolder.show();
				
				var strongBodyPopupCloseBtn = $(".body_of_evidence_popup_title span");
				
				strongBodyPopupCloseBtn.click(function() {
					referenceDataHolder.empty();
					lightBoxHolder.hide();
					referenceDataHolder.hide();
					closePopup.hide();
					app.scroller.enableAll();
					console.log("**** Lightbox Closed");
				});
				
				console.log("**** Lightbox Open");
			});
			
			weakBodyBtn1.unbind('click').click(function() {
				largeGraphContainer.hide();
				referenceDataHolder.empty();
				referenceDataHolder.html(weakBodyPopup1);
				lightBoxHolder.show();
				referenceDataHolder.show();
				
				var weakBodyPopupCloseBtn = $(".body_of_evidence_popup_title_weak span");
				
				weakBodyPopupCloseBtn.click(function() {
					referenceDataHolder.empty();
					lightBoxHolder.hide();
					referenceDataHolder.hide();
					closePopup.hide();
					app.scroller.enableAll();
					console.log("**** Lightbox Closed");
				});
				
				console.log("**** Lightbox Open");
			});
			
			weakBodyBtn2.unbind('click').click(function() {
				largeGraphContainer.hide();
				referenceDataHolder.empty();
				referenceDataHolder.html(weakBodyPopup2);
				lightBoxHolder.show();
				referenceDataHolder.show();
				
				var weakBodyPopupCloseBtn = $(".body_of_evidence_popup_title_weak span");
				
				weakBodyPopupCloseBtn.click(function() {
					referenceDataHolder.empty();
					lightBoxHolder.hide();
					referenceDataHolder.hide();
					closePopup.hide();
					app.scroller.enableAll();
					console.log("**** Lightbox Closed");
				});
				
				console.log("**** Lightbox Open");
			});
			
		},
		onExit: function(ele) {
			var wealthSwitchContent = $(".wealth_of_evidence_hidden_content");
			var bodyStrongCirclesHolder = $("#body_of_evidence_circles_holder_strong");
			var bodyStrongHeader = $("#wealth_of_evidence_pre_header");
			var bodyStrongTopCopy = $("#wealth_of_evidence_pre_top_copy");
			var mainBG = $("#presentation");
			
			switchBtn.hide();
			
			if (goingToSub == false) {
			   subSection = 0;
			} else if (goingToSub == true) {
			   subSection = 2;
			}
			
			bodyStrongHeader.show();
			bodyStrongTopCopy.show();
			bodyStrongCirclesHolder.show();
			
			mainBG.removeClass("non_branded_bg");
			
			wealthSwitchContent.css({"display":"none"});
			
		}
   };
	
	/* World Page */
	var slide = app.slide.world_page = {
		onEnter: function(ele) {
			var wealthSwitchContent = $(".wealth_of_evidence_hidden_content");
			var bodyStrongCirclesHolder = $("#body_of_evidence_circles_holder_strong");
			var bodyStrongHeader = $("#wealth_of_evidence_pre_header");
			var bodyStrongTopCopy = $("#wealth_of_evidence_pre_top_copy");
			var mainBG = $("#presentation");
			
			var worldMapBlueOverlay = $("#world_page_map_blue_overlay");
			var worldMapGreyOverlay = $("#world_page_map_grey_overlay");
			
			worldMapBlueOverlay.addClass("world_page_map_opacity");
			
			goingBack = false;
			
			switchBtn.show();
			
			if (switchOn == true) {
				wealthSwitchContent.css({"display":"block"});
				bodyStrongHeader.hide();
				bodyStrongTopCopy.hide();
				worldMapBlueOverlay.removeClass("world_page_map_opacity");
				worldMapGreyOverlay.addClass("world_page_map_opacity");
				mainBG.addClass("non_branded_bg");
				console.log("Switch On");
			} else if (switchOn == false) {
				wealthSwitchContent.css({"display":"none"});
				bodyStrongHeader.show();
				bodyStrongTopCopy.show();
				worldMapBlueOverlay.addClass("world_page_map_opacity");
				worldMapGreyOverlay.removeClass("world_page_map_opacity");
				mainBG.removeClass("non_branded_bg");
				console.log("Switch Off");
			}
			
			switchBtn.unbind('click').click(function(){
			   if (switchOn == false) {
					wealthSwitchContent.css({"display":"block"});
					bodyStrongHeader.hide();
					bodyStrongTopCopy.hide();
					worldMapBlueOverlay.removeClass("world_page_map_opacity");
					worldMapGreyOverlay.addClass("world_page_map_opacity");
					mainBG.addClass("non_branded_bg");
					switchOn = true;
					console.log("Switch On");
				} else if (switchOn == true) {
					wealthSwitchContent.css({"display":"none"});
					bodyStrongHeader.show();
					bodyStrongTopCopy.show();
					worldMapBlueOverlay.addClass("world_page_map_opacity");
					worldMapGreyOverlay.removeClass("world_page_map_opacity");
					mainBG.removeClass("non_branded_bg");
					switchOn = false;
					console.log("Switch Off");
				}
			});
			
			
		},
		onExit: function(ele) {
			var wealthSwitchContent = $(".wealth_of_evidence_hidden_content");
			var bodyStrongCirclesHolder = $("#body_of_evidence_circles_holder_strong");
			var bodyStrongHeader = $("#wealth_of_evidence_pre_header");
			var bodyStrongTopCopy = $("#wealth_of_evidence_pre_top_copy");
			var mainBG = $("#presentation");
			
			switchBtn.hide();
			//subSection = 0;
			if (goingBack == true) {
			} else if (goingBack == false) {
				subSection = 0;
			}
			
			bodyStrongHeader.show();
			bodyStrongTopCopy.show();
			bodyStrongCirclesHolder.show();
			
			mainBG.removeClass("non_branded_bg");
			
			wealthSwitchContent.css({"display":"none"});
			
		}
   };
});