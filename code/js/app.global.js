var subSection = 0;

document.addEventListener('slideEnter', function() {
	var lightBoxData = $(".lightbox_data");
	var lightBoxHolder = $(".lightbox_holder");
	var referenceBtn = $("#reference_btn");
	var referenceDataHolder = $("#reference_data");
	var lightboxContent;
	var largeGraphContent;
	var largeGraphContent2;
	var largeGraphContainer = $(".large_graph_container");
	var enlargeGraph = $(".enlarge_graph");
	var enlargeGraph2 = $(".enlarge_graph2");



	var pageName = app.slideshow.current;
	var closePopup = $(".closePopup");
	
	var backBtnMain = $("#back_btn");
	
	backBtnMain.hide();
	
	//console.log(goingBack);
	//console.log(subSection);
	
	if (subSection == 0) {
		backBtnMain.hide();
	} else if (subSection == 1) {
		backBtnMain.show();
	} else if (subSection == 2) {
		backBtnMain.show();
	}
	
	backBtnMain.unbind('click').click(function() {
		if (subSection == 1) {
			subSection = 0;
			app.goTo("Summary","wealth_of_evidence");
		} else if (pageName == "world_page") {
			subSection = 1;
			goingBack = true;
			app.goTo("BodyOfEvidence");
		}
	});

	referenceBtn.show();
	
	var setRefs = function() {
		if (pageName == "neutropenia") {
			lightboxContent = $("#neutropenia_refs").html();
		} else if (pageName == "neutropenia_p") {
			lightboxContent = $("#neutropenia_p_refs").html();
		} else if (pageName == "kuderer_2006") {
			lightboxContent = $("#kuderer_2006_refs").html();
		} else if (pageName == "kuderer_2006_p") {
			lightboxContent = $("#kuderer_2006_p_refs").html();
		} else if (pageName == "weyckler_2006") {
			lightboxContent = $("#weyckler_2006_refs").html();
		} else if (pageName == "weyckler_2006_p") {
			lightboxContent = $("#weyckler_2006_p_refs").html();
		} else if (pageName == "weyckler_2009") {
			lightboxContent = $("#weyckler_2009_refs").html();
		} else if (pageName == "weyckler_2009_p") {
			lightboxContent = $("#weyckler_2009_p_refs").html();
		} else if (pageName == "lyman_2010") {
			lightboxContent = $("#lyman_2010_refs").html();
		} else if (pageName == "lyman_2010_p") {
			lightboxContent = $("#lyman_2010_p_refs").html();
		} else if (pageName == "kuderer_2007") {
			lightboxContent = $("#kuderer_2007_refs").html();
		} else if (pageName == "kuderer_2007_p") {
			lightboxContent = $("#kuderer_2007_p_refs").html();
		} else if (pageName == "chirivella_2009") {
			lightboxContent = $("#chirivella_2009_refs").html();
		} else if (pageName == "chirivella_2009_p") {
			lightboxContent = $("#chirivella_2009_p_refs").html();
		} else if (pageName == "leonard_2009") {
			lightboxContent = $("#leonard_2009_refs").html();
		} else if (pageName == "leonard_2009_p") {
			lightboxContent = $("#leonard_2009_p_refs").html();
		} else if (pageName == "johnsen_2012") {
			lightboxContent = $("#johnsen_2012_refs").html();
		} else if (pageName == "johnsen_2012_p") {
			lightboxContent = $("#johnsen_2012_p_refs").html();
		} else if (pageName == "cooper_2011") {
			lightboxContent = $("#cooper_2011_refs").html();
		} else if (pageName == "cooper_2011_p") {
			lightboxContent = $("#cooper_2011_p_refs").html();
		} else if (pageName == "aarts_2010") {
			lightboxContent = $("#aarts_2010_refs").html();
		} else if (pageName == "aarts_2010_p") {
			lightboxContent = $("#aarts_2010_p_refs").html();
		} else if (pageName == "almenar_2009") {
			lightboxContent = $("#almenar_2009_refs").html();
		} else if (pageName == "almenar_2009_p") {
			lightboxContent = $("#almenar_2009_p_refs").html();
		} else if (pageName == "moa_1") {
			lightboxContent = $("#moa_1_refs").html();
		} else if (pageName == "moa_2") {
			lightboxContent = $("#moa_2_refs").html();
		} else if (pageName == "key_messages") {
			lightboxContent = $("#key_messages_refs").html();
		} else if (pageName == "key_messages_p") {
			lightboxContent = $("#key_messages_refs_p").html();
		} else if (pageName == "risk_assessment") {
			lightboxContent = $("#risk_assessment_refs").html();
		}
        else if (pageName == "sc_page01") {
            lightboxContent = $("#sc_page01_refs").html();
        }
        else if (pageName == "sc_popup_01") {
            lightboxContent = $("#sc_popup_01_refs").html();
        }

        else if (pageName == "sc_page02") {
            lightboxContent = $("#sc_page02_refs").html();
        }
        else if (pageName == "sc_page03") {
            lightboxContent = $("#sc_page03_refs").html();
        }
        else if (pageName == "sc_page04") {
            lightboxContent = $("#sc_page04_refs").html();
        }
        else if (pageName == "sc_popup_04_01") {
            lightboxContent = $("#sc_popup_04_01_refs").html();
        }
        else if (pageName == "sc_popup_04_02") {
            lightboxContent = $("#sc_popup_04_02_refs").html();
        }
        else if (pageName == "sc_page05") {
            lightboxContent = $("#sc_page05_refs").html();
        }
        else if (pageName == "sc_popup_05") {
            lightboxContent = $("#sc_popup_05_refs").html();
        }
        else if (pageName == "sc_page06") {
            lightboxContent = $("#sc_page06_refs").html();
        }
        else if (pageName == "sc_page07") {
            lightboxContent = $("#sc_page07_refs").html();
        }





        else if (pageName == "pi_info") {
			referenceBtn.hide();
		} else if (pageName == "abbreviations") {
			referenceBtn.hide();
		} else if (pageName == "febrile_neutropenia") {
			lightboxContent = $("#febrile_neutropenia_refs").html();
		} else if (pageName == "febrile_neutropenia_p") {
			lightboxContent = $("#febrile_neutropenia_p_refs").html();
		} else if (pageName == "rdi_calculator") {
			lightboxContent = $("#rdi_calculator_refs").html();
		} else if (pageName == "wealth_of_evidence") {
			if (switchOn == false) {
			   lightboxContent = $("#wealth_of_evidence_refs_strong").html();
			} else if (switchOn == true) {
				 lightboxContent = $("#wealth_of_evidence_refs_weak").html();
			}
		} else if (pageName == "body_of_evidence") {
			if (switchOn == false) {
			   lightboxContent = $("#body_of_evidence_refs_strong").html();
			} else if (switchOn == true) {
				 lightboxContent = $("#body_of_evidence_refs_weak").html();
			}
		} else if (pageName == "world_page") {
			if (switchOn == false) {
			   lightboxContent = $("#world_page_refs_strong").html();
			} else if (switchOn == true) {
				 lightboxContent = $("#world_page_refs_weak").html();
			}
		}
	}


	if (pageName == "weyckler_2006") {
		largeGraphContent = $("#weyckler_2006_graph_holder").html();
	} else if (pageName == "lyman_2010") {
		largeGraphContent = $("#lyman_2010_large_graph_holder").html();
	} else if (pageName == "chirivella_2009") {
		largeGraphContent = $("#chrivella_2009_graph_holder").html();
	} else if (pageName == "kuderer_2006_p") {
		largeGraphContent = $("#kuderer_2006_p_large").html();
	} else if (pageName == "weyckler_2006_p") {
		largeGraphContent = $("#weyckler_2006_p_graph_holder").html();
	} else if (pageName == "weyckler_2009_p") {
		largeGraphContent = $("#weyckler_2009_p_graph_holder").html();
	} else if (pageName == "lyman_2010_p") {
		largeGraphContent = $("#lyman_2010_p_graph1_holder").html();
		largeGraphContent2 = $("#lyman_2010_p_graph2_holder").html();
	} else if (pageName == "chirivella_2009_p") {
		largeGraphContent = $("#chirivella_2009_p_graph_holder").html();
	} else if (pageName == "leonard_2009_p") {
		largeGraphContent = $("#leonard_2009_p_large").html();
	} else if (pageName == "cooper_2011_p") {
		largeGraphContent = $("#cooper_2011_p_large").html();
	} else if (pageName == "almenar_2009_p") {
		largeGraphContent = $("#almenar_2009_p_large").html();
	}
    else if (pageName == "sc_page02") {
        largeGraphContent = $("#sc_page02_large").html();
        largeGraphContent2 = $("#sc_page02_large2").html();
    } else if (pageName == "sc_page03") {
        largeGraphContent = $("#sc_page03_large").html();
    } else if (pageName == "sc_page04") {
        largeGraphContent = $("#sc_page04_large").html();
    } else if (pageName == "sc_popup_04_01") {
        largeGraphContent = $("#sc_popup_04_01_large").html();
    }
    else if (pageName == "sc_popup_04_02") {
        largeGraphContent = $("#sc_popup_04_02_graph_holder").html();
   }

	
	lightBoxData.hide();
	lightBoxHolder.hide();
	referenceDataHolder.hide();

	

	enlargeGraph2.unbind('click').click(function() {
		largeGraphContainer.show();
		referenceDataHolder.empty();
		referenceDataHolder.html(largeGraphContent2);
		lightBoxHolder.show();
		closePopup.show();
		referenceDataHolder.show();
		app.scroller.disableAll();
		console.log("**** Graph Open");
	});

	enlargeGraph.unbind('click').click(function() {
		largeGraphContainer.show();
		referenceDataHolder.empty();
		referenceDataHolder.html(largeGraphContent);
		lightBoxHolder.show();
		closePopup.show();
		referenceDataHolder.show();
		app.scroller.disableAll();
		console.log("**** Graph Open");
	});

	
	referenceBtn.unbind('click').click(function() {
		setRefs();
		largeGraphContainer.hide();
		referenceDataHolder.empty();
		referenceDataHolder.html(lightboxContent);
		lightBoxHolder.show();
		closePopup.show();
		referenceDataHolder.show();
		app.scroller.disableAll();
		console.log("**** Lightbox Open");
	});
	
	lightBoxHolder.unbind('click').click(function() {
		referenceDataHolder.empty();
		lightBoxHolder.hide();
		referenceDataHolder.hide();
		closePopup.hide();
		app.scroller.enableAll();
		console.log("**** Lightbox Closed");
	});

	closePopup.unbind('click').click(function() {
		referenceDataHolder.empty();
		lightBoxHolder.hide();
		referenceDataHolder.hide();
		closePopup.hide();
		app.scroller.enableAll();
		console.log("**** Lightbox Closed");
		largeGraphContainer.hide();
	});
});