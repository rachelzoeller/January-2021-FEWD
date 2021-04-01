
   function emailIsValid () {

    // Find Email input element
      var emailInputElement = document.getElementById("email");
    
    //Find name input element  
      var nameInputElement = document.getElementById("name");

    // Get value from email input element
      var email = emailInputElement.value;
    
    //Get value from name input element 
      var name = nameInputElement.value;
    
    // Validate value against the rule
      var regex = /^([a-zA-Z0-9]+[a-zA-Z0-9.%\-\+]*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,4})+$/;
      var validateResult = regex.test(email);

    // If valid prompt successful message / Else prompt validation error message 
    //concantenate or add name value to message - join name to message
      if (validateResult === true ) { 
        alert("Thanks" + " " + name + " " + "for signing up!");
      }
      else {
        alert("Please enter a valid email address")
      }
      
   }

