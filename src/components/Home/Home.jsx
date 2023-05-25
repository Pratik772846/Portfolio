import React from 'react'
import Navbar from "../Navbar/Nav";
// import {motion} from "framer-motion";
import lc from "../../assets/leetcode.png";
// import useTypewriter from "react-typewriter-hook";
import ik from "../../assets/Pratik.jpg";
import resume from "../../assets/Pratik.pdf";

const MagicOcean = [
  // "Yo, did you see that?",
  // "Fine, I' ll show you again.",
  // "事不过三，bye."
  "Pratik Kumar.",
  "Pratik Kumar.",
  "Pratik Kumar."
];
let index = 0;

const Home = () => {

  const [magicName, setMagicName] = React.useState("Pratik Kumar.");
  const intervalRef = React.useRef({});
  // const name = useTypewriter(magicName);
  React.useEffect(
    () => {
      intervalRef.current = setInterval(() => {
        // index = index + 1 > 2 ? 0 : ++index + 1;
        index = index > 2 ? 0 : ++index;
        setMagicName(MagicOcean[index]);
      }, 3500);
      return function clear() {
        clearInterval(intervalRef.current);
      };
    },
    [magicName]
  );

  return (
    <div className='h-screen'>
      
      <Navbar />
      <div className="flex flex-col justify-center items-center gap-10  bg-slate-700  ">
        <div 
          className="text-center  w-full md:w-2/3 lg:w-1/3  h-2/3 bg-slate-900 rounded-lg flex flex-col justify-center items-center mt-24"
          >
            <img 
            className='mt-5 w-52 h-60 rounded-full'
            src={ik}
            alt="Profile Img" />

          <div 
            className='  h-28 text-white font-bold text-5xl mt-5 pt-8'>
              <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>
                Pratik Kumar
              </span>
          </div>
          <div 
            className='bg-slate-900 h-14 mt-5 flex flex-row justify-center items-center space-x-4'
            >
                <a href="https://github.com/Pratik772846" className='text-5xl text-orange-500'>
                 <ion-icon name='logo-github'></ion-icon>
                </a>
                <a href="https://www.linkedin.com/in/pratik-singh-828a36217/" className='text-5xl text-orange-500'>
                  <ion-icon name='logo-linkedin'></ion-icon>
                </a>
                <a href="https://leetcode.com/__ragnar" className='text-5xl w-12 text-slate-900 '>
                  <img src={lc} alt="logo-leetcode" className=''/>
                </a>

          </div>
          <div className='text-zinc-200 text-lg md:text-lg lg:text-2xl font-bold h-36 mt-10 pt-10'>
              Hi I'm Pratik , a creative web developer
              <br/> 
              who loves to craft stunning websites. 
              {/* <br/> */}
              
              
          </div>
        </div>

        <div className='flex flex-row justify-center justify-items-center gap-10 bg-slate-700 text-orange-400' >
          {/* <span>Hire me</span> */}
          <a href="/contact" className=' text-center text-3xl md:text-5xl lg:text-5xl bg-slate-900 h-14 w-48 md:w-52 lg:w-52  rounded-2xl  pt-1'> 
              Hire Me         
          </a>
          <a href={resume} download className='text-center text-3xl md:text-5xl lg:text-5xl bg-slate-900 h-14 w-1/2 md:w-52 lg:w-52   rounded-2xl  pt-1'>
             Resume
          </a>
        </div>
      </div>
      <div className='bg-slate-700 h-20'>

      </div>

      

    </div>
  )
}

export default Home
