import React from 'react'

const Navbar = () => {
  return (
    // <>
    // < div className=' w-full h-1/5 flex relative '>
    //    <div className='text-6xl flex-none absolute left-8 my-8'>
    //       Pratik
    //     </div>
    //     <div className='flex flex-row text-2xl flex-none absolute right-8 my-10' >
    //       <div className='flex-none flex '>
    //           <button className='w-40 hover:text-5xl hover:text-blue-600 '>Home</button>
    //       </div>
    //       <div className='flex flex-none '>
    //           <button className='w-40 hover:text-5xl hover:text-blue-600'>Projects</button>
    //       </div>
    //       <div className='flex flex-none'>
    //           <button className='w-40 hover:text-5xl hover:text-blue-600'>About</button>
    //       </div>
    //       <div className='flex flex-none'>
    //           <button className='w-40 hover:text-5xl hover:text-blue-600'>Contact</button>
    //       </div>
    //     </div>
      
    // </div>
    
    // <div className='md:hidden'>
    //   hhjkjdf

    // </div>
    // </>
    <nav className="flex items-center justify-between bg-gray-800 py-4 px-6 sm:px-10">
      <div className="flex items-center">
        <img className="h-8 w-8" src="/logo.png" alt="Logo" />
      </div>
      <div className="hidden sm:flex sm:items-center sm:space-x-4">
        <a href="/" className="text-white hover:text-gray-300">Link 1</a>
        <a href="/" className="text-white hover:text-gray-300">Link 2</a>
        <a href="/" className="text-white hover:text-gray-300">Link 3</a>
        <a href="/" className="text-white hover:text-gray-300">Link 4</a>
      </div>
    </nav>

  )
}

export default Navbar
