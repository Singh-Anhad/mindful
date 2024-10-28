import React from "react";
import Navbar from '../component/Navbar'; // Ensure Navbar is imported
import Footer from '../component/Footer'; // Ensure Footer is imported

const About = () => {
  return (
    <>
      <Navbar />
      <section id="contact" className="py-12 bg-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mt-10">About Mindful Melodies</h2>
       <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Welcome to <strong>Mindful Melodies</strong> — your go-to platform for exploring the rich history
            and evolution of music across genres like Classical, Rock, Hip-Hop, Pop, and Jazz. Whether you’re
            a passionate music lover or just getting started, Mindful Melodies provides in-depth insights into
            each genre’s origins, key moments, and major influences, along with immersive audio samples.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Built with modern technologies like React, Tailwind CSS, and MongoDB, this platform leverages the 
            power of the MERN stack (MongoDB, Express.js, React, and Node.js) to deliver a seamless user 
            experience, showcasing our continuous development, passion for technology, and dedication to 
            creating a user-friendly, informative experience. Join us in this melodious journey!
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
