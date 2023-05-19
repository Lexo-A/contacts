const contactForm = document.getElementById('contact-form')

contactForm.addEventListener('submit',function(event){
    event.preventDefault()

    const name=document.getElementById('name').value
    const email=document.getElementById('email').value
    const message=document.getElementById('message').value

    const mailtoLink = 'mailto:lexoaladashvili@gmail.com'

    window.location.href=mailtoLink
})

function setLoginInfo(username) {
    document.cookie = `username=${username}; path=/`;
  }

  function askToSaveLoginInfo() {
    const answer = confirm('Do you want to save your login information?');
    if (answer) {
      const username = prompt('Enter your username:');
      if (username) {
        setLoginInfo(username);
        console.log('Login information saved!');
      }
    }
  }

  document.getElementById('saveButton').addEventListener('click', askToSaveLoginInfo);