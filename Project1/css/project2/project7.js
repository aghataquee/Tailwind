var myInput=document.getElementById("psw");
var letter=document.getElementById("letter");
var capital=document.getElementById("capital")
var number=document.getElementById("number");
var length=document.getElementById("length");
// when the user clicks on password field show the message box
myInput.onfocus=function(){
    document.getElementById("message").style.display="block";
}
//when the user clicks outside the password field hide the message
myInput.onblur=function(){
    document.getElementById("message").style.display="none";
}
// when the user starts to type something inside the password field

myInput.onkeyup=function(){
    //valid lowercase letters
    var lowercaseletters=/[a-z]/g;
    if(myInput.value.match(lowercaseletters)){
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    }
    else{
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }
    // valid capital letters
    var uppercaseletters=/[A-Z]/g;
    if(myInput.value.match(uppercaseletters)){
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    }
    else{
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }
    // for valid numbers
    var numbers=/[0-9]/g;
    if(myInput.value.match(numbers)){
        number.classList.remove("invalid");
        numbler.classList.add("valid");
    }
    else{
        number.classList.remove("valid");
        number.classList.add("invalid");
    }
    // for valid length
    if(myInput.value.length>=0){
        length.classList.remove("invalid");
        length.classList.add("valid");
    }
    else{
        length.classList.remove("valid");
        length.classLlist.add("invalid");
    }
}