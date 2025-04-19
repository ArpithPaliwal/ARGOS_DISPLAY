import React from 'react';

// Layout Component
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-b from-[#082567] to-[#021a3a] flex flex-col">
      {/* Header */}
      <header className="text-center px-4 pt-6">
        <div className="font-anurati bg-gradient-to-r from-[#0073e6] to-[#ADD8E6] text-transparent bg-clip-text text-[10vw] sm:text-[6vw] md:text-[5vw] tracking-[0.5em] leading-none">
          ARGOS
        </div>
        <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl mt-4 tracking-wide">
          Autonomous Robot for Guidance, Operation and Safety
        </h3>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex justify-center flex-col ">{children}</main>

      {/* Footer */}
      <footer className="text-white text-xs sm:text-sm md:text-base lg:text-2xl px-4 py-6 text-center">
        Developed by: <br />
        Arpith Paliwal (Team Lead), Daksh Sharma, Vinay Kumar, Mallikarjun Rao, Priyansh Verma, Dheeraj Kumar
      </footer>
    </div>
  );
};

export default Layout;
