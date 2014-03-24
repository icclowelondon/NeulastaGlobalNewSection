document.addEventListener('presentationInit', function() {
	var slide = app.slide.pi_info = {
	onEnter: function(ele) {
		app.refs = new References('references');
		
		var referenceBtn = $("#reference_btn");
		
		referenceBtn.hide();
	},
	onExit: function(ele) {
		var referenceBtn = $("#reference_btn");
		
		referenceBtn.show();
	},
	
};

var slide = app.slide.abbreviations = {
	onEnter: function(ele) {
		var referenceBtn = $("#reference_btn");
		
		referenceBtn.hide();
	},
	onExit: function(ele) {
		var referenceBtn = $("#reference_btn");
		
		referenceBtn.show();
	},
	
};
});