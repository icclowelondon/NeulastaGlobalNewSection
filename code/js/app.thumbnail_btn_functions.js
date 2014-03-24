var sectionNumber = 0;

/* Summary Page --New-- */
function mainNavSummary() {
	if (sectionNumber == 1) {
	    app.goTo("Summary","key_messages");
	} else if (sectionNumber == 2) {
		 app.goTo("SummaryP","key_messages_p");
	}
}

/* Burden of FN Section Buttons */
function mainNavBurdenBtn1() {
	if (sectionNumber == 1) {
	    app.goTo("BurdenOfFN","kuderer_2006");
	} else if (sectionNumber == 2) {
		 app.goTo("BurdenOfFNP","kuderer_2006_p");
	}
}

function mainNavBurdenBtn2() {
	if (sectionNumber == 1) {
	    app.goTo("BurdenOfFN","weyckler_2006");
	} else if (sectionNumber == 2) {
		 app.goTo("BurdenOfFNP","weyckler_2006_p");
	}
}

function mainNavBurdenBtn3() {
	if (sectionNumber == 1) {
	    app.goTo("BurdenOfFN","weyckler_2009");
	} else if (sectionNumber == 2) {
		 app.goTo("BurdenOfFNP","weyckler_2009_p");
	}
}

function mainNavBurdenBtn4() {
	if (sectionNumber == 1) {
	    app.goTo("BurdenOfFN","lyman_2010");
	} else if (sectionNumber == 2) {
		 app.goTo("BurdenOfFNP","lyman_2010_p");
	}
}

function mainNavBurdenBtn5() {
	if (sectionNumber == 1) {
	    app.goTo("BurdenOfFN","kuderer_2007");
	} else if (sectionNumber == 2) {
		 app.goTo("BurdenOfFNP","kuderer_2007_p");
	}
}

/* RDI Section Buttons */
function mainNavRDIBtn1() {
	if (sectionNumber == 1) {
	    app.goTo("RDI","chirivella_2009");
	} else if (sectionNumber == 2) {
		 app.goTo("RDIP","chirivella_2009_p");
	}
}

function mainNavRDIBtn2() {
	if (sectionNumber == 1) {
	    app.goTo("RDI","leonard_2009");
	} else if (sectionNumber == 2) {
		 app.goTo("RDIP","leonard_2009_p");
	}
}

function mainNavRDIBtn3() {
	if (sectionNumber == 1) {
	    app.goTo("RDI","johnsen_2012");
	} else if (sectionNumber == 2) {
		 app.goTo("RDIP","johnsen_2012_p");
	}
}

function mainNavRDIBtn4() {
	if (sectionNumber == 1) {
	    app.goTo("RDI","rdi_calculator");
	} else if (sectionNumber == 2) {
		 app.goTo("RDIP","rdi_calculator");
	}
}

/* Neulasta Efficacy Pages */
function mainNavNEBtn1() {
	if (sectionNumber == 1) {
	    app.goTo("NeulastaEfficacy","cooper_2011");
	} else if (sectionNumber == 2) {
		 app.goTo("NeulastaEfficacyP","cooper_2011_p");
	}
}

function mainNavNEBtn2() {
	if (sectionNumber == 1) {
	    app.goTo("NeulastaEfficacy","aarts_2010");
	} else if (sectionNumber == 2) {
		 app.goTo("NeulastaEfficacyP","aarts_2010_p");
	}
}

function mainNavNEBtn3() {
	if (sectionNumber == 1) {
	    app.goTo("NeulastaEfficacy","almenar_2009");
	} else if (sectionNumber == 2) {
		 app.goTo("NeulastaEfficacyP","almenar_2009_p");
	}
}

/* MOA Section Buttons */
function mainNavMOABtn1() {
	app.goTo("MOA","moa_1");
}

function mainNavMOABtn2() {
	app.goTo("MOA","moa_2");
}

/* Info Section Buttons */
function mainNavInfoBtn1() {
	app.goTo("Info","pi_info");
}

function mainNavInfoBtn2() {
	app.goTo("Info","abbreviations");
}

