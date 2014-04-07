/* Logo Buttons Set Up */
var neulastaLogo = $("#neulasta_logo");
var amgenLogo = $("#amgen_logo");
var matchStickBtn = $("#matchstick_btn");

/* Main Menu + Thumbnails Set Up */
var mainMenu = $("#mainmenu");
var menuCloseBtn = $("#main_menu_close_btn");
var menuBtn = $("#menu_btn");
var menuThumbs = $("#thumbnail_holder");
var menuThumbsList = $("#thumbnail_holder ul");
var menuThumbCloseBtn = $("#thumbnail_close_btn");
var menuThumbIndicator = $("#thumbnail_holder_arrow");

var navMenuBtn1 = $("#main_menu_btn1");
var navMenuBtn2 = $("#main_menu_btn2");
var navMenuBtn3 = $("#main_menu_btn3");
var navMenuBtn4 = $("#main_menu_btn4");
var navMenuBtn5 = $("#main_menu_btn5");
var navMenuBtn6 = $("#main_menu_btn6");
var navMenuBtn7 = $("#main_menu_btn7");

document.addEventListener('contentLoad', function() {
	/* Splash Page Vars */
	var splashPageCarersBtn = $("#splash_page_carers_btn");
	var splashPagePragmatistBtn = $("#splash_page_pragmatist_btn");
    var shortCalltBtn = $("#splash_page_shortcall_btn");
    var SCpopup01 = $("#SC-pop-up01");
    var sCBtnBackPopUp1 = $("#shortcall-popup-back-btn1");
	var SCpopup0401 = $('#sc-pop-up04-01');
    var SCpopup0402 = $('#sc-pop-up04-02');
    var sCBtnBackPopUp401 = $("#shortcall-popup-back-btn04-01");
    var sCBtnBackPopUp402 = $("#shortcall-popup-back-btn04-02");
    var SCpopup05 = $('#sc-pop-up05');
    var sCBtnBackPopUp5 = $("#shortcall-popup-back-btn05");




	splashPageCarersBtn.unbind('click').click(function() {
		app.goTo("Neutropenia");
		sectionNumber = 1;
		console.log("**** Section number = ", sectionNumber );
		console.log("**** Carers Section Selected");
	});
	
	splashPagePragmatistBtn.unbind('click').click(function() {
		app.goTo("NeutropeniaP");
		sectionNumber = 2;
		console.log("**** Section number = ", sectionNumber );
		console.log("**** Pragmatist Section Selected");
	});

    shortCalltBtn.unbind('click').click(function() {
        app.goTo("ShortCall");
        sectionNumber = 3;
        console.log("**** Section number = ", sectionNumber );
        console.log("**** Short Call Selected");

            $("#main_menu_btn1").hide();
            $("#main_menu_btn2").hide();
            $("#main_menu_btn3").hide();
            $("#main_menu_btn4").hide();
            $("#main_menu_btn5").hide();
            $("#main_menu_btn6").hide();


    });



    SCpopup01.unbind('click').click(function() {
        app.goTo("ShortCallPopUp01");
        sectionNumber = 4;
        console.log("**** Section number = ", sectionNumber );
        console.log("**** Pop-up 1 Selected");
    });

    sCBtnBackPopUp1.unbind('click').click(function() {
        app.goTo("ShortCall");
        sectionNumber = 5;
        console.log("**** Section number = ", sectionNumber );
        console.log("**** Pop-up Back 1 Selected");
    });
    SCpopup0401.unbind('click').click(function() {
        app.goTo("ShortCallPopUp04_01");
        sectionNumber = 6;
        console.log("**** Section number = ", sectionNumber );
        console.log("**** Pop-up 4-1 Selected");
    });

    SCpopup0402.unbind('click').click(function() {
        app.goTo("ShortCallPopUp04_02");
        sectionNumber = 8;
        console.log("**** Section number = ", sectionNumber );
        console.log("**** Pop-up 4-1 Selected");
    });

    SCpopup05.unbind('click').click(function() {
        app.goTo("ShortCallPopUp05");
        sectionNumber = 10;
        console.log("**** Section number = ", sectionNumber );
        console.log("**** Pop-up 4-1 Selected");
    });

    sCBtnBackPopUp401.unbind('click').click(function() {
        app.goTo("ShortCall", 3);
        sectionNumber = 7;
        console.log("**** Section number = ", sectionNumber );
        console.log("**** Pop-up Back 4-1 Selectedd");
    });
    sCBtnBackPopUp402.unbind('click').click(function() {
        app.goTo("ShortCall", 3);
        sectionNumber = 9;
        console.log("**** Section number = ", sectionNumber );
        console.log("**** Pop-up Back 4-1 Selectedd");
    });

    sCBtnBackPopUp5.unbind('click').click(function() {
        app.goTo("ShortCall", 4);
        sectionNumber = 11;
        console.log("**** Section number = ", sectionNumber );
        console.log("**** Pop-up Back 4-1 Selectedd");
    });

    menuThumbs.hide();
	menuBtn.show();
	mainMenu.css('-webkit-transform', 'translate3d(0,-800px,0)');
	
	/* Global Menu Functions */
	matchStickBtn.unbind('click').click(function() {
		app.goTo("SplashPage");
		console.log("**** Back to splash");

        $("#main_menu_btn1").show();
        $("#main_menu_btn2").show();
        $("#main_menu_btn3").show();
        $("#main_menu_btn4").show();
        $("#main_menu_btn5").show();
        $("#main_menu_btn6").show();


	});
	
	neulastaLogo.unbind('click').click(function() {
		if (sectionNumber == 1) {
		   app.goTo("Neutropenia");
			console.log("**** Back to Carers Section");
		} else if (sectionNumber == 2) {
			app.goTo("NeutropeniaP");
			console.log("**** Back to Pragmatist Section");
		}
	});
	
	menuBtn.unbind('click').click(function() {
		menuBtn.hide();
		menuThumbs.hide();
		mainMenu.css('-webkit-transform', 'translate3d(0,0,0)');
		console.log("**** Show Menu");
	});
	
	menuCloseBtn.unbind('click').click(function() {
		menuBtn.show();
		mainMenu.css('-webkit-transform', 'translate3d(0,-800px,0)');
	});
	
	/* Carers Section Bits */
	navMenuBtn1.unbind('click').click(function() {
		mainNavSummary();
	});
	
	navMenuBtn2.unbind('click').click(function() {
		mainNavBtn2();
	});
	
	navMenuBtn3.unbind('click').click(function() {
		app.goTo("RiskAssessment");
	});
	
	navMenuBtn4.unbind('click').click(function() {
		mainNavBtn4();
	});
	
	navMenuBtn5.unbind('click').click(function() {
		mainNavBtn5();
	});
	
	navMenuBtn6.unbind('click').click(function() {
		mainNavBtn6();
	});
	
	navMenuBtn7.unbind('click').click(function() {
		mainNavBtn7();
	});
	
	menuThumbCloseBtn.unbind('click').click(function() {
		menuThumbs.hide();
		console.log("**** Close Thumbnails");
	});
	
	
});