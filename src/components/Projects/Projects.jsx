import React from 'react';
import Projectimg1 from "../../assets/prj-img.png";
const Projects = () => {
  const projects = [
    {name:"Travel Advisor",link:"/"},
    {name:"Travel Advisor",link:"/"},
    {name:"Travel Advisor",link:"/"},
  ];
  const minor=[
    {name:"Travel Advisor",link:"/"},
    {name:"Travel Advisor",link:"/"},
    {name:"Travel Advisor",link:"/"},
  ];

  return (
    
    <div className=" flex flex-col  ">
        
        {/* <Navbar/>        */}
  
        <div className="flex flex-col flex-grow justify-center items-center bg-slate-700 ">
          <h1 className="text-5xl bg-gradient-to-r from-color1  to-color2 text-transparent bg-clip-text font-sans">PROJECTS</h1>

          {projects.map((project)=>(
            <div className=" w-full md:w-2/3 lg:w-1/2  flex flex-col justify-center items-start pt-10 gap-4">
              <span className="text-5xl text-orange-300 ">{project.name}</span>
              <div className="flex flex-row justify-center gap-5 md:gap-5 lg:gap-10">
                  <span className="flex flex-col  justify-center items-center  bg-slate-900 text-md md:text-md lg:text-xl text-zinc-300 w-1/2 px-2 md:px-10 lg:px-10  text-justify  rounded-2xl font-sans  ">
                      Developed with React, Express, and Cheerio web scraping, 
                      utilizes various APIs to offer extensive travel details and suggestions. 
                      The combination of web scraping and API data ensures comprehensive information, 
                      while React and Express provide a user-friendly interface with responsive design.
                  </span>
                  <div  className="bg-slate-700 w-1/2 flex justify-around items-center rounded-2xl">
                    <img src={Projectimg1} alt="Project Img" className="h-96 md:h-80 lg:h-96 md:w-80 lg:w-96 items-center" />
                  </div>
              </div>
              <div className="flex flex-row justify-center items-center w-full gap-4 bg-slate-700"> 
                <a href="/" className="text-white text-4xl">
                  <ion-icon name='logo-github'></ion-icon>
                </a>
                <a href="/" className="text-white text-4xl">
                  <ion-icon name="desktop-outline"></ion-icon>
                </a>
              </div>
            </div>
          ))}

      <h1 className="text-5xl pt-5 bg-gradient-to-r from-color1  to-color2 text-transparent bg-clip-text">MINOR PROJECTS</h1>

      
            <div className=" w-full md:w-2/3 lg:w-2/3  flex flex-col md:flex-col lg:flex-row justify-center items-center pt-10 gap-4">
              
              {minor.map((project)=>(
                <div className="w-full md:w-full lg:w-1/3 flex flex-col justify-center items-center  bg-slate-900 rounded-md">
                  <span className="text-xl text-orange-300 pt-4  ">{project.name}</span>
                  <br></br>
                  <div className="px-5  ">
                    <span className="text-white font-sans text-start">
                        Developed with React, Express, and Cheerio web scraping, 
                        utilizes various APIs to offer extensive travel details and suggestions.
                        The combination of web scraping and API data ensures comprehensive information.
                        While React and Express provide a user-friendly interface with responsive design.
                        askldskods asisdofhiojiodsf iijiosfjiojf  iajdidsnk sd hello my name is  pratik kumar 
                    </span>
                  </div>
                  
                  <br />
                  <div className="pb-5 flex flex-row justify-center items-center w-full gap-4">  
                  <a href="/" className="text-white text-4xl">
                    <ion-icon name="logo-github"></ion-icon>
                  </a>
                  <a href="/" className="text-white text-4xl">
                    <ion-icon name="desktop-outline"></ion-icon>
                  </a>
                  </div>
                  
                </div>
              ))}
            </div>
            <div className="h-14">

            </div>
         
        </div>
    </div>
  )
}

export default Projects





// function Component() {
//   
  
//   return (
//     <motion.div  style={{ scaleX: scrollYProgress }}/>  
//   )
// }