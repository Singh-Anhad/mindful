import React, { useEffect, useState } from 'react';

// Popup Component
const Popup = ({ onClose }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch reviews data from the public folder
    fetch('/data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched data:', data); // Log fetched data
        setReviews(data);
      })
      .catch((error) => console.error('Error fetching reviews:', error));
  }, []);

  console.log('Rendered reviews:', reviews); // Log reviews state

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-5 shadow-lg max-w-md w-full">
        {/* Add your custom heading here */}
        <h2 className="text-2xl font-bold mb-4 text-center">Our Customer Reviews</h2>
        
        <div className="space-y-4">
          {reviews.length > 0 ? (
            reviews.map(({ id, name, review, image }) => (
              <div key={id} className="flex items-start">
                <img
                  src={image}
                  alt={`${name}'s review`}
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <h3 className="font-semibold">{name}</h3>
                  <p className="text-gray-700">{review}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No reviews available.</p>
          )}
        </div>
        {/* Place the close button here at the bottom */}
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded mt-4 w-full"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
