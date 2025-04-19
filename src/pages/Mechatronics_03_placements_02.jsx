import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout";

const Mechatronics_03_placements = () => {
  return (
    <Layout>
      <div className="w-full max-w-[80vw] md:max-w-[70vw] bg-gradient-to-b from-[#082567] to-[#021a3a] 
        rounded-lg shadow-[0_0_25px_5px_rgba(59,130,246,0.5)] hover:shadow-xl hover:shadow-blue-300/70 
        p-4 mt-6 mx-auto flex flex-col items-center">  {/* Ensure box is centered using mx-auto */}

        <img
          className="w-full max-w-[1000px] h-auto rounded-lg"
          src="/mechatronics/2025.png"
          alt="Placement"
        />
      </div>

      <div className="text-center mt-6">
        <button className="bg-[#0073e6] text-2xl outline outline-white text-white md:w-40
        px-6 py-3 rounded-2xl transition duration-300 hover:bg-blue-500">
          <Link to="/Mechatronics_Department">Back</Link>
        </button>
      </div>
    </Layout>
  );
};

export default Mechatronics_03_placements;
