import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", sender: "bot" }
  ]);
  const [inputText, setInputText] = useState("");
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getReply = (input) => {
    const lowerInput = input.toLowerCase();

    if (lowerInput.includes("hello")) return "Hi there!";
    if (lowerInput.includes("how are you")) return "I'm doing great! How about you?";
    if (lowerInput.includes("who are you")) return "I am a chatbot created by Anuja";
    if (lowerInput.includes("can you help me?")) return "I can help you with anything!";
    if (lowerInput.includes("what is python")) return "Python is a high-level, interpreted programming language.";
    if (lowerInput.includes("bye")) return "Goodbye!";

    return "I don't understand that yet.";
  };

  const handleSendMessage = () => {
    if (inputText.trim() === "") return;

    const userMessage = { text: inputText, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInputText("");

    setTimeout(() => {
      const botReply = getReply(inputText);
      const botMessage = { text: botReply, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    }, 500);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card chat-interface-wrapper shadow-lg border-0 overflow-hidden">
            <div className="card-header bg-primary text-white py-3 border-0">
              <h5 className="mb-0 fw-semibold">ChatGPT Clone</h5>
            </div>

            <div className="message-list-container" id="chat">
              {messages.map((msg, index) => (
                <div key={index} className={`message-bubble message-bubble-${msg.sender}`}>
                  {msg.text}
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
          </div>

          <div className="chat-input-wrapper">
            <div className="chat-input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Type you want to search..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                autoComplete="off"
              />
              <button className="btn btn-primary" onClick={handleSendMessage}>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
