// controllers/sentimentController.js
import Sentiment from 'sentiment';  // Using ES Module import
const sentiment = new Sentiment();

// Function to recommend music genre based on sentiment score
const recommendGenre = (score) => {
  if (score > 5) {
    return 'Pop'; // High positive sentiment, upbeat pop music
  } else if (score > 2) {
    return 'Rock'; // Moderate positive sentiment, energetic rock music
  } else if (score > -1) {
    return 'Jazz'; // Neutral sentiment, calming jazz music
  } else if (score > -5) {
    return 'Classical'; // Slightly negative sentiment, soothing classical music
  } else {
    return 'Ambient'; // Strongly negative sentiment, relaxing ambient music
  }
};

// Controller function for sentiment analysis with music suggestion
export const analyzeSentiment = (req, res) => { // Use named export
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Text input is required for sentiment analysis' });
  }

  const result = sentiment.analyze(text);
  const suggestedGenre = recommendGenre(result.score);

  // Send the analysis result and genre suggestion
  res.json({
    score: result.score,
    comparative: result.comparative,
    positive: result.positive,
    negative: result.negative,
    suggestedGenre: suggestedGenre,
  });
};
