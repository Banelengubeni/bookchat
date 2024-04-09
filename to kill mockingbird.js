function sendMessage() {
  var messageInput = document.getElementById("message-input");
  var message = messageInput.value.trim();
  if (message !== "") {
    appendMessage("You", message);
    messageInput.value = "";
  }
}

function appendMessage(sender, message) {
  var chatWindow = document.getElementById("chat-window");
  var messageElement = document.createElement("div");
  messageElement.innerHTML = "<strong>" + sender + ":</strong> " + message;
  chatWindow.appendChild(messageElement);
  S;
  chatWindow.scrollTop = chatWindow.scrollHeight;
}
setTimeout(function () {
  appendMessage("Alice", "I just started reading 'To Kill a Mockingbird'.");
}, 1000);

setTimeout(function () {
  appendMessage("Bob", "It's a great book! I read it last year.");
}, 2000);

setTimeout(function () {
  appendMessage("Alice", "What's your favorite part?");
}, 3000);
