
  // const name = document.getElementById('name')
  // const email = document.getElementById('email')
  // const form = document.getElementById('form')
  // const errorElement = document.getElementById('error')

  // form.addEventListener('submit', (e) => {
  //   let messages = []
  //   if(name.value === '' || name.value == null)
  //   messages.push('Name is Required')

  //   if(email.value === '' || email.value == null)
  //   messages.push('Please include @ in your email address')     

  //   if(messages.length) > 0 {
  //   e.preventDefault()
  //   errorElement.innerText = messages.join(', ')
  //   }
  // }) 

 const form = document.querySelector('form');
  const nameInput = document.querySelector(
    'input[name="name"]'
  );
  
  console.log(nameInput);
  
   form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("test");

  })