import React, { useState, useEffect } from 'react';
import Cards from './Cards';
import axios from 'axios';

function Courses() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get('https://mindful-backend-lixt.onrender.com');
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
        console.error('Error fetching book data:', error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-18">
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-semibold">
            We are delighted to have you here{' '}
            <span className="text-blue">Here! :)</span>
          </h1>
          <p className="mt-12">
          Welcome to the Courses section, where we bring you a diverse range of music lessons designed for all skill levels—from beginners to advanced musicians. Whether you're just starting your journey into music theory or looking to refine your skills in advanced audio production, we have something tailored for everyone.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Courses;
