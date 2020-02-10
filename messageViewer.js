const sendButton = document.querySelector("#sendButton");
const messageIn = document.querySelector("#messageIn");
const messageOut = document.querySelector("#messageOut");

sendButton.addEventListener("click", sendMessage);

function sendMessage () {
  var content = messageIn.value;
  if (content === ""){
    alert("Please Enter A Message")
  } else {
  messageOut.innerHTML = content;
  messageIn.value = "";
  }
}
