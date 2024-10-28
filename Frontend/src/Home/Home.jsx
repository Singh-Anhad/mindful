import React, { useState, useEffect } from 'react';
import Navbar from '../component/Navbar';
import Banner from '../component/Banner';
import Freebook from '../component/Freebook';
import Footer from '../component/Footer';
import NewsFeed from '../component/newsfeed';
import Quesans from '../component/questionans'; // Import the Chatbot component
import GenreList from '../component/genrelist';
import SentimentAnalysis from '../component/sentiment';
import Popup from '../component/modal'; // Import the Popup component

function Home() {
  const [isChatVisible, setIsChatVisible] = useState(false); // State to manage chat visibility
  const [isPopupOpen, setIsPopupOpen] = useState(true); // State to manage popup visibility

  const toggleChat = () => {
    setIsChatVisible(!isChatVisible); // Toggle chat visibility
  };

  const closePopup = () => {
    setIsPopupOpen(false); // Close the popup
  };

  // Automatically close the popup after a certain time (optional)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(false);
    }, 50000); // Close after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <Banner />
      <div className="fixed bottom-10 right-5 flex flex-col items-center">
        <div
          onClick={toggleChat}
          className="bg-blue-500 rounded-full p-3 cursor-pointer hover:bg-blue-500 transition duration-200"
        >
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/fluency/48/chat--v3.png"
            alt="chat-icon"
          /> {/* Icons8 chat icon */}
        </div>
        <span className="mt-1 text-sm text-gray-700">Chat with us</span> {/* Text under the icon */}
      </div>

      {isChatVisible && <Quesans />} {/* Render Chatbot only if visible */}
      
      <div className="mt-10"> {/* Adds some spacing */}
        <NewsFeed />
        <Freebook />
        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Explore Music Genres</h2>
          <GenreList /> {/* Render the GenreList component */}
        </section>
      </div>

      <div className="App">
        <h1>Mindful Melodies</h1>
        <SentimentAnalysis />
      </div>

      {/* Render the Popup if it's open */}
      {isPopupOpen && <Popup onClose={closePopup} />}

      <Footer />
    </>
  );
}  

export default Home; 