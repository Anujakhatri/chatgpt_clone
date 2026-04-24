const chatBox = document.getElementById('chat');
const userInput = document.getElementById('user-input');

function sendMessage() {
  const text = userInput.value.trim();
  if (text == '') {
    return;
  }
  addMessage(text, "user");
  userInput.value = "";

  setTimeout(() => {
    const reply = getReply(text);
    addMessage(reply, "bot");
  }, 500);
}

function addMessage(text, sender) {
  const div = document.createElement("div");
  div.classList.add("message", sender);
  div.innerText = text;

  chatBox.appendChild(div);

  chatBox.scrollTop = chatBox.scrollHeight;
}
function getReply(input) {
  input = input.toLowerCase();

  if (input.includes("hello")) return "Hi there!";
  if (input.includes("how are you")) return "I'm doing great! How about you?";
  if (input.includes("who are you")) return "I am a chatbot created by Anuja";
  if (input.includes("can you help me?")) return "I can help you with anything!";
  if (input.includes("what is python")) return "Python is a high-level, interpreted programming language.";
  if (input.includes("bye")) return "Goodbye!";

  return "I don't understand that yet.";
}

//handle enter key event
userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});