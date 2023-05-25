import React from 'react'
import Navbar from "../Navbar/Nav";
import ik from "../../assets/Pratik.jpg";
const About = () => {
  const tech =[
    {name:"ReactJS"},
    {name:"NodeJS"},
    {name:"Express"},
    {name:"MongoDB"},
    {name:"NextJS"},
    {name:"Go"},
    {name:"Tailwind CSS"},
   
  ];
  return (
    <div className='flex flex-col  bg-slate-700 items-center'>
       <Navbar/>    
        <div className='flex flex-col items-center w-4/5 md:w-2/3 lg:w-2/3 bg-slate-700 gap-7 '>
          <img src={ik} alt="Pratik's Img" className='h-60 w-52 rounded-full mt-5 shadow-2xl hover:scale-125 '/>
          <span className='text-5xl  text-orange-500 text-opacity-100 '>Pratik Kumar</span>

          <div className='flex flex-col items-center text-xl text-zinc-300 '>
            <span>
              Developed with React, Express, and Cheerio web scraping, 
              utilizes various APIs to offer extensive travel details and suggestions. 
              The combination of web scraping and API data ensures comprehensive information, 
              while React and Express provide a user-friendly interface with responsive design.
              Developed with React, Express, and Cheerio web scraping, 
              utilizes various APIs to offer extensive travel details and suggestions. 
              The combination of web scraping and API data ensures comprehensive information, 
              while React and Express provide a user-friendly interface with responsive design.
              Developed with React, Express, and Cheerio web scraping, 
              utilizes various APIs to offer extensive travel details and suggestions. 
              The combination of web scraping and API data ensures comprehensive information, 
              while React and Express provide a user-friendly interface with responsive design.
              Developed with React, Express, and Cheerio web scraping, 
              utilizes various APIs to offer extensive travel details and suggestions. 
              The combination of web scraping and API data ensures comprehensive information, 
              while React and Express provide a user-friendly interface with responsive design.
            </span>
          </div>

          <span className='text-4xl text-orange-500 text-center'>
            TECHNOLOGY I'M WORKING ON
          </span>
          
          <div className='flex flex-row md:flex-row lg:flex-row 
            flex-wrap md:flex-wrap lg:flex-wrap justify-center items-center gap-5'>
              {tech.map((tech)=>(
                <div className='text-4xl bg-slate-900 h-32 w-32  text-orange-400 rounded-lg shadow-2xl shadow-orange-200/20'>
                  <ion-icon name='logo-github'></ion-icon>
                </div>
                
              ))}
          </div>

          <div className='h-20'>

          </div>

        </div>
    </div>
  )
}

export default About
