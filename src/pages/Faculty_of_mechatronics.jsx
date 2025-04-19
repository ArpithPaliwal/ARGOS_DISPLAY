import React from 'react';
import Facalty_cards from '../components/Facalty_cards';
import { Link } from 'react-router-dom';

const Faculty_of_mechatronics = () => {
  const teachers = [
    {
      photo: "/faculty_images/gurmeet_singh.jpg",
      name: "Dr. Gurmeet Singh",
      designation: "Associate Professor",
      specialization: "Coatings & Tribology",
    },
    {
      photo: "/faculty_images/balaka_maam.png",
      name: "Dr. Balaka Biswas",
      designation: "Associate Professor",
      specialization: "RF and Microwave, Wireless Communication",
    },
    {
      photo: "/faculty_images/pulkit_jain.png",
      name: "Dr. Pulkit Jain",
      designation: "Assistant professor",
      specialization: "Image Processing & Computer Vision",
    },
    {
      photo: "/faculty_images/inderpreet_sir.jpg",
      name: "Dr.Inderpreet Singh",
      designation: "Assistant professor",
      specialization: "Thermal & Image Engineering",
    },
    {
      photo: "/faculty_images/gaganjout_maam.png",
      name: "Dr.Gaganjot Kaur",
      designation: "Assistant professor",
      specialization: "Internet of Things , Wireless & Communications",
    },
    {
      photo: "/faculty_images/anuj_gupta.jpg",
      name: "Dr. Anuj Gupta",
      designation: "Assistant professor",
      specialization: "Fuzzy Logic",
    },
    {
      photo: "/faculty_images/vinay_shah.jpg",
      name: "Er. Vinay Shah",
      designation: "Assistant professor",
      specialization: "Non-Conventional Machining & Manufacturing Processes",
    },
  ];

  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-gradient-to-b from-[#082567] to-[#021a3a]">
      <h2 className="bg-gradient-to-r from-[#0073e6] to-[#ADD8E6] text-transparent bg-clip-text text-[8vw] sm:text-[6vw] md:text-[4vw] text-center py-10 font-bold">
        Faculty of Mechatronics
      </h2>

      <div className="w-[90vw] max-w-[1400px] mx-auto p-4 sm:p-6 md:p-8 rounded-lg bg-gradient-to-b from-[#082567] to-[#021a3a] shadow-[0_0_25px_5px_rgba(59,130,246,0.5)] hover:shadow-xl hover:shadow-blue-300/70 
min-h-[120vh] sm:min-h-[110vh] md:min-h-[100vh] lg:min-h-[62vh]">

        {/* First Row - 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:mt-5 justify-items-center">
          {teachers.slice(0, 4).map((teacher, index) => (
            <Facalty_cards
              key={index}
              photo={teacher.photo}
              name={teacher.name}
              designation={teacher.designation}
              specialization={teacher.specialization}
            />
          ))}
        </div>

        {/* Second Row - Centered 3 Cards */}
        <div className="flex flex-wrap justify-center mt-20 md:mx-36">
          {teachers.slice(4).map((teacher, index) => (
            <Facalty_cards
              key={index + 4}
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

      <footer className="text-white text-lg sm:text-2xl mt-8 text-center px-4">
        Developed by: Arpith Paliwal (Team Lead), Daksh Sharma, Vinay Kumar, Mallikarjun Rao, Priyansh Verma, Dheeraj Kumar
      </footer>
    </div>
  );
};

export default Faculty_of_mechatronics;
