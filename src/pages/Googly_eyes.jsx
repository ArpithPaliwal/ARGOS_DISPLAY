import React from 'react';
import { Link } from 'react-router-dom';

const Googly_eyes = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#082567] to-[#021a3a]">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/eyes_01.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Googly Eyes Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
        
      </div>
      
      {/* Button */}
      <div className="absolute bottom-6 w-full text-center">
        <Link to="/Landing_page">
          <button className="bg-[#0073e6] text-white text-base sm:text-lg md:text-2xl 
            px-6 py-2 rounded-xl transition hover:bg-blue-500">
            Wake Me Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Googly_eyes;
