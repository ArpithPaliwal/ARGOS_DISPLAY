import React from 'react'
import Layout from '../components/layout'
import { Link } from 'react-router-dom'

const Mechatronics_01 = () => {
  return (
    <Layout>
     
        <div className=" w-[90vw] max-w-5xl mx-auto bg-gradient-to-b from-[#082567] to-[#021a3a] 
        rounded-lg shadow-[0_0_25px_5px_rgba(59,130,246,0.5)] hover:shadow-xl 
        hover:shadow-blue-300/70 mt-[3vh] p-[5vh]">
          <div className="text-white text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed">
            <b className="text-white text-lg sm:text-xl md:text-2xl">Mechatronics</b> — a term derived from an amalgam of mechanics and electronics — is a synergistic combination of systems engineering, mechanical engineering, electrical engineering, telecommunications engineering, control engineering, and computer engineering.

            <p className="mt-6">
              As mechatronics blends unique features of different engineering disciplines, the Department of Mechatronics Engineering at Chandigarh University, Punjab blends effective traits of academic delivery system. Ranked among the best Mechatronics engineering colleges in Punjab, UIE imparts students with multidisciplinary expertise that is at par with global industry standards.
            </p>

            <p className="mt-5">
              <b>Scope:</b> It is a multidisciplinary field that opens up job opportunities in a range of sectors including –<br />
              Robotics, Aerospace, Defence, Automotive, Manufacturing.
            </p>
          </div>
        </div>
      

      <div className="text-center mt-[5vh]">
        <button className="bg-[#0073e6] text-2xl outline-2 outline-white text-white 
        px-6 py-3 rounded-2xl w-40 transition duration-300 hover:bg-blue-500">
          <Link to="/Mechatronics_Department">Back</Link>
        </button>
      </div>
    </Layout>
  )
}

export default Mechatronics_01
