import React from 'react';
import Layout from '../components/layout';
import { Link } from 'react-router-dom';

const Mechatronics_Department = () => {
  const buttons = [
    { label: 'What is Mechatronics ?', path: '/Mechatronics_01' },
    { label: 'ABET Accreditation', path: '/Mechatronics_02_ABET' },
    { label: 'USP of the Department', path: '/Mechatronics_usp' },
    { label: 'Placements', path: '/Mechatronics_03_placements' },
    { label: 'Projects', path: '/Mechatronics_projects' },
    { label: 'Alumni', path: '/Mechatronics_al1' },
   
    { label: 'ME Robotics & Automation', path: '/Mechatronics_additive' },
    { label: 'Achievements', path: '/Mechatronics_ach_01' },
    { label: 'Faculty of Mechatronics', path: '/Faculty_of_mechatronics' },
  ];

  return (
    <Layout>
      <div className="w-[90vw]  min-h-[60vh] max-w-6xl mx-auto bg-gradient-to-b from-[#082567] to-[#021a3a] rounded-lg 
      shadow-[0_0_15px_3px_rgba(59,130,246,0.4)] p-4 md:p-6 mt-6 mb-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-26 md:pt-9">
          {buttons.map((button, index) => (
            <Link
              key={index}
              to={button.path}
              className="bg-[#0073e6] text-white text-base sm:text-lg md:text-2xl 
              p-4 rounded-xl text-center transition-transform duration-200 
              hover:scale-105 break-words w-full min-h-[90px] 
              flex items-center justify-center"
            >
              {button.label}
            </Link>
          ))}
        </div>
      </div>

      
            <div className="text-center mt-6">
              <button className="bg-[#0073e6] text-2xl outline outline-white text-white 
              px-6 py-3 rounded-2xl w-40 transition duration-300 hover:bg-blue-500">
                <Link to="/Landing_page">Back</Link>
              </button>
            </div>
    </Layout>
  );
};

export default Mechatronics_Department;
