import React from 'react';
import Home from './Home/Home';
import toast, { Toaster } from 'react-hot-toast';
import { Route, Routes } from "react-router-dom";
import Courses from './Courses/Courses';
import Signup from './component/Signup';
import RadioPlayer from './component/RadioPlayer';
import Classical from './component/classical';
import Rock from './component/rock';
import HipHop from './component/hiphop';
import Pop from './component/pop';
import Jazz from './component/Jazz';
import About from './component/aboutus';
import Contact from './component/contactus';
import GenreCommunity from './component/genrecommunity'; // Import the GenreCommunity component

function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} /> {/* Ensure path is lowercase */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/Radio" element={<RadioPlayer />} />
          <Route path="/Classical" element={<Classical />} />
          <Route path="/Rock" element={<Rock />} />
          <Route path="/HipHop" element={<HipHop />} />
          <Route path="/Pop" element={<Pop />} />
          <Route path="/Jazz" element={<Jazz />} />
          <Route path="/Aboutus" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          
          {/* New route for GenreCommunity */}
          <Route path="/community/:genreId" element={<GenreCommunity />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
