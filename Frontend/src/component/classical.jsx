import React from 'react';
import Navbar from '../component/Navbar'; // Ensure Navbar is imported
import Footer from '../component/Footer'; // Ensure Footer is imported
function Classical() {
  return (
    <>
    <Navbar />
    <section id="contact" className="py-12 bg-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mt-10">Classical Music</h2>
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Introduction */}
    
      <img
        src="https://miro.medium.com/v2/resize:fit:2800/1*DIBNImEXDTQl0L6mbaVGew.jpeg" 
        alt="Classical Music"
        className="w-full h-64 object-cover mb-6 rounded-lg"
      />
      <p className="text-lg mb-6">
        Classical music is known for its richness and complexity, deeply rooted in Western traditions
        dating back to the 11th century. It encompasses a wide range of styles, from symphonies to operas, 
        and has influenced many modern genres.

        </p>

      {/* History */}
      <h3 className="text-2xl font-semibold mb-2">History</h3>
      <p className="mb-4">
        Classical music's history spans several centuries, starting from the medieval period. 
        It evolved significantly during the Renaissance, Baroque, Classical, and Romantic eras, 
        with notable composers like Mozart, Beethoven, and Bach.

        Classical music traces its roots to Western liturgical (church) and secular traditions 
        from around the 11th century. The genre's development can be divided into distinct 
        periods: Medieval (500–1400), Renaissance (1400–1600), Baroque (1600–1750), 
        Classical (1750–1820), Romantic (1820–1910), and Modern (20th century onwards).
      </p>

      {/* Development */}
      <h3 className="text-2xl font-semibold mb-2">Development</h3>
      <p className="mb-4">
        The development of classical music saw the emergence of orchestral arrangements, 
        symphonies, and concertos. The rise of composers experimenting with harmony, melody, 
        and form shaped the genre into what it is today.
      </p>

      {/* Evolution */}
      <h3 className="text-2xl font-semibold mb-2">Evolution</h3>
      <p className="mb-4">
        Over time, classical music incorporated more modern elements and contemporary influences, 
        giving rise to neoclassical styles, film scores, and crossover works blending classical 
        instruments with other genres.
        Over the centuries, classical music evolved in complexity and expression. 
        Early music was largely vocal and sacred, with Gregorian chant being prominent. 
        By the Baroque period, composers like Bach and Handel explored intricate polyphonic textures. 
        The Classical era emphasized clarity and balance, as seen in works by Haydn and Mozart. 
        Romanticism brought emotional depth and larger orchestras, with composers like Beethoven
         and Tchaikovsky. Modern classical music incorporated new structures and atonality with 
         figures like Stravinsky and Schoenberg.
      </p>

      {/* Audio Samples */}
      <h3 className="text-2xl font-semibold mb-2">Listen to Classical Music Samples</h3>
      <audio controls className="w-full mb-4">
        <source src="c1.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <audio controls className="w-full mb-4">
        <source src="c2.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
    </div>
    </section>
    <Footer />
    </>
  );
}

export default Classical;
