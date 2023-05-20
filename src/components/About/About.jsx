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
        <div className='flex flex-col items-center w-4/5 md:w-2/3 lg:w-1/3 bg-slate-700 gap-7 '>
          <img src={ik} alt="Pratik's Img" className='h-60 w-52 rounded-full mt-5 '/>
          <span className='text-5xl  text-orange-500 text-opacity-100'>Pratik Kumar</span>

          <div className='flex flex-col items-center text-xl text-zinc-300 '>
            <span>
              Hi I'm Pratik , a creative web developer
            </span>
            <span>
              Hi I'm Pratik , a creative web developer asdkljjhjkd
            </span>
            <span>
              Hi I'm Pratik , a creative web developer
            </span>
          </div>

          <span className='text-4xl text-orange-500'>TECHNOLOGY</span>
          
          <div className='flex flex-col items-center gap-5'>
              {tech.map((tech)=>(
                <div className='flex flex-row items-center gap-0 md:gap-3 lg:gap-9'>
                    <span className='text-2xl'>
                      <ion-icon name='logo-github'></ion-icon>
                    </span>
                    <span className='text-2xl text-zinc-300'>{tech.name}</span>
                </div> 
                
              ))}
          </div>

        </div>
    </div>
  )
}

export default About
