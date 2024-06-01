// alert("Welcome")

function signup_validateform() {
    let name = document.getElementById("name").value;
    let signup_email = document.getElementById("signup_email").value;
    let signup_password = document.getElementById("signup_password").value;
    let number = document.getElementById("phone").value;
    const button = document.getElementById("signup_submit");

    if (name == "" || signup_email == "" || signup_password == "" || number == "") {
    // if (name == "") {
    //   alert("Please necessary details");
      button.disabled=true;
      return false;

    }
   
    button.enabled=true;
    return true;
}
    function login_validateform() {
        let login_email = document.getElementById("login_email").value;
        let login_password = document.getElementById("login_password").value;
        if (login_email==""|| login_password=="") {
           alert("Please necessary details");
           return false;
        }
        return true;
    }