// Chatbot.js
import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [userMessage, setUserMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async () => {
    if (!userMessage) return; // Prevent sending empty messages

    const newMessages = [...messages, { sender: 'user', content: userMessage }];
    setMessages(newMessages);
    setUserMessage(''); // Clear input field

    try {
      const response = await axios.post('https://mindful-backend-lixt.onrender.com', { message: userMessage });
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', content: response.data.reply },
      ]);
    } catch (error) {
      console.error('Error fetching response from AI:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', content: 'Sorry, I could not get a response.' },
      ]);
    }
  };

  return (
    <div className="flex flex-col w-80 border border-gray-300 rounded-lg p-4">
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <div className={`font-bold ${msg.sender === 'user' ? 'text-blue-600' : 'text-gray-800'}`}>
              {msg.sender === 'user' ? 'You' : 'AI'}
              <time className="text-xs text-gray-500 ml-2">Just now</time>
            </div>
            <div className={`inline-block px-3 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
              {msg.content}
            </div>
            <div className="text-xs text-gray-500">{msg.sender === 'user' ? 'Seen' : 'Delivered'}</div>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 border border-gray-300 rounded-lg p-2 mr-2"
        />
        <button onClick={handleSendMessage} className="bg-blue-600 text-white rounded-lg px-4">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
