import Navbar from "../Navbar/Nav";
import React from 'react'

const Projects = () => {
  const projects = [
    {name:"Travel Advisor",link:"/"},
    {name:"Travel Advisoryyssdy",link:"/"},
    {name:"Travel Advisor",link:"/"},
  ];
  const minor=[
    {name:"Travel Advisor",link:"/"},
    {name:"Travel Advisoryyssdy",link:"/"},
    {name:"Travel Advisor",link:"/"},
  ];
  return (
    <div className=" flex flex-col  ">
        
        <Navbar/>       
  
        <div className="flex flex-col flex-grow justify-center items-center bg-slate-700 ">
          <h1 className="text-5xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">PROJECTS</h1>

          {projects.map((project)=>(
            <div className=" w-full md:w-2/3 lg:w-1/2  flex flex-col justify-center items-start pt-10 gap-4">
              <span className="text-5xl text-white ">{project.name}</span>
              <div className="flex flex-row justify-center gap-5 md:gap-5 lg:gap-10">
                  <span className=" bg-slate-900 text-md md:text-lg lg:text-lg text-zinc-300 w-1/2 pt-5 justify-center text-center rounded-2xl ">
                      Developed with React, Express, and Cheerio web scraping, 
                      utilizes various APIs to offer extensive travel details and suggestions. 
                      The combination of web scraping and API data ensures comprehensive information, 
                      while React and Express provide a user-friendly interface with responsive design.
                  </span>
                  <div  className="bg-white w-1/2 h-72 rounded-2xl">kgk</div>
              </div>
              <div className="flex flex-row justify-center items-center w-full gap-4 "> 
                <a href="/">Repo</a>
                <a href="/">Live</a>
              </div>
            </div>
          ))}

      <h1 className="text-5xl pt-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">MINOR PROJECTS</h1>

      {minor.map((project)=>(
            <div className=" w-full md:w-2/3 lg:w-1/2  flex flex-col justify-center items-start pt-10 gap-4">
            <span className="text-5xl text-white ">{project.name}</span>
            <div className="flex flex-row justify-center gap-5 md:gap-5 lg:gap-10">
                <span className=" bg-slate-900 text-md md:text-lg lg:text-lg text-zinc-300 w-1/2 pt-5 justify-center text-center rounded-2xl ">
                    Developed with React, Express, and Cheerio web scraping, 
                    utilizes various APIs to offer extensive travel details and suggestions. 
                    The combination of web scraping and API data ensures comprehensive information, 
                    while React and Express provide a user-friendly interface with responsive design.
                </span>
                <div  className="bg-white w-1/2 h-72 rounded-2xl">kgk</div>
            </div>
          </div>
      ))}
         
        </div>
    </div>
  )
}

export default Projects


