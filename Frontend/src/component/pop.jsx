import React from 'react';
import Navbar from '../component/Navbar'; // Ensure Navbar is imported
import Footer from '../component/Footer'; // Ensure Footer is imported

function Pop() {
  return (
    <>
      <Navbar />
      <section id="contact" className="py-12 bg-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mt-10">Pop Music</h2>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      
        <img
          src="https://www.yellowbrick.co/wp-content/uploads/2023/06/music_blog_16.png"
          alt="Pop Music"
          className="w-full h-64 object-cover mb-6 rounded-lg"
        />
        <p className="text-lg mb-6">
          Pop music is characterized by its catchy melodies, simple lyrics, and widespread appeal. 
          Emerging in the mid-20th century, pop music has continuously evolved by borrowing 
          elements from various genres like rock, hip-hop, electronic, and more.
        </p>

        {/* History */}
        <h3 className="text-2xl font-semibold mb-2">History</h3>
        <p className="mb-4">
          The origins of pop music trace back to the post-World War II era, when genres like rock 'n' roll 
          and Motown dominated the charts. Artists like Elvis Presley, The Beatles, and Michael Jackson 
          revolutionized pop music in their respective eras.
        </p>

        {/* Development */}
        <h3 className="text-2xl font-semibold mb-2">Development</h3>
        <p className="mb-4">
          The development of pop music saw the rise of female icons like Madonna and Whitney Houston 
          in the 1980s, while the 1990s brought a new wave of boy bands, teen pop stars, and 
          digital production techniques.
        </p>

        {/* Evolution */}
        <h3 className="text-2xl font-semibold mb-2">Evolution</h3>
        <p className="mb-4">
          In the 21st century, pop music has become more diverse, integrating global influences 
          and electronic sounds. Artists like Beyoncé, Taylor Swift, and BTS continue to push 
          the boundaries of the genre.
          In the 1960s, The Beatles and Motown artists (e.g., The Supremes, Stevie Wonder) defined 
          the early sound of pop music. The 1980s saw the rise of synth-driven pop and global superstars 
          like Michael Jackson, Madonna, and Prince. In the 21st century, pop music continues to evolve 
          with influences from hip-hop, EDM, and global trends, with artists like Taylor Swift, Beyoncé, 
          and Billie Eilish leading the scene.
        </p>

        {/* Audio Samples */}
        <h3 className="text-2xl font-semibold mb-2">Listen to Pop Music Samples</h3>
        <audio controls className="w-full mb-4">
          <source src="p1.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>

        <audio controls className="w-full mb-4">
          <source src="p2.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </div>
      </div>
    </section>
      <Footer />
    </>
  );
}

export default Pop;
