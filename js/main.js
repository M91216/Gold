$('#home').on('pageinit', function(){
	//code needed for home page goes here
});	

var parseForm = function(data){
	
};

$('#newSession').on('pageinit', function(){

		var myForm = $('#newSessionForm');
			myForm.validate({
			invalidHandler: function(form, validator) {
				
			},	
			submitHandler: function() {
		         var data = myForm.serializeArray();
			     parseForm(data);
					}
	});
function ge(getElement){
	  var theElement = document.getElementById(getElement);
	  return theElement;



   }
   function getSelectedRadio(){
		var radios = document.form[0].engineer;
		for(var i=0; i<radios.length; i++){
			if(radios[i].checked){
			 engineerValue = radios[i].value;
			}

		}

}

      
   

   function storeData(key){
	   //If there is no key,this means this is a brand new item and we need a new key.
	  if(!key){      
		 var id                = Math.floor(Math.random()*100000001);
	  }else{
		  //Set the id to the egetElementisting key we're editing so that it will save over the data. 
		  //The key is the same key that's been passed along from the editSubmit event handler
		  //to the validate function, and then passed here, into the storageData function.
		  id = key;
	  }
	  //getCheckboxValue();
	  getSelectedRadio();
	  var item                ={};
		  item.format         =["Format:", ge("format").value];
		  item.customer       =["Customer:", ge("customer").value];
		  item.artistband     =["Artist:", ge("artist").value];
		  item.email          =["Email:",ge("email").value];
		  item.phone          =["Phone:", ge("phone").value];
		  item.date           =["Date:", ge("date").value];
		  item.start          =["Start:", ge("start").value];
		  item.end            =["End:", ge("end").value];
		  item.hours          =["Hours:", ge("hours").value];
		  item.comments       =["Comments:", ge("comments").value];
		  item.studio         =["Studio:", studioValue];
		  item.engineer       =["Engineer:", engineerValue];

		  localStorage.setItem(id, JSON.stringify(item));
		  alert("Contact Saved"); 

   }
    var format = ["--format--", "analog", "proTools", "apple", "fruity", "nuendo",],
     	   engineerValue = "No",
     	   studioValue, 
     	   errMsg = ge("errors");     
         //  storeData();
        //getInfo(); 
        parseForm();
           
     
        var displayLink = ge("displayLink");
        displayLink.addEventListener("click", getData);
        var clearLink = ge("clearLink");
        clearLink.addEventListener("click", clearLocal);
        var save = ge("bookSession");
        save.addEventListener("click");
     });   
  	              	        				
		        
       

	//any other code needed for addItem page goes here






//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){

};

var getData = function(){

};

var storeData = function(data){

}; 

var	deleteItem = function (){

};

var clearLocal = function(){

};

