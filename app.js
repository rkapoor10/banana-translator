var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")
// outputDiv.innerText = "Ritik Kapoor"
// console.log(outputDiv)

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getTranslationalURL(text)
{
    return serverURL + "?" + "text=" + text;
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
    .then(response=>response.json())
    .then(json=>console.log(json.contents.translated))
  
};

btnTranslate.addEventListener("click", clickHandler)