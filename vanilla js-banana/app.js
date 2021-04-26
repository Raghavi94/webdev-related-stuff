var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-ip");
var opText = document.querySelector("#op");

//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error){
    console.log("error occured",error);
    alert("something wrong with server! try again later")
}

function clickEventHandler(){
    //opText.innerText = "lochakmochakpachak " +txtInput.value;

    //taking input
    var inputText = txtInput.value;

    //calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            opText.innerText = translatedText;
        })
        .catch(errorHandler)

};

btnTranslate.addEventListener("click",clickEventHandler);
