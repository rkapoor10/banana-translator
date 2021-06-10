var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")

btnTranslate.addEventListener("click",function clickEventHandler()
{
    console.log("you clicked the button")
    console.log("input given: ", txtInput.value);
})