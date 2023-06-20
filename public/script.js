
function addChatMessage(message) {
  const chatContainer = document.getElementById('chat-container');
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.textContent = message;
  chatContainer.appendChild(messageElement);
}


function sendMessage() {
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value;
  
  if (message.trim() !== '') {
    addChatMessage(message);
    messageInput.value = '';
  }
}


document.getElementById('send-button').addEventListener('click', sendMessage);


document.getElementById('message-input').addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    sendMessage();
  }
});
