import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewsTicker = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = '8ce4c040a2be4d258123620e8fc97703'; // Use your actual API key
  const API_URL = `https://newsapi.org/v2/top-headlines?category=health&apiKey=${API_KEY}`;

  const fetchNews = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL);
      setArticles(response.data.articles); // Assuming the response has an articles array
      setError(null);
    } catch (error) {
      console.error('Error fetching news:', error);
      setError('Failed to load news');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
    const interval = setInterval(fetchNews, 60000); // Fetch new articles every minute
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!articles.length) return <div>No articles available.</div>; // Handle empty articles

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50 overflow-hidden">
      <div className="whitespace-nowrap animate-marquee">
        {articles.map((article, index) => (
          <span key={index} className="mx-4">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              {article.title}
            </a>
          </span>
        ))}
      </div>
    </div>
  );
};

export default NewsTicker;
