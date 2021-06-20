var btnTranslate = document.querySelector("#btn-translate")
var btnInvert = document.querySelector(".btn-invert")
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")
// outputDiv.innerText = "Ritik Kapoor"
// console.log(outputDiv)
var n=1;
var serverURL = "https://lessonfourapi.ritikkapoor.repl.co/translate/yoda.json"

function getTranslationalURL(text)
{
    return serverURL + "?" + "text=" + text + "&&" + "no=" + n;
}

function errorHandler()
{
    console.log("error occured",error);
    alert("Something wrong with server! Please try again later.")
}

function clickHandler()
{
    // console.log("you clicked the button")
    // console.log("input given: ", txtInput.value);
    // outputDiv.innerText = "banana translate of "+txtInput.value;

    //taking input
    var inputText = txtInput.value

    //calling server for processing
    fetch(getTranslationalURL(inputText))
    .then(response => response.json())
    .then(json =>{
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;})
    .catch(errorHandler)
  
};

function clickedInvert(){
    n = n+1;
    

}
btnInvert.addEventListener("click",clickedInvert)
btnTranslate.addEventListener("click", clickHandler)