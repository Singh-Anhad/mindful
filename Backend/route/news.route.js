import express from 'express';

const router = express.Router();

// Sample news data or fetch from an external news API
const newsArticles = [
  {
    title: "Mindfulness in Everyday Life",
    description: "Learn how mindfulness can enhance your daily routine.",
    url: "https://www.ndtv.com/world-news/even-without-a-translator-putin-on-how-well-pm-narendra-modi-understands-him-6849637",
  },
  {
    title: "The Benefits of Meditation",
    description: "Discover the science-backed benefits of meditation.",
    url: "https://example.com/meditation-benefits",
  },
  {
    title: "Music Therapy for Mental Health",
    description: "How music can support your mental well-being.",
    url: "https://example.com/music-therapy",
  },
];

// Define a route to get news articles
router.get('/', (req, res) => {
  res.json(newsArticles);
});

export default router;
