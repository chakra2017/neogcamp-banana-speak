var btn_trans = document.querySelector("#btn-translate");
var text_input = document.querySelector("#text-input");
var text_output = document.querySelector("#output");

var serverurl = "https://api.funtranslations.com/translate/minion.json";

function getTranslate(txt) {
  return serverurl + "?" + "text=" + txt;
}

function errorhandler(error) {
  console.log("error occured", error);
}

btn_trans.addEventListener("click", function clickeventhandler() {
  var inputtxt = text_input.value;
  fetch(getTranslate(inputtxt))
    .then((response) => response.json())
    .then((json) => {
      var ans = json.contents.translated;
      text_output.innerText = ans;
    })
    .catch(errorhandler);
});
