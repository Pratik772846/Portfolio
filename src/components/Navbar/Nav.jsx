import React, { useState } from 'react'
import "./Nav.css";
import { Link } from 'react-router-dom'


const Nav = () => {
    let Links =[
      {name:"HOME",link:"/"},
      {name:"PROJETS",link:"/projects"},
      {name:"ABOUT",link:"/about"},
      // {name:"EXP",link:"/"},
      {name:"CONTACT",link:"/contact"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className=' w-full sticky top-0 left-0 '>
      <div className='md:flex items-center justify-between bg-slate-700 py-4 md:px-10 px-7'>
      <div className=' text-2xl cursor-pointer flex items-center '>
        <span className='text-5xl text-orange-500 mr-1 pt-2'>
        <ion-icon name="skull"></ion-icon>
        </span>
        <span className='name text-5xl text-white'>
                Pratik
        </span> 
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-slate-700 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7 '>
              <Link to={link.link} className='text-white hover:text-gray-400 duration-500'>{link.name}</Link>
            </li>
          ))
        }
      </ul>
      </div>
    </div>
  )
}

export default Nav