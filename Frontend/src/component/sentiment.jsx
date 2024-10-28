import React, { useState } from 'react';
import axios from 'axios';

const SentimentAnalysis = () => {
  const [text, setText] = useState(''); // User input
  const [sentimentResult, setSentimentResult] = useState(null); // Analysis result

  // Handle input change
  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4001/api/sentiment/analyze', { text });
      setSentimentResult(response.data);
    } catch (error) {
      console.error('Error analyzing sentiment:', error);
    }
  };

  return (
    <div style={{ margin: '20px' }}>
      <h2>Sentiment Analysis</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={handleInputChange}
          placeholder="Enter Your Emotional Insights"
          rows="4"
          style={{ width: '100%', marginBottom: '10px' }}
        />
        <button type="submit">Analyze Sentiment</button>
      </form>

      {sentimentResult && (
        <div style={{ marginTop: '20px' }}>
          <h3>Sentiment Analysis Result</h3>
          <p><strong>Score:</strong> {sentimentResult.score}</p>
          <p><strong>Comparative:</strong> {sentimentResult.comparative}</p>
          <p><strong>Positive Words:</strong> {sentimentResult.positive.join(', ') || 'None'}</p>
          <p><strong>Negative Words:</strong> {sentimentResult.negative.join(', ') || 'None'}</p>
          <p>
            Sentiment: <span style={{ color: sentimentResult.score >= 1 ? 'green' : sentimentResult.score <= -1 ? 'red' : 'gray' }}>
              {sentimentResult.score >= 1 ? 'Positive' : sentimentResult.score <= -1 ? 'Negative' : 'Neutral'}
            </span>
          </p>
          <p><strong>Suggested Music Genre:</strong> {sentimentResult.suggestedGenre}</p>
        </div>
      )}
    </div>
  );
};

export default SentimentAnalysis;
