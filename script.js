
   function emailIsValid () {

    // Find Email input element
      var emailInputElement = document.getElementById("email");
    //Find name input element   
    // Get value from email input element
    //Get value from name input element 
      var email = emailInputElement.value;
    // Validate value against the rule

      var regex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/; 
      var validateResult = regex.test(email);
    // If valid prompt successful message / Else prompt validation error message 
      if (validateResult === true ) { 
        //concantenate or add name value to message - join name to message
        alert("Thanks");
      }
      else {
        alert("Please enter a valid email address")
      }
   }

//  const form = document.querySelector('form');
//   const nameInput = document.querySelector(
//     'input[name="name"]'
//   );
  
//   console.log(nameInput);
  
//    form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log('test');

//   })

