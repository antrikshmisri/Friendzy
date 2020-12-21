function checkPass(pass , err)
{
    const signinbtn = document.querySelector('#signin-button')
    const registerbtn = document.querySelector('#register')
    let userPassword = document.getElementById(pass);
    let userPasswordFormulate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;
    let flag;
  
    if (userPassword.value.match(userPasswordFormulate)) {
      flag = false;
    } else {
      flag = true;
    }
  
    if (flag) {
      document.getElementById(err).style.display = "block";
      if(signinbtn)
      {
        signinbtn.classList.remove('active')
        signinbtn.classList.add('disabled')
      }
      if(registerbtn)
      {
        registerbtn.classList.remove('active')
        registerbtn.classList.add('disabled')
      }
    } else {
      document.getElementById(err).style.display = "none";
      if(signinbtn)
      {
        signinbtn.classList.remove('disabled')
        signinbtn.classList.add('active')
      }
      if(registerbtn)
      {
        registerbtn.classList.remove('disabled')
        registerbtn.classList.add('active')
      }
    }
}