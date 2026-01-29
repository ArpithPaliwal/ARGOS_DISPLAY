import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Minds_Behind_Argos from './pages/Minds_Behind_Argos'
import Faculty_of_mechatronics from './pages/Faculty_of_mechatronics'
import Landing_page from './pages/Landing_page'
import Fun_Mode from './pages/Fun_Mode'
import Manual from './pages/Manual'
import Mechatronics_Department from './pages/Mechatronics_Department'
import Search_the_web from './pages/Search_the_web'
import Talk_to_Argos from './pages/Talk_to_Argos'
import Navigation from './pages/Navigation'
import Googly_eyes from './pages/Googly_eyes'

import Mechatronics_01 from './pages/Mechatronics_01'
import Mechatronics_02_ABET from './pages/Mechatronics_02_ABET'
import Mechatronics_03_placements from './pages/Mechatronics_03_placements'
import Mechatronics_03_placements_02 from './pages/Mechatronics_03_placements_02'
import Mechatronics_additive from './pages/Mechatronics_additive'
import Mechatronics_usp from './pages/Mechatronics_usp'
import Mechatronics_projects from './pages/Mechatronics_projects'
import Mechatronics_projects_02 from './pages/Mechatronics_projects_02'
import Mechatronics_ach_01 from './pages/Mechatronics_ach_01'
import Mechatronics_ach_02 from './pages/Mechatronics_ach_02'
import Mechatronics_al1 from './pages/Mechatronics_al1'
import Mechatronics_al2 from './pages/Mechatronics_al2'
import Behindthevision from './pages/Behindthevision'


function App() {
  
 useEffect(() => {
    const hasSeenWarning = localStorage.getItem("argosWarningSeen");

    if (!hasSeenWarning) {
      alert(
        "Warning:\n\n" +
        "This application is designed to run exclusively on the ARGOS robot display.\n\n" +
        "When accessed on other screens or monitors, layout and scaling may appear different."
      );

      localStorage.setItem("argosWarningSeen", "true");
    }
  }, []);
  return (
    <div >
      
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/Minds_Behind_Argos' element={<Minds_Behind_Argos/>}/>
        <Route path='/Faculty_of_mechatronics' element={<Faculty_of_mechatronics/>}/>
        <Route path='/Landing_page' element={<Landing_page/>}/>
        <Route path='/Fun_Mode' element={<Fun_Mode/>}/>
        <Route path='/Manual' element={<Manual/>}/>
        <Route path='/Mechatronics_Department' element={<Mechatronics_Department/>}/>
        <Route path='/Search_the_Web' element={<Search_the_web/>}/>
        <Route path='/Talk_to_Argos' element={<Talk_to_Argos/>}/>
        <Route path='/Navigation' element={<Navigation/>}/>
        <Route path='/Googly_eyes' element={<Googly_eyes/>}/>

        <Route path='/Mechatronics_01' element={<Mechatronics_01/>}/>
        <Route path='/Mechatronics_02_ABET' element={<Mechatronics_02_ABET/>}/>
        <Route path='/Mechatronics_03_placements' element={<Mechatronics_03_placements/>}/>
        <Route path='/Mechatronics_03_placements_02' element={<Mechatronics_03_placements_02/>}/>
        <Route path='/Mechatronics_additive' element={<Mechatronics_additive/>}/>
        <Route path='/Mechatronics_usp' element={<Mechatronics_usp/>}/>
        <Route path='/Mechatronics_projects' element={<Mechatronics_projects/>}/>
        <Route path='/Mechatronics_projects_02' element={<Mechatronics_projects_02/>}/>
        <Route path='/Mechatronics_ach_01' element={<Mechatronics_ach_01/>}/>
        <Route path='/Mechatronics_ach_02' element={<Mechatronics_ach_02/>}/>
        <Route path='/Mechatronics_al1' element={<Mechatronics_al1/>}/>
        <Route path='/Mechatronics_al2' element={<Mechatronics_al2/>}/>
        <Route path='/Behindthevision' element={<Behindthevision/>}/>
      </Routes>
    </div>
  )
}

export default App
