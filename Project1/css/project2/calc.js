const userinput=document.getElementById("inputtype");
var expression='';
function press(num){
    expression+=num;
    userinput.value=expression;
}
function equal(){
    userinput.value=eval(expression);
    expression='';
}
function erase(){
    expression='';
    userinput.value=expression;
}