import React from 'react'
import ik from "../../assets/Pratik.jpg";
const About = () => {
  const tech =[
    { 
      id:1,
      name:"ReactJS",
      img:"https://res.cloudinary.com/dv8zwrzop/image/upload/v1685335971/react_yrnrb4.svg",
      style:"shadow-orange-300/60"
    },
    { 
      id:2,
      name:"NodeJS",
      img:"https://res.cloudinary.com/dv8zwrzop/image/upload/v1685337365/nodejs_lsmdbe.svg",
      style:"shadow-color1/60"
    },
    { 
      id:3,
      name:"Express",
      img:"https://res.cloudinary.com/dv8zwrzop/image/upload/v1685338066/pngegg_z6wgho.png",
      style:"shadow-color2/60"
    },
    {
      id:4,
      name:"MongoDB",
      img:"https://res.cloudinary.com/dv8zwrzop/image/upload/v1685335947/mongodb_wobzwn.svg",
      style:"shadow-color1/60"
    },
    {
      id:5,
      name:"NextJS",
      img:"https://res.cloudinary.com/dv8zwrzop/image/upload/v1685335971/react_yrnrb4.svg",
      style:"shadow-color2/60"
    },
    {
      id:6,
      name:"Go",
      img:"https://res.cloudinary.com/dv8zwrzop/image/upload/v1685337325/go_hzepwb.svg",
      style:"shadow-color1/60"
    }
    // {name:"Tailwind CSS",img:"https://res.cloudinary.com/dv8zwrzop/image/upload/v1685338311/images1_qlgi09.jpg"},
   
  ];
  return (
    <div className='flex flex-col  bg-slate-700 items-center'>
       {/* <Navbar/>     */}
        <div className='flex flex-col items-center w-4/5 md:w-2/3 lg:w-2/3 bg-slate-700 gap-7 '>
          <img src={ik} alt="Pratik's Img" className='h-56 w-56 rounded-full mt-5 shadow-2xl hover:scale-125 '/>
          <span className='text-5xl  bg-gradient-to-r from-color1  to-color2 text-transparent bg-clip-text  '>Pratik Kumar</span>

          <div className='flex flex-col items-center text-xl'>
            <span className='font-sans text-white'>
            I am Pratik Kumar, a passionate and dedicated Computer Science and Engineering student
            pursuing my Bachelor of Technology degree at IIITDM Jabalpur. With a CPI of 9.1,
            I have been consistently driven to excel in my academic pursuits. My education has equipped 
            me with a strong foundation in various key areas, including Data Structures, Computer 
            Organization, Computer Networks, DBMS, and Operating Systems.
            I have a broad range of skills that span various programming languages, including C, C++, JavaScript, SQL, 
            JAVA, and Python. Furthermore, I am highly proficient in utilizing frameworks such as ReactJS, NodeJS, 
            ExpressJS, NextJS, and Tailwind CSS. To streamline the development process, I am adept at leveraging tools like GIT, 
            MySQL, MongoDB, Mongoose, Github, Cheerio, Axios, Zustand, and Redux.
            I continuously seek to expand my knowledge and skills in computer science, fueled by a solid academic foundation, a wealth 
            of project experience, and a versatile skill set. I am driven to learn and grow as a professional in this field, always 
            striving for excellence. I enthusiastically embrace new challenges and eagerly contribute to groundbreaking projects that 
            push the boundaries of technology.
            </span>
          </div>

          <span className='text-4xl text-orange-300 text-center'>
            TECHNOLOGY I'M WORKING ON
          </span>
          
          <div className='flex flex-row md:flex-row lg:flex-row 
            flex-wrap md:flex-wrap lg:flex-wrap justify-center items-center gap-5'>
              {tech.map((tech)=>(
                <div className={`flex flex-col justify-center items-center  gap-4 text-2xl font-sans bg-slate-900
                 h-36 w-48 text-white rounded-lg shadow-2xl  ${tech?.style} hover:scale-110`} key={tech?.id}>
                  <img src={tech?.img} alt="Logo" className='bg-slate-900' />
                  <p>{tech?.name}</p>
                  
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
