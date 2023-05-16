import React from 'react'
import Navbar from "../Navbar/Nav";
const Home = () => {
  return (
    <div className='h-screen'>
      
      <Navbar />
    
      <div className="flex justify-center  h-screen bg-slate-700  ">
        <div className="text-center  w-1/3 h-2/3 bg-slate-900 rounded-lg flex flex-col justify-center items-center mt-24">

            <img 
              className='mt-5 w-1/5 h-32 rounded-full'
             src="https://framerusercontent.com/images/b5HcLGiq8nXy29HRuyCjLcs90.svg" 
              alt="Profile Img" />

          <div className='h-28 text-white text-5xl mt-5 pt-8'>
              Pratik Kumar
          </div>
          <div className='bg-white h-14 mt-5'>
                adaaaa
          </div>
          <div className='text-white text-xl h-36 mt-10 pt-10'>
              Hi I'm Pratik , a creative web developer
              <br/>
                who loves to craft
              <br/>
                stunning websites.              
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
