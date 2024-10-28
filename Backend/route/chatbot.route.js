// routes/chatbot.route.js
import express from 'express'; // Use ESM import
import axios from 'axios'; // Use ESM import

const router = express.Router();

// Chat endpoint
router.post('/', async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo', // or any other available model
        messages: [{ role: 'user', content: userMessage }],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`, // Use env variable
        },
      }
    );

    const botReply = response.data.choices[0].message.content;
    res.json({ reply: botReply });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error communicating with AI service.' });
  }
});

export default router; // Use ESM export
