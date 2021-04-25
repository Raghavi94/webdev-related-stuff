var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-ip");
var opText = document.querySelector("#op");

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}
function clickEventHandler(){
    //opText.innerText = "lochakmochakpachak " +txtInput.value;

    //taking input
    var inputText = txtInput.value;

    //calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => console.log(json.contents.translated))

};

btnTranslate.addEventListener("click",clickEventHandler);
