
document.addEventListener('presentationInit',function(){
  
  /*
   * This is a list of all the references in the presentation.
   * These are used below in the referencemap to display the correct refs.
   */
  var reflist = {
    Lorem_2010:  {
      title: "Lorem 2010",
      pdf: "Lorem-2010.pdf",
      link: ""
    }

  };

  /*
   * The reference map attaches references to an object, which can be paired with slides, popups, etc.
   * A list of slides and which references they contain in the following format:
   * DOM_ID: ["Reference_ID_1", "Reference_ID_2", "Etcetera"]
   */
  
  app.referencemap = {
    pi_info:           [reflist.Lorem_2010]
  };


})