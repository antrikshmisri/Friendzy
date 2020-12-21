function checkPass(pass , err)
{
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
    } else {
      document.getElementById(err).style.display = "none";
    }
}