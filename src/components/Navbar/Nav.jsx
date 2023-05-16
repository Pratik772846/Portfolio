import React, { useState } from 'react'
// import {motion} from "framer-motion";
// import { Link } from 'react-router-dom'


const Nav = () => {
    let Links =[
      {name:"HOME",link:"/"},
      {name:"PROJETS",link:"/"},
      {name:"ABOUT",link:"/"},
      // {name:"EXP",link:"/"},
      {name:"CONTACT",link:"/"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className=' w-full sticky top-0 left-0 '>
      <div className='md:flex items-center justify-between bg-slate-700 py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        <span className='text-5xl text-violet-600 mr-1 pt-2'>
        <ion-icon name="skull"></ion-icon>
        </span>
        <span className='text-5xl font-bold text-white'>Pratik</span>
        
        
        {/* <motion.div animate={{
            scale: [1, 1, 1, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}>
          Pratik
        </motion.div> */}
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-slate-700 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7 '>
              <a href={link.link} className='text-white hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
      </ul>
      </div>
    </div>
  )
}

export default Nav