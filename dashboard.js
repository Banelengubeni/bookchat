// Function to send a message
function sendMessage() {
  var messageInput = document.getElementById("message-input");
  var message = messageInput.value.trim();
  if (message !== "") {
    // Here you should send the message to the backend
    // For now, we'll just append it to the chat window
    appendMessage("You", message);
    messageInput.value = "";
  }
}

// Function to append a message to the chat window
function appendMessage(sender, message) {
  var chatWindow = document.getElementById("chat-window");
  var messageElement = document.createElement("div");
  messageElement.innerHTML = "<strong>" + sender + ":</strong> " + message;
  chatWindow.appendChild(messageElement);
  // Automatically scroll to the bottom
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Mocking receiving a message
// In a real application, you would listen for incoming messages from the backend
// and call appendMessage() with the sender and message received
setTimeout(function () {
  appendMessage("Alice", "I just started reading 'To Kill a Mockingbird'.");
}, 1000);

setTimeout(function () {
  appendMessage("Bob", "It's a great book! I read it last year.");
}, 2000);

setTimeout(function () {
  appendMessage("Alice", "What's your favorite part?");
}, 3000);