function mainNavBtn2() {
	menuThumbs.css("left","270px");
	menuThumbIndicator.css("left","47px");
	menuThumbsList.empty();
	if (sectionNumber == 1) {
	   menuThumbsList.append("<li onclick='mainNavBurdenBtn1()'><div id='burden_of_fn_btn1'></div></li><li onclick='mainNavBurdenBtn2()'><div id='burden_of_fn_btn2'></div></li><li onclick='mainNavBurdenBtn3()'><div id='burden_of_fn_btn3'></div></li><li onclick='mainNavBurdenBtn4()'><div id='burden_of_fn_btn4'></div></li><li onclick='mainNavBurdenBtn5()'><div id='burden_of_fn_btn5'></div></li>");
	} else if (sectionNumber == 2) {
	   menuThumbsList.append("<li onclick='mainNavBurdenBtn1()'><div id='burden_of_fn_btn1_p'></div></li><li onclick='mainNavBurdenBtn2()'><div id='burden_of_fn_btn2_p'></div></li><li onclick='mainNavBurdenBtn3()'><div id='burden_of_fn_btn3_p'></div></li><li onclick='mainNavBurdenBtn4()'><div id='burden_of_fn_btn4_p'></div></li><li onclick='mainNavBurdenBtn5()'><div id='burden_of_fn_btn5_p'></div></li>");
	}
	menuThumbs.show();
}

function mainNavBtn4() {
	menuThumbs.css("left","530px");
	menuThumbIndicator.css("left","47px");
	menuThumbsList.empty();
	if (sectionNumber == 1) {
	   menuThumbsList.append("<li onclick='mainNavRDIBtn1()'><div id='rdi_btn1'></div></li><li onclick='mainNavRDIBtn2()'><div id='rdi_btn2'></div></li><li onclick='mainNavRDIBtn3()'><div id='rdi_btn3'></div></li><li onclick='mainNavRDIBtn4()'><div id='rdi_btn4'></div></li>");
	} else if (sectionNumber == 2) {
		menuThumbsList.append("<li onclick='mainNavRDIBtn1()'><div id='rdi_btn1_p'></div></li><li onclick='mainNavRDIBtn2()'><div id='rdi_btn2_p'></div></li><li onclick='mainNavRDIBtn3()'><div id='rdi_btn3_p'></div></li><li onclick='mainNavRDIBtn4()'><div id='rdi_btn4'></div></li>");
	}
	menuThumbs.show();
}

function mainNavBtn5() {
	menuThumbs.css("left","530px");
	menuThumbIndicator.css("left","170px");
	menuThumbsList.empty();
	if (sectionNumber == 1) {
	   menuThumbsList.append("<li onclick='mainNavNEBtn1()'><div id='ne_btn1'></div></li><li onclick='mainNavNEBtn2()'><div id='ne_btn2'></div></li><li onclick='mainNavNEBtn3()'><div id='ne_btn3'></div></li>");
	} else if (sectionNumber == 2) {
		menuThumbsList.append("<li onclick='mainNavNEBtn1()'><div id='ne_btn1_p'></div></li><li onclick='mainNavNEBtn2()'><div id='ne_btn2_p'></div></li><li onclick='mainNavNEBtn3()'><div id='ne_btn3_p'></div></li>");
	}
	menuThumbs.show();
}

function mainNavBtn6() {
	menuThumbs.css("left","750px");
	menuThumbIndicator.css("left","115px");
	menuThumbsList.empty();
	menuThumbsList.append("<li onclick='mainNavMOABtn1()'><div id='moa_btn1'></div></li><li onclick='mainNavMOABtn2()'><div id='moa_btn2'></div></li>");
	menuThumbs.show();
}

function mainNavBtn7() {
	menuThumbs.css("left","750px");
	menuThumbIndicator.css("left","220px");
	menuThumbsList.empty();
	menuThumbsList.append("<li onclick='mainNavInfoBtn1()'><div id='info_btn1'></div></li><li onclick='mainNavInfoBtn2()'><div id='info_btn2'></div></li>");
	menuThumbs.show();
}