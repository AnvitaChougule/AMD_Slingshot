const { GoogleGenAI } = require("@google/genai");

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("❌ GEMINI_API_KEY is missing! Add it to your .env file.");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });

// Translate text using Gemini itself
const translateText = async (text, targetLang) => {
  if (targetLang === "en") return text; // no translation needed

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `Translate the following text to ${targetLang === "hi" ? "Hindi" : "Marathi"}:\n\n${text}`
  });

  return response.text || text;
};

exports.chatWithBot = async (req, res) => {
  try {
    const { message, language } = req.body;
    if (!message || message.trim() === "") {
      return res.status(400).json({ error: "Message is required" });
    }

    // 1️⃣ Translate user message to English (Gemini understands English better)
    const messageInEnglish = await translateText(message, "en");

    // 2️⃣ Send the translated message to Gemini
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: messageInEnglish
    });

    let reply = response.text || "No response from AI";

    // 3️⃣ Translate bot reply to the selected language (if not English)
    reply = await translateText(reply, language);

    res.json({ reply });
  } catch (error) {
    console.error("AI chatbot error:", error);
    if (error.response) {
      return res.status(error.response.status).json({ error: error.response.data });
    }
    res.status(500).json({ error: "AI chatbot failed" });
  }
};
