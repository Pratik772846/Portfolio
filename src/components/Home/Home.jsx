import React from 'react'
import Navbar from "../Navbar/Nav";
import {motion} from "framer-motion";
import lc from "../../assets/leetcode.png"
const Home = () => {
  return (
    <div className='h-screen'>
      
      <Navbar />
    
      <div className="flex justify-center  h-screen bg-slate-700  ">
        <motion.div 
          className="text-center  w-4/5 md:w-2/3 lg:w-1/3 xl-1/3 h-2/3 bg-slate-900 rounded-lg flex flex-col justify-center items-center mt-24"
          >

            <img 
              className='mt-5 w-1/5 h-32 rounded-full'
             src="https://framerusercontent.com/images/b5HcLGiq8nXy29HRuyCjLcs90.svg" 
              alt="Profile Img" />

          <div className='h-28 text-white text-5xl mt-5 pt-8'>
              Pratik Kumar
          </div>
          <motion.div 
            className='bg-slate-900 h-14 mt-5 flex flex-row justify-center items-center space-x-4'
            >
                <a href="https://github.com/Pratik772846" className='text-5xl text-orange-500'>
                  <ion-icon name='logo-github'></ion-icon>
                </a>
                <a href="https://www.linkedin.com/in/pratik-singh-828a36217/" className='text-5xl text-orange-500'>
                  <ion-icon name='logo-linkedin'></ion-icon>
                </a>
                <a href="https://leetcode.com/__ragnar" className='text-5xl w-12 text-orange-500'>
                  <img src={lc} alt="" className=''/>
                </a>

          </motion.div>
          <div className='text-white text-xl h-36 mt-10 pt-10'>
              Hi I'm Pratik , a creative web developer
              <br/>
                who loves to craft
              <br/>
                stunning websites.              
          </div>
        </motion.div>
      </div>

      <div >

      </div>

    </div>
  )
}

export default Home
