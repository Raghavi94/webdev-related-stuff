var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-ip");
console.log(txtInput);

btnTranslate.addEventListener("click",clickEventHandler);
function clickEventHandler(){
    console.log("clicked!");
    console.log("input",txtInput.value);
}
