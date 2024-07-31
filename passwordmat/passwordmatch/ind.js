const btn=document.getElementById("submit");
btn.addEventListener("click",validpassword());
function validpassword(){
    const input1=document.getElementById("psw").value;
    const input2=document.getElementById("cnfpsw").value;
    if(input1!=input2){
        document.getElementById("sp").innerText="pswdnmo"
        return false;
    }

}