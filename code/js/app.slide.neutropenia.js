document.addEventListener('contentLoad', function() {
	var carers_lp_main_btn = $("#neutropenia_main");
	var carers_lp_btn1 = $("#febrile_neutropenia_btn");
	var carers_lp_btn2 = $("#hospitalization_btn");
	var carers_lp_btn3 = $("#early_mortality");
	var carers_lp_btn4 = $("#dose_delay");
	var carers_lp_btn5 = $("#decreased_reductions");
	var carers_lp_btn6 = $("#less_effective");
	var carers_lp_btn7 = $("#reduced_survival");
	
	var pragmatist_lp_main_btn = $("#neutropenia_main_p");
	var pragmatist_lp_btn1 = $("#febrile_neutropenia_p_btn");
	var pragmatist_lp_btn2 = $("#hospitalization_p_btn");
	var pragmatist_lp_btn3 = $("#early_mortality_p");
	var pragmatist_lp_btn4 = $("#dose_delay_p");
	var pragmatist_lp_btn5 = $("#decreased_reductions_p");
	
	var pragmatist_lp_btn7 = $("#reduced_survival_p");
	
	/* Carers Links */
	carers_lp_main_btn.unbind('click').click(function() {
		app.goTo("NeutropeniaMain","cooper_2011");
	});
	
	carers_lp_btn1.unbind('click').click(function() {
		app.goTo("FebrileNeutropenia","febrile_neutropenia");
	});
	
	carers_lp_btn2.unbind('click').click(function() {
		app.goTo("Hospitalization","kuderer_2006");
	});
	
	carers_lp_btn3.unbind('click').click(function() {
		app.goTo("EarlyMortailty","lyman_2010");
	});
	
	carers_lp_btn4.unbind('click').click(function() {
		app.goTo("DoseDelay","chirivella_2009");
	});
	
	carers_lp_btn5.unbind('click').click(function() {
		app.goTo("DecreasedReductions","johnsen_2012");
	});
	
	carers_lp_btn6.unbind('click').click(function() {
		app.goTo("LessEffective","rdi_calculator");
	});
	
	carers_lp_btn7.unbind('click').click(function() {
		app.goTo("Summary","key_messages");
	});
	
	/* Prgmatist Links */
	pragmatist_lp_main_btn.unbind('click').click(function() {
		app.goTo("NeutropeniaMainP","cooper_2011_p");
	});
	
	pragmatist_lp_btn1.unbind('click').click(function() {
		app.goTo("FebrileNeutropeniaP","febrile_neutropenia_p");
	});
	
	pragmatist_lp_btn2.unbind('click').click(function() {
		app.goTo("HospitalizationP","kuderer_2006_p");
	});
	
	pragmatist_lp_btn3.unbind('click').click(function() {
		app.goTo("EarlyMortailtyP","lyman_2010_p");
	});
	
	pragmatist_lp_btn4.unbind('click').click(function() {
		app.goTo("DoseDelayP","chirivella_2009_p");
	});
	
	pragmatist_lp_btn5.unbind('click').click(function() {
		app.goTo("DecreasedReductionsP","johnsen_2012_p");
	});
	
	pragmatist_lp_btn7.unbind('click').click(function() {
		app.goTo("SummaryP","key_messages_p");
	});
});