import React from 'react';
import Navbar from '../component/Navbar'; // Ensure Navbar is imported
import Footer from '../component/Footer'; // Ensure Footer is imported

 function Jazz() {
  return (
    <>
    <Navbar />
    <section id="contact" className="py-12 bg-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mt-10">Jazz Music</h2>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      
      <img
        src="https://image.focuspoints.io/jazz-lokaal-ensemble-11.jpg?_jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ3aWR0aCI6MTAwMCwiaXNzIjoiZjIxZWNmNzhjODQzNGQ1ZGI0MWY1ZDhhM2FkMGY2ZGEiLCJhY3Rpb24iOiJ0cmFuc2Zvcm0iLCJ1cmwiOiJodHRwczovL3d3dy5oYW56ZS5ubC9iaW5hcmllcy9jb250ZW50L2dhbGxlcnkvaGFuemUvb3BsZWlkaW5nZW4vc3BjYy9qYXp6L2FmYmVlbGRpbmdlbi1qYXp6L2phenotbG9rYWFsLWVuc2VtYmxlLTExLmpwZz90cz0xNjU1MTIwMDU0MjY4IiwiaGVpZ2h0Ijo2MDB9.faQ_UqWN83R_L0c8A2pqDtw_Qkh0hIaqPwwRQmI6o_jrdorizJ6RuiR0QgEf-U9l-iC-YjjuEoKMUxRO9DAYHw"
        alt="Jazz Music"
        className="w-full h-64 object-cover mb-6 rounded-lg"
      />
      <p className="text-lg mb-6">
        Jazz originated in the early 20th century in the African-American communities of New Orleans, 
        blending elements of blues, ragtime, and European classical music. Known for its improvisation, 
        swing, and complex harmonies, jazz has influenced a wide range of musical genres.
      </p>

      {/* History */}
      <h3 className="text-2xl font-semibold mb-2">History</h3>
      <p className="mb-4">
      Jazz originated in the late 19th and early 20th centuries in African American communities in New Orleans.
       It evolved from a mixture of blues, ragtime, and traditional African music, with figures like 
       Louis Armstrong and Duke Ellington shaping early jazz.
        The roots of jazz date back to the late 19th and early 20th centuries, with pioneers like 
        Louis Armstrong, Duke Ellington, and Jelly Roll Morton helping to shape the genre's early sound.
      </p>

      {/* Development */}
      <h3 className="text-2xl font-semibold mb-2">Development</h3>
      <p className="mb-4">
        Jazz saw numerous stylistic developments, including bebop in the 1940s, which emphasized fast tempos 
        and complex chord progressions, and cool jazz in the 1950s, characterized by relaxed tempos and lighter tones.
      </p>

      {/* Evolution */}
      <h3 className="text-2xl font-semibold mb-2">Evolution</h3>
      <p className="mb-4">
      Over the years, jazz has splintered into many subgenres. The 1940s saw the rise of 
      bebop (Charlie Parker, Dizzy Gillespie), known for its fast tempos and complex improvisations. 
      The 1950s and 1960s introduced cool jazz (Miles Davis) and free jazz (John Coltrane). 
      Jazz fusion, blending jazz with rock and funk, emerged in the 1970s. Modern jazz continues 
      to experiment with new sounds and global influences.
      Jazz continues to evolve, with modern jazz incorporating elements of hip-hop, funk, and electronic music, 
      while staying true to its roots of improvisation and innovation.
      </p>

      {/* Audio Samples */}
      <h3 className="text-2xl font-semibold mb-2">Listen to Jazz Music Samples</h3>
      <audio controls className="w-full mb-4">
        <source src="j1.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <audio controls className="w-full mb-4">
        <source src="j2.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div> 
    </div>
    </section>
    <Footer />
    </>
  );
}

export default Jazz;
