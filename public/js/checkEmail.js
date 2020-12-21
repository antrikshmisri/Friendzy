function checkEmail(email , err) {

    const signinbtn = document.querySelector('#signin-button')
    const registerbtn = document.querySelector('#register')
    const userEmail = document.querySelector(`#${email}`).value;
    let userEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let flag;
    
    if (userEmail.match(userEmailFormate)) {
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
      // console.log(flag);
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
      // console.log(flag);
    }
  }