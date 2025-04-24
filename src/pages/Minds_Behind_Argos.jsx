import React from 'react'
import Minds_behind_argos_cards from '../components/minds_behind_argos_cards';
import { Link } from 'react-router-dom';

const Minds_Behind_Argos = () => {
  const teachers = [
    {
      photo: "/Minds_0f_ARGOS/Arpith.png",
      name: "Arpith Paliwal",
      designation: "( TEAM LEAD ) 21BEM1028",
      specialization: "Webdev,ROS2,Electronics,BMS,Design",
    },
    {
      photo: "/Minds_0f_ARGOS/DAKSH.jpg",
      name: "Daksh Sharma",
      designation: "21BEM1022",
      specialization: " Design ",
    },
    {
      photo: "/Minds_0f_ARGOS/priyansh.jpg",
      name: "Priyansh Varma",
      designation: "21BEM1016",
      specialization: "Research & Assembly & Design",
    },
    {
      photo: "/Minds_0f_ARGOS/vinay.jpg",
      name: "Vinay Kumar Gupta ",
      designation: "21BEM1014",
      specialization: "ROS2 , Design , Electronics",
    },
    {
      photo: "/Minds_0f_ARGOS/mallikarjun.png",
      name: "DS Mallikarjun Rao",
      designation: "21BEM1032",
      specialization: "Design , 3D modelling , Research ",
    },
    
    
    {
      photo: "/Minds_0f_ARGOS/dheeraj.jpg",
      name: "Dheeraj Kumar",
      designation: "21BEM80006",
      specialization: "Research & Assembly",
    },
  ];

  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-gradient-to-b from-[#082567] to-[#021a3a]">
      <h1 className="bg-gradient-to-r from-[#0073e6] to-[#ADD8E6] text-transparent bg-clip-text text-[8vw] sm:text-[6vw] md:text-[4vw] text-center py-10 font-bold">
        Minds Behind ARGOS
      </h1>

      <div className="w-[90vw] max-w-[1200px] mx-auto p-4 sm:p-6 md:p-15 rounded-lg  bg-gradient-to-b from-[#082567] to-[#021a3a]  shadow-[0_0_25px_5px_rgba(59,130,246,0.5)]
 hover:shadow-xl hover:shadow-blue-300/70">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15 justify-items-center">
          {teachers.map((teacher, index) => (
            <Minds_behind_argos_cards
              key={index}
              photo={teacher.photo}
              name={teacher.name}
              designation={teacher.designation}
              specialization={teacher.specialization}
            />
          ))}
        </div>
      </div>

      <div className="text-center mt-10">
        <button className="bg-[#0073e6] text-2xl outline outline-white text-white px-6 py-3 rounded-2xl transition duration-300 hover:bg-blue-500">
          <Link to="/Landing_page">Back</Link>
        </button>
      </div>

      <footer className="text-white text-lg sm:text-xl mt-8 text-center px-4">
        Developed by: Arpith Paliwal (Team Lead), Daksh Sharma, Vinay Kumar, Mallikarjun Rao, Priyansh Verma, Dheeraj Kumar
      </footer>
    </div>
  );
};

export default Minds_Behind_Argos;
