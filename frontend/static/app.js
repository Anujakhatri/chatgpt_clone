const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function sendMessage(){
    const text = userInput.value.trim();
    if (text ==''){
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
  if (input.includes("how are you")) return "I'm just code, but I'm doing great!";
  if (input.includes("bye")) return "Goodbye!";
  
  return "I don't understand that yet.";
}

userInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});