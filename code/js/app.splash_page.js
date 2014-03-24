document.addEventListener('presentationInit', function() {
	var neulastaLogoSplash = $("#neulasta_logo");
	var amgenLogoSplash = $("#amgen_logo");
	var matchStickBtnSplash = $("#matchstick_btn");
	var mainMenuSplash = $("#mainmenu");
	var menuBtnSplash = $("#menu_btn");
	var refBtnSplash = $("#reference_btn");
	var slide = app.slide.main_splash = {
	onEnter: function(ele) {
		menuBtnSplash.hide();
		mainMenuSplash.hide();
		neulastaLogoSplash.hide();
		amgenLogoSplash.hide();
		matchStickBtnSplash.hide();
		refBtnSplash.hide();
		console.log("**** Hide Menu Bits");
	},
	onExit: function(ele) {
		menuBtnSplash.show();
		mainMenuSplash.show();
		neulastaLogoSplash.show();
		amgenLogoSplash.show();
		matchStickBtnSplash.show();
		refBtnSplash.show();
		sectionNumber = 2;
		console.log("**** Show Menu Bits");
	}
};
});