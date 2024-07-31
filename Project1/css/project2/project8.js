function checkpassword(){
    var a=document.getElementById("psw").value;
    var b=document.getElementById("psww").value;
    if(a==""){
        document.getElementById("message").innerHTML="Please enter your password";
        return false;
    }
    if(a.length < 5){
        document.getElementById("message").innerHTML="Your password is too short";
        return false;
    }
    if(a.length > 15){
        document.getElementById("message").innerHTML="Your password is too long";
        return false;
    }
    if(a!=b){
        document.getElementById("message").innerHTML="Password do not match";
        return false;
    }

};