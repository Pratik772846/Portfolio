import React from 'react'

const Navbar = () => {
  return (
    < div className='w-full h-1/5 flex relative '>
       <nav className='text-6xl flex-none absolute left-8 my-8'>
          Pratik
        </nav>
        <div className='flex flex-row text-2xl flex-none absolute right-8 my-10' >
          <div className='flex-none flex '>
              <button className='w-40 hover:text-5xl hover:text-blue-600 '>Home</button>
          </div>
          <div className='flex flex-none '>
              <button className='w-40 hover:text-5xl hover:text-blue-600'>Projects</button>
          </div>
          <div className='flex flex-none'>
              <button className='w-40 hover:text-5xl hover:text-blue-600'>About</button>
          </div>
          <div className='flex flex-none'>
              <button className='w-40 hover:text-5xl hover:text-blue-600'>Contact</button>
          </div>
        </div>
      
    </div>
    
  )
}

export default Navbar
