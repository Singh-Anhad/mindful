import express from 'express';
import Question from '../model/question.model.js'; // Your Question model
import Fuse from 'fuse.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const userMessage = req.body.message.trim();

  try {
    // Fetch all questions from the database
    const allQuestions = await Question.find({});
    
    // Set up Fuse.js options
    const options = {
      includeScore: true,
      threshold: 0.4, // The lower, the stricter; higher values will allow more lenient matches
      keys: ['question'] // Search in the "question" field of the documents
    };

    // Initialize Fuse with questions and options
    const fuse = new Fuse(allQuestions, options);

    // Perform fuzzy search
    const result = fuse.search(userMessage);

    // If there is a matching result
    if (result.length > 0) {
      // Get the best match (the one with the highest score)
      const bestMatch = result[0].item;
      return res.json({ reply: bestMatch.answer });
    } else {
      return res.json({ reply: 'Sorry, I do not have an answer for that.' });
    }
  } catch (error) {
    console.error('Error fetching question from DB:', error);
    return res.status(500).json({ reply: 'Error fetching answer from the database.' });
  }
});

export default router;
