import React from 'react'
import Home from "../pages/Home"
import Projects from "../pages/Projects"
import Education from "../pages/Education"
import Contact from "../pages/Contact"
import {Routes,Route} from "react-router-dom"


function Routers() {
  return (
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/education" element={<Education/>}/>
    <Route path="/contact" element={<Contact/>}/>

   </Routes>
  )
}

export default Routers
