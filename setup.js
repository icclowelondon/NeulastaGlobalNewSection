	(function(global) {
  
  // Uncomment to see trace from framework in console
  debug();
  
  // Creating our presentation and global namespace "app"
  global.app = new Presentation({
    globalElements: ['mainmenu', 'mainfooter'],
    slideshows: {
		SplashPage: 				["main_splash"],
		/* -- Carers Sub Pages -- */
		Neutropenia:    			['neutropenia'],
		NeutropeniaMain: 			['cooper_2011','aarts_2010','almenar_2009'],
		FebrileNeutropenia: 		['febrile_neutropenia'],
		Hospitalization: 			['kuderer_2006','weyckler_2006','weyckler_2009'],
		EarlyMortailty:			['lyman_2010','kuderer_2007'],
		DoseDelay: 					['chirivella_2009','leonard_2009'],
		DecreasedReductions: 	['johnsen_2012'],
		LessEffective:			 	['rdi_calculator'],
		/* Main Nav Pages */
		Summary: 					['key_messages','wealth_of_evidence'],
		SummaryP: 					['key_messages_p','wealth_of_evidence'],
      BurdenOfFN:     			['kuderer_2006','weyckler_2006','weyckler_2009','lyman_2010','kuderer_2007'],
		RiskAssessment: 			['risk_assessment'],
		RDI: 							['chirivella_2009','leonard_2009','johnsen_2012','rdi_calculator'],
		NeulastaEfficacy: 		['cooper_2011','aarts_2010','almenar_2009'],
		MOA: 							['moa_1','moa_2'],
		Info: 						["pi_info","abbreviations"],
		/* -- Pragmatist Sub Pages -- */
		NeutropeniaP:    			['neutropenia_p'],
		NeutropeniaMainP: 		['cooper_2011_p','aarts_2010_p','almenar_2009_p'],
		FebrileNeutropeniaP:    ['febrile_neutropenia_p'],
		HospitalizationP: 		['kuderer_2006_p','weyckler_2006_p','weyckler_2009_p'],
		EarlyMortailtyP:			['lyman_2010_p','kuderer_2007_p'],
		DoseDelayP: 				['chirivella_2009_p','leonard_2009_p'],
		DecreasedReductionsP: 	['johnsen_2012_p'],
		/* Main Nav Pages */
		BurdenOfFNP:     			['kuderer_2006_p','weyckler_2006_p','weyckler_2009_p','lyman_2010_p','kuderer_2007_p'],
		RDIP: 						['chirivella_2009_p','leonard_2009_p','johnsen_2012_p','rdi_calculator'],
		NeulastaEfficacyP: 		['cooper_2011_p','aarts_2010_p','almenar_2009_p'],
		/* New Additions - LIPEG */
		WealthOfEvidence:			['wealth_of_evidence'],
		BodyOfEvidence:			['body_of_evidence'],
		WorldPage:					['world_page'],
		MOASingle: 					['moa_2'],
		Cooper2011P:				['cooper_2011_p'],
		Almenar2009P:				['almenar_2009_p'],
		Leonard2009P:				['leonard_2009_p'],
		Kuderer2007P:				['kuderer_2007_p'],

        // New Section - Short Call
        ShortCall:				['sc_page01', 'sc_page02', 'sc_page03', 'sc_page04', 'sc_page05', 'sc_page06', 'sc_page07'],
        ShortCallPopUp01: ['sc_popup_01'],
        ShortCallPopUp04_01: ['sc_popup_04_01'],
        ShortCallPopUp04_02: ['sc_popup_04_02'],
        ShortCallPopUp05: ['sc_popup_05'],

        // Dev tool
        devSection:['sc_page06']
    }
  });
  
  // Initiate modules
  app.scroller = new Slidescroller();
  app.data = new Data();
  app.loader = new Loader({delay:1600});
  /*app.menu = new Menu({
    links: [
      { title: 'Zusammenfassung', goTo: 'zusammenfassung' },
      { title: 'Folgen der FN', goTo: 'FolgenderFN' },
      { title: 'Risikoeinschätzung', goTo: 'carers_sub.RDI' },
      { title: 'RDI', goTo: 'carers_sub.RDI' },
      { title: 'Neulasta<sup>®</sup> Wirksamkeit', goTo: 'carers_sub.NeulastaWirksamkeit' },
		{ title: 'Wirkmechanismus', goTo: 'carers_sub.Wirkmechanismus' },
		{ title: 'Info', goTo: 'carers_sub.efficacy', className: 'info_btn'}
    ]
  });*/
  
  // Initialize presentation
  //app.init('SplashPage');

  // Dev Visualisation Tool
  app.init('devSection');

  
})(window);


// Prevent vertical bouncing of slides
document.ontouchmove = function(e) {
   e.preventDefault();
};