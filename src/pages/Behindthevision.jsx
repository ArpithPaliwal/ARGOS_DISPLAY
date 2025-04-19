import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'

const Behindthevision = () => {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-b from-[#082567] to-[#021a3a] flex flex-col">
      {/* Header */}
      <header className="text-center px-4 pt-6">
        <div className="bg-gradient-to-r from-[#0073e6] to-[#ADD8E6] text-transparent bg-clip-text 
          text-[10vw] sm:text-[6vw] md:text-[5vw] tracking-[0.3em] leading-none md:p-10">
          ARPITH PALIWAL
        </div>
      </header>

      {/* Box with profile and content */}
      <div className="w-[90vw] max-w-6xl mx-auto bg-gradient-to-b from-[#082567] to-[#021a3a] 
        rounded-lg shadow-[0_0_15px_3px_rgba(59,130,246,0.4)] p-4 md:p-6 mt-6 mb-6">
        
        {/* Responsive Card */}
        <div className="rounded-lg overflow-hidden shadow-lg bg-transparent p-6 sm:p-8 md:p-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:space-x-40 space-y-8 lg:space-y-0">
            {/* Image */}
            <img className="w-32 h-32 sm:w-40 sm:h-40 md:w-120 md:h-120 rounded-full object-cover" 
              src="/Minds_0f_ARGOS/Arpith.png" alt="Arpith Paliwal" />
            
            {/* Text + Links */}
            <div className="text-center lg:text-left my-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold bg-gradient-to-r from-[#0073e6] to-[#ADD8E6] 
                text-transparent bg-clip-text">
                Arpith Paliwal
              </h2>

              <div className="mt-6 space-y-4 text-base sm:text-xl">
                {/* LinkedIn */}
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <FaLinkedin className="text-blue-600 text-2xl sm:text-3xl" />
                  <span className="text-white">LinkedIn : Arpith Paliwal</span>
                </div>

                {/* Instagram */}
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <FaInstagram className="text-pink-600 text-2xl sm:text-3xl" />
                  <span className="text-white">Instagram : arpith2410</span>
                </div>

                {/* Email */}
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <FaEnvelope className="text-gray-400 text-2xl sm:text-3xl" />
                  <span className="text-white">Email : arpithpaliwal@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="text-center mb-6">
        <Link to="/Landing_page">
          <button className="bg-[#0073e6] text-white text-sm sm:text-base md:text-lg lg:text-xl 
            px-6 py-2 rounded-xl transition hover:bg-blue-500">
            Back
          </button>
        </Link>
      </div>

      {/* Footer */}
      <footer className="text-white text-xs sm:text-sm md:text-base lg:text-lg px-4 py-4 text-center">
        Developed by: <br />
        Arpith Paliwal (Team Lead), Daksh Sharma, Vinay Kumar, Mallikarjun Rao, Priyansh Verma, Dheeraj Kumar
      </footer>
    </div>
  )
}

export default Behindthevision
