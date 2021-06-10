var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")
// outputDiv.innerText = "Ritik Kapoor"
console.log(outputDiv)
btnTranslate.addEventListener("click", function clickEventHandler() {
    // console.log("you clicked the button")
    // console.log("input given: ", txtInput.value);
    outputDiv.innerText = "banana translate of "+txtInput.value;
})