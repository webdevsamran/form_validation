function VALIDATE(){
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var cpassword = document.getElementById("cpassword").value;

    if(username.length < 7){
        document.getElementById("username_error").innerHTML = "Username must be more than 7 characters";
    }else{
        document.getElementById("username_error").innerHTML = "";
    }
    if(email.length < 7){
        document.getElementById("email_error").innerHTML = "Email must be more than 7 characters";
    }else{
        document.getElementById("email_error").innerHTML = "";
    }
    if(password.length < 7){
        document.getElementById("password_error").innerHTML = "Password must be more than 7 characters";
    }else{
        document.getElementById("password_error").innerHTML = "";
    }
    if(cpassword.length < 7){
        document.getElementById("cpassword_error").innerHTML = "Confirm Password must be more than 7 characters";
    }else{
        document.getElementById("cpassword_error").innerHTML = "";
    }
    if(password!=cpassword){
        document.getElementById("cpassword_error").innerHTML = "Password and Confirm Password must match";
    }
}
