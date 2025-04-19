import React from 'react'
import { Link } from 'react-router-dom'

const buttons = [
  { label: 'Explore Labs', path: '/labs' },
  { label: 'View Projects', path: '/projects' },
  { label: 'Meet the Team', path: '/team' }
  // Add more buttons if needed
]

const Manual = () => {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-b from-[#082567] to-[#021a3a] flex flex-col">
      {/* Header */}
      <header className="text-center px-4 pt-6">
        <div className="bg-gradient-to-r from-[#0073e6] to-[#ADD8E6] text-transparent bg-clip-text text-[10vw] sm:text-[6vw] md:text-[3.5vw] tracking-[0.5em] leading-none md:p-10">
        Manual for ARGOS

        </div>
        
      </header>

      {/* Box with buttons and scrollable content */}
      <div className="w-[90vw] min-h-[60vh] max-w-6xl mx-auto bg-gradient-to-b from-[#082567] to-[#021a3a] rounded-lg 
        shadow-[0_0_15px_3px_rgba(59,130,246,0.4)] p-4 md:p-6 mt-6 mb-6">


        {/* Scrollable USP List */}
        <div className="overflow-y-auto max-h-[50vh] px-2 scrollbar-thin scrollbar-thumb-blue-6600 scrollbar-track-blue-200">
          <ul className="list-disc text-white pl-5 space-y-2 text-sm sm:text-base md:text-xl md:pt-10">
            <li>B.E. Program is NBA Accredited for Six Years (2021-2027), ensuring a high standard of education and curriculum.</li>
            <li>B.E. Program is ABET Accredited for Six Years (Effective from October 21, 2021), recognized globally for quality engineering programs.</li>
            <li>Major Specializations:
              <ul className="list-disc pl-6">
                <li>Robotics & Industrial Automation</li>
                <li>Sensing and Machine Vision</li>
              </ul>
            </li>
            <li>Industrial Certification Program on EV’s and Connected Cars with MG Motors Pvt. Ltd. under MG Nurture Program</li>
            <li>State-of-the-Art Industry-Oriented Labs:
              <ul className="list-disc pl-6">
                <li>Texas Instruments (TI University Program)</li>
                <li>Flexible Manufacturing Systems Lab</li>
                <li>Robotics & Automation Lab</li>
                <li>Electrical Drives and PLC Lab</li>
                <li>Project Lab</li>
              </ul>
            </li>
            <li>Average placement: 85%. Highest Package: 12 L.P.A. Prominent Companies:
              <ul className="list-disc pl-6">
                <li>YAMAHA</li>
                <li>ALSTOM PVT. LTD</li>
                <li>VARROC ENGINEERING</li>
                <li>RENAULT NISSAN TECHNOLOGY & BUSINESS CENTRE INDIA PVT. LTD.</li>
                <li>PADMINI VNA MECHATRONICS</li>
                <li>EXIDE INDUSTRIES PVT. LTD.</li>
                <li>MORPHLE LABS PVT. LTD.</li>
              </ul>
            </li>
            <li>Cutting-Edge Internship Opportunities at core industry leaders like SML ISUZU, Bosch, DRDO, CSIR-CSIO, Cognizant</li>
            <li>Guidance to Advanced Projects such as:
              <ul className="list-disc pl-6">
                <li>Automatic 2D Drawing Machine</li>
                <li>Driverless Car</li>
                <li>Autonomous Vehicle (ARGOS)</li>
                <li>Humanoid Robots</li>
                <li>Glider</li>
                <li>Medicine Delivery Autonomous Drone</li>
                <li>Smart Mirror</li>
                <li>Next Gen Exoskeleton Robotic Arm</li>
                <li>Home Automation</li>
              </ul>
            </li>
            <li>Over 250 Research Publications, including 150+ SCI/Scopus indexed papers, Over 100 Patents</li>
            <li>Research grant: ₹1.10 Cr (Projects), ₹11 Lacs (Conferences/Symposiums), Consultancy: ₹12.42 Lacs</li>
          </ul>
        </div>
      </div>

      {/* Back Button */}
      <div className="text-center mb-6">
        <Link to="/Mechatronics_Department">
          <button className="bg-[#0073e6] text-white text-base sm:text-lg md:text-2xl 
            px-6 py-2 rounded-xl transition hover:bg-blue-500">
            Back
          </button>
        </Link>
      </div>

      {/* Footer */}
      <footer className="text-white text-xs sm:text-sm md:text-base lg:text-2xl px-4 py-4 text-center">
        Developed by: <br />
        Arpith Paliwal (Team Lead), Daksh Sharma, Vinay Kumar, Mallikarjun Rao, Priyansh Verma, Dheeraj Kumar
      </footer>
    </div>
  )
}

export default Manual
