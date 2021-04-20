var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-ip");
var opText = document.querySelector("#op");

btnTranslate.addEventListener("click",clickEventHandler);
function clickEventHandler(){
    opText.innerText = "joojjojo " +txtInput.value;
}
