import React from 'react'
import Navbar from "../Navbar/Nav";
const About = () => {
  return (
    <div>
       <Navbar/>    

       

        <div className='hidden sm:block'>small</div>
         <div className='hidden lg:block '> large</div>
        <div className='hidden md:block'>medium</div>
    </div>
  )
}

export default About
