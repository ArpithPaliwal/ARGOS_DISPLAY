import React from 'react'
import Layout from '../components/Layout'
import gifImage from '../assets/images/argos_side_photo_0.png';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <Layout>
        <div className='flex-grow  flex flex-col  place-items-center p-20'>
        <img className=" pb-30  block" src={gifImage} alt="gif here" />
        <button className="  bg-[#0073e6]  text-4xl outline-2 w-20px outline-white text-white p-3 rounded-2xl">
          
          {/*<Link to="/Minds_Behind_Argos">Explore</Link>*/}
          <Link to="/Minds_Behind_Argos">Explore ARGOS</Link>
        </button>
        </div>
        
        
      
    </Layout>
    
  )
}

export default Home