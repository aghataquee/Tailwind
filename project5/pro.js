let btn=document.getElementById("id");
const randomColor=()=>{
    let colors="1234567890ABCDEF";
    let can="#"
    for(let i=0;i<6;i++){
        can=can+colors[Math.floor(Math.random()*16)];
    }
    return can;

}
function changeColor(){
    document.body.style.background=randomColor();
}
btn.addEventListener("click",changeColor);