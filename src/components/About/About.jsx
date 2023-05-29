import React from 'react'
import Navbar from "../Navbar/Nav";
import ik from "../../assets/Pratik.jpg";
const About = () => {
  const tech =[
    {name:"ReactJS",img:"https://res.cloudinary.com/dv8zwrzop/image/upload/v1685335971/react_yrnrb4.svg"},
    {name:"NodeJS",img:"https://res.cloudinary.com/dv8zwrzop/image/upload/v1685337365/nodejs_lsmdbe.svg"},
    {name:"Express",img:"https://res.cloudinary.com/dv8zwrzop/image/upload/v1685338066/pngegg_z6wgho.png"},
    {name:"MongoDB",img:"https://res.cloudinary.com/dv8zwrzop/image/upload/v1685335947/mongodb_wobzwn.svg"},
    {name:"NextJS",img:"https://res.cloudinary.com/dv8zwrzop/image/upload/v1685335971/react_yrnrb4.svg"},
    {name:"Go",img:"https://res.cloudinary.com/dv8zwrzop/image/upload/v1685337325/go_hzepwb.svg"},
    // {name:"Tailwind CSS",img:"https://res.cloudinary.com/dv8zwrzop/image/upload/v1685338311/images1_qlgi09.jpg"},
   
  ];
  return (
    <div className='flex flex-col  bg-slate-700 items-center'>
       <Navbar/>    
        <div className='flex flex-col items-center w-4/5 md:w-2/3 lg:w-2/3 bg-slate-700 gap-7 '>
          <img src={ik} alt="Pratik's Img" className='h-56 w-56 rounded-full mt-5 shadow-2xl hover:scale-125 '/>
          <span className='text-5xl  bg-gradient-to-r from-color1  to-color2 text-transparent bg-clip-text  '>Pratik Kumar</span>

          <div className='flex flex-col items-center text-xl'>
            <span className='font-sans text-white'>
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

          <span className='text-4xl text-orange-300 text-center'>
            TECHNOLOGY I'M WORKING ON
          </span>
          
          <div className='flex flex-row md:flex-row lg:flex-row 
            flex-wrap md:flex-wrap lg:flex-wrap justify-center items-center gap-5'>
              {tech.map((tech)=>(
                <div className=' flex flex-col justify-center items-center  gap-4 text-2xl font-sans bg-slate-900 h-36 w-48 
                 text-white rounded-lg shadow-2xl  shadow-orange-300/40 hover:scale-110'>
                  <img src={tech.img} alt="Logo" className='bg-slate-900' />
                  <p>{tech.name}</p>
                  
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
