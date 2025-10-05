const axios = require('axios');
const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({});

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  console.log(response.text);
  return response.text;
}



const getFeedback = async (req, res) => {
    const { prompt } = req.body;

    try {
      const response = await main(prompt);
  
      const result = response || 'No response from Gemini';
      res.json({ reply: result });
  
    } catch (error) {
      console.error('Error calling Gemini API:', error.response?.data || error.message);
      res.status(500).json({ error: 'Failed to fetch from Gemini API' });
    }
}


module.exports = getFeedback;