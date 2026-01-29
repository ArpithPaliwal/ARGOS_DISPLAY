import React, { useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const Main = () => {
  const [showNotice, setShowNotice] = useState(true);

  const buttons = [
    { label: "Navigation", path: "/Navigation" },
    { label: "Who Created Argos?", path: "/Minds_behind_Argos" },
    { label: "Mechatronics Department", path: "/Mechatronics_Department" },
    { label: "Faculty Of Mechatroncis", path: "/Faculty_Of_Mechatronics" },
    { label: "Fun Mode", path: "/Fun_Mode" },
    { label: "Googly eyes", path: "/Googly_eyes" },
    { label: "Talk to Argos", path: "/Talk_to_Argos" },
    { label: "Search The Web", path: "/Search_the_Web" },
    { label: "Manual", path: "/Manual" },
  ];

  return (
    <Layout>
      <div className="flex justify-center items-center w-full">
        <div className="w-[90vw] min-h-[50vh] max-w-6xl bg-gradient-to-b from-[#082567] to-[#021a3a] rounded-lg shadow-[0_0_25px_5px_rgba(59,130,246,0.5)] p-4 md:p-15 flex flex-col items-center">

          {/* ⚠️ NOTICE */}
          {showNotice && (
            <div className="w-full mb-6 rounded-lg border border-blue-400/40 bg-blue-900/40 px-4 py-3 text-sm text-blue-100 flex items-start justify-between gap-4">
              <p>
                <span className="font-semibold">Notice:</span> This application
                is designed to run on the <span className="font-semibold">ARGOS robot display</span>.
                When viewed on other screens or monitors, the layout and scaling
                may appear different.
              </p>
              <button
                onClick={() => setShowNotice(false)}
                className="text-blue-200 hover:text-white transition"
                aria-label="Dismiss notice"
              >
                ✕
              </button>
            </div>
          )}

          {/* BUTTON GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-y-12">
            {buttons.map((button, index) => (
              <Link
                key={index}
                to={button.path}
                className="bg-[#0073e6] text-white text-lg sm:text-xl md:text-2xl p-4 rounded-xl text-center transition-transform duration-200 hover:scale-105 whitespace-normal break-words min-h-[80px] flex items-center justify-center"
              >
                {button.label}
              </Link>
            ))}
          </div>

          {/* BEHIND THE VISION */}
          <button className="bg-[#0073e6] text-2xl mt-[5vh] outline outline-white text-white 
            px-6 py-3 rounded-2xl w-58 transition duration-300 hover:bg-blue-500">
            <Link to="/Behindthevision">Behind The Vision</Link>
          </button>
        </div>
      </div>

      {/* BACK BUTTON */}
      <div className="text-center mt-8">
        <button className="bg-[#0073e6] text-2xl outline outline-white text-white 
          px-6 py-3 rounded-2xl w-40 transition duration-300 hover:bg-blue-500">
          <Link to="/">Back</Link>
        </button>
      </div>
    </Layout>
  );
};

export default Main;
