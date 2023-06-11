import React from 'react'
import "./Home.css";
import ik from "../../assets/Pratik.jpg";
import resume from "../../assets/Pratik.pdf";
// import {motion} from "framer-motion";
import { Link } from 'react-router-dom';

const MagicOcean = [
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
    <>
      
      {/* <Navbar /> */}
      <div className="flex flex-col justify-center items-center gap-10  bg-slate-700 pt-4">
        <div 
          className="text-center  w-full md:w-2/3 lg:w-1/3  bg-slate-900 rounded-lg flex flex-col justify-center items-center mt-5 pt-10"
          >
            <img 
            className='mt-5 w-56 h-56 rounded-full'
            src={ik}
            alt="Profile Img" />

          <div 
            className='   text-white font-bold text-5xl mt-5 pt-6'>
              <span className='bg-gradient-to-r from-color1  to-color2 text-transparent bg-clip-text font-sans'>
                Pratik Kumar
              </span>
          </div>
          
          <div className='text-zinc-200 text-lg md:text-lg lg:text-2xl font-sans pt-8 '>
              Hi I'm Pratik , a creative web developer
              <br/> 
              who loves to craft stunning websites. 
              {/* <br/> */}
              
              
          </div>

          <div className='flex flex-row justify-center justify-items-center gap-10  text-white pt-8' >
              <Link to="/contact" className=' text-center text-3xl md:text-3xl lg:text-3xl bg-gradient-to-r from-color1  to-color2  h-14 w-48 md:w-52 lg:w-52 rounded p-1 '> 
                  <div className='h-full w-full bg-slate-900 pt-1'>
                    Hire Me         
                  </div>
                  
              </Link>
              <a href={resume} download className=' resume text-center text-3xl md:text-3xl lg:text-3xl bg-white h-14 w-1/2 md:w-52 lg:w-52   rounded pt-2'>
                 Resume
              </a>
          </div>

          <div 
            className='bg-slate-900  mt-5 flex flex-row justify-around items-center space-x-4 pt-4 mb-12'
          >
              <a href="https://github.com/Pratik772846" className='text-5xl text-white'>
               <ion-icon name='logo-github'></ion-icon>
              </a>
              <a href="https://www.linkedin.com/in/pratik-singh-828a36217/" className='text-5xl text-white'>
                <ion-icon name='logo-linkedin'></ion-icon>
              </a>
              <a href="https://leetcode.com/__ragnar" className='text-5xl w-10  text-slate-900 '>
                <img src="https://res.cloudinary.com/dv8zwrzop/image/upload/v1685335803/lc_nua2lq.png" alt="logo-leetcode" className='rounded'/>
              </a>

          </div>
        </div>

        
      </div>
      <div className='bg-slate-700 h-20'>

      </div>

      

    </>
  )
}

export default Home
