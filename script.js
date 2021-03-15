
  const subscriber_name = document.getElementById('subscriber_name')
  const subscriber_email = document.getElementById('subscriber_email')
  const form = document.getElementById('form')
  const errorElement = document.getElementById('error')

  form.addEventListener('submit', (e) => {
    let messages = []
    if(subscriber_name.value === '' || subscriber_name.value == null)
    messages.push('Name is Required')

    if(subscriber_email.value === '' || subscriber_email.value == null)
    messages.push('Please include @ in your email address')     

    if(messages.length) > 0 {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
    }
  })