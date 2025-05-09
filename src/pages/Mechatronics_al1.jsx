import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

const Mechatronics_al1 = () => {
  return (
    <Layout>
      <div className="w-[90vw] max-w-5xl bg-gradient-to-b from-[#082567] to-[#021a3a] 
      rounded-lg shadow-[0_0_25px_5px_rgba(59,130,246,0.5)] hover:shadow-xl 
      hover:shadow-blue-300/70 mt-6 mx-auto p-4">
        
        <div className="flex items-center justify-center">
          <img
            src="/mechatronics/al1.png" // replace with your actual image path
            alt="ABET Accreditation"
            className="w-full max-w-full h-auto rounded-xl shadow-2xl"
          />
        </div>
      </div>

      <div className="text-center mt-6">
        <button className="bg-[#0073e6] text-2xl outline outline-white text-white 
        px-6 py-3 rounded-2xl w-40 transition duration-300 hover:bg-blue-500">
          <Link to="/Mechatronics_al2">Next</Link>
        </button>
      </div>
    </Layout>
  )
}

export default Mechatronics_al1
