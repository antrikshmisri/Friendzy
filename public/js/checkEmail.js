function checkEmail(email , err) {
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
      // console.log(flag);
    } else {
      document.getElementById(err).style.display = "none";
      // console.log(flag);
    }
  }