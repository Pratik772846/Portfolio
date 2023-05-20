import React from 'react'
import Navbar from "../Navbar/Nav";
import {motion} from "framer-motion";
import lc from "../../assets/leetcode.png";
import useTypewriter from "react-typewriter-hook";
import ik from "../../assets/Pratik.jpg";
// import { random } from "lodash";


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
  const name = useTypewriter(magicName);
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
    
      <div className="flex  justify-center  h-screen bg-slate-700  ">
        <motion.div 
          className="text-center  w-full md:w-2/3 lg:w-1/3 xl-1/3 h-2/3 bg-slate-900 rounded-lg flex flex-col justify-center items-center mt-24"
          >

            {/* <img 
              className='mt-5 w-1/5 h-32 rounded-full'
             src="https://framerusercontent.com/images/b5HcLGiq8nXy29HRuyCjLcs90.svg" 
              alt="Profile Img" /> */}
            <img 
            className='mt-5 w-1/5 h-40 rounded-full'
            src={ik}
            alt="Profile Img" />

          <div 
            className='  h-28 text-white font-bold text-5xl mt-5 pt-8'>
              <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>
                {name}
              </span>
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
                <a href="https://leetcode.com/__ragnar" className='text-5xl w-12 text-slate-900 '>
                  <img src={lc} alt="logo-leetcode" className=''/>
                </a>

          </motion.div>
          <div className='text-white text-2xl font-bold h-36 mt-10 pt-10'>
              {/* <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>
                 Hi I'm Pratik , a creative web developer
              </span> */}
              Hi I'm Pratik , a creative web developer
              
              <br/>
              {/* <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>
                who loves to craft
              </span> */}
              who loves to craft
                
              <br/>
              {/* <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>
                  stunning websites.              
              </span> */}
                stunning websites. 
          </div>
        </motion.div>

        {/* <div className='flex flex-row justify-center bg-white' >
          <span>Hire me</span>
          <span>Resume</span>
        </div> */}
      </div>

      

    </div>
  )
}

export default Home
