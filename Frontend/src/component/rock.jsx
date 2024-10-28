import React from 'react';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
function Rock() {
  return (
    <>
    <Navbar />
    <section id="contact" className="py-12 bg-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mt-10">Rock Music</h2>
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
    
      <img
        src="https://www.howardbasshead.com/wp-content/uploads/2023/08/what-is-rock-and-roll-1024x576.png"
        alt="Rock Music"
        className="w-full h-64 object-cover mb-6 rounded-lg"
      />
      <p className="text-lg mb-6">
        Rock music originated in the 1950s and quickly became one of the most popular and influential
        genres of music. Known for its energetic performances, electric guitars, and strong rhythms, 
        rock music continues to evolve across generations.
      </p>

      {/* History */}
      <h3 className="text-2xl font-semibold mb-2">History</h3>
      <p className="mb-4">Rock music originated in the 1950s, primarily in the U.S. and the U.K. 
        It evolved from earlier genres like blues, jazz, country, and rhythm and blues. Early 
        pioneers like Chuck Berry, Elvis Presley, and Little Richard played a major role 
        in shaping the sound.</p>

      {/* Development */}
      <h3 className="text-2xl font-semibold mb-2">Development</h3>
      <p className="mb-4">The evolution of rock music has seen it morph from the raw simplicity of early 
        rock and roll to the intricate complexities of progressive rock, the rebellious spirit of punk, the
         emotional depth of grunge, and the genre-blending influences of the modern era.</p>

      {/* Evolution */}
      <h3 className="text-2xl font-semibold mb-2">Evolution</h3>
      <p className="mb-4">The genre quickly diversified in the 1960s and 1970s with the British 
        Invasion (The Beatles, The Rolling Stones) and the advent of subgenres like hard rock (Led Zeppelin), 
        punk rock (The Ramones, The Clash), and progressive rock (Pink Floyd). In the 1980s and 1990s, 
        alternative and grunge rock (Nirvana, Pearl Jam) rose in popularity, while modern rock continues
         to blend with other styles like electronic and hip-hop influences. Rock music has also given 
         birth to sub-genres such as punk rock, alternative rock, and metal.</p>

      {/* Audio Samples */}
      <h3 className="text-2xl font-semibold mb-2">Listen to Rock Music Samples</h3>
      <audio controls className="w-full mb-4">
        <source src="r1.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <audio controls className="w-full mb-4">
        <source src="r2.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
    </div>
    </section>
    <Footer />
    </>
  );
}

export default Rock;
