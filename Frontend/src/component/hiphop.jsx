import React from 'react';
import Navbar from '../component/Navbar'; // Ensure Navbar is imported
import Footer from '../component/Footer'; // Ensure Footer is imported
function HipHop() {
  return (
    <>
    <Navbar />
    <section id="contact" className="py-12 bg-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mt-10">Hip-Hop Music</h2>
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      
      <img
        src="https://community.thriveglobal.com/wp-content/uploads/2019/06/hip-hop-culture-by-mohit-bansal-chandigarh.jpg"
        alt="Hip-Hop Music"
        className="w-full h-64 object-cover mb-6 rounded-lg"
      />
      <p className="text-lg mb-6">
        Hip-Hop originated in the 1970s in the Bronx, New York City, as a cultural movement that 
        included DJing, breakdancing, graffiti, and rapping. It has grown into one of the most 
        influential genres in modern music, known for its rhythmic vocal style and beat-driven sound.
      </p>

      {/* History */}
      <h3 className="text-2xl font-semibold mb-2">History</h3>
      <p className="mb-4">
      Hip-hop originated in the 1970s in the Bronx, New York, emerging from African American and 
      Latino communities. DJ Kool Herc, Grandmaster Flash, and Afrika Bambaataa are credited with 
      pioneering the genre, blending breakbeats and rapping.
      </p>

      {/* Development */}
      <h3 className="text-2xl font-semibold mb-2">Development</h3>
      <p className="mb-4">
        The development of Hip-Hop saw the rise of influential artists such as Tupac, 
        The Notorious B.I.G., and Nas in the 1990s, bringing mainstream attention to the genre. 
        Hip-hop's sound evolved with elements from jazz, funk, and soul.
      </p>

      {/* Evolution */}
      <h3 className="text-2xl font-semibold mb-2">Evolution</h3>
      <p className="mb-4">
      In the 1980s, hip-hop gained mainstream attention, and by the 1990s, it had expanded with 
      regional styles like East Coast (Nas, Biggie), West Coast (Tupac, Dr. Dre), and Southern rap. 
      In the 2000s and beyond, artists like Jay-Z, Kanye West, and Kendrick Lamar have further pushed 
      the boundaries of lyrical content and production techniques, blending with pop, R&B, and 
      electronic music.
      Hip-Hop has continued to evolve with the introduction of trap music, mumble rap, 
      and more experimental sounds. Today, it is a dominant force in global music culture.
      </p>

      {/* Audio Samples */}
      <h3 className="text-2xl font-semibold mb-2">Listen to Hip-Hop Music Samples</h3>
      <audio controls className="w-full mb-4">
        <source src="h1.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <audio controls className="w-full mb-4">
        <source src="h2.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
    </div>
    </section>
    <Footer />
    </>
  );
}

export default HipHop;
