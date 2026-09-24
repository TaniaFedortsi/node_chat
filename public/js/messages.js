import { formatTime } from "./utils.js";

const messages = document.getElementById('messages');

export async function getMessages(currentRoom) {
  try {
    const response = await fetch(`/messages?room=${currentRoom}`);


    const result = await response.json();
    result.forEach(message => {
      const liMessage = document.createElement('li')
      liMessage.textContent = message.author + ' ' + formatTime(message.time) + ' ' + message.text;
      messages.appendChild(liMessage)
    })
  } catch (error) {
    console.error(error);
  }
}
