var btn_trans = document.querySelector("#btn-translate");
var text_input = document.querySelector("#text-input");
var text_output = document.querySelector("#output");

btn_trans.addEventListener("click", function clickeventhandler() {
  text_output.innerText = "jajajajajaj " + text_input.value;
});
