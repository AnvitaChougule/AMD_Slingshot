import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Chatbot.css";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I'm your Nutrition Assistant. Ask me about healthy food habits." }
  ]);
  const [input, setInput] = useState("");

  const generateReply = (message) => {
    message = message.toLowerCase();

    if (message.includes("water"))
      return "Drink at least 2–3 liters of water daily.";
    if (message.includes("protein"))
      return "Include eggs, lentils, paneer, tofu, or chicken for protein.";
    if (message.includes("weight loss"))
      return "Focus on calorie deficit, high protein diet, and regular exercise.";
    if (message.includes("energy"))
      return "Eat complex carbs like oats, brown rice, and fruits.";
    
    return "Try eating balanced meals with fruits, vegetables, protein and proper hydration.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    const botReply = { sender: "bot", text: generateReply(input) };

    setMessages((prev) => [...prev, userMsg, botReply]);
    setInput("");
  };

  return (
    <div className="chatbot-page">
      
      <div className="chat-header">
        <h2>NutriSmart AI</h2>
        <Link to="/" className="logout">Home</Link>
      </div>

      <div className="chat-main">

        <div className="quick-options">
          <button onClick={() => setInput("How much water should I drink?")}>
            Water Intake
          </button>
          <button onClick={() => setInput("Best protein sources?")}>
            Protein Foods
          </button>
          <button onClick={() => setInput("Weight loss tips")}>
            Weight Loss
          </button>
          <button onClick={() => setInput("Foods for energy")}>
            Energy Boost
          </button>
        </div>

        <div className="chat-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`chat-msg ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>

        <div className="chat-input">
          <input
            type="text"
            placeholder="Ask about nutrition..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage}>Send</button>
        </div>

      </div>
    </div>
  );
}