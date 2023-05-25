import React from 'react'
import Navbar from "../Navbar/Nav";
const Contact = () => {
  return (
    <div className='flex flex-col items-center'>
        <Navbar/>
        <div className='bg-slate-700 text-zinc-300 w-full h-full'>
        <div name = 'contact' className='relative flex flex-col text-center  mx-auto   px-10 sm:bg-[#f6f5f5]'>
      <div className='flex flex-col p-4 pt-8 md:w-[40%] justify-center max-w-screen mx-auto h-full'>
      <div className='pb-8 mt-8'>
        <h3 className='uppercase text-orange-500 text-5xl tracking-[20px] mt-6'>Contact </h3>
        <p className='pt-6  text-slate-800 '>Submit the form below to get in touch with me</p>
        <p className='pt-6  text-slate-800 '>Expect a reply within 24 hours.</p>
    </div>


    <div className='flex justify-center items-center'>
        <form action='https://getform.io/f/a5328eb2-c3ef-4826-842f-911e5eec2c2d' method='POST' className='flex flex-col w-full'>
            <input type="text" name = "name" placeholder = "Enter your name" className = "p-2 border-2 rounded-md focus:outline-none focus:outline-[#F7AB0A] text-orange-500 " required></input>
            <input type="email" name = "email" placeholder = "Enter your email" className = " my-4 p-2 border-2 rounded-md focus:outline-[#F7AB0A] text-orange-500" required></input>
            <textarea name='message' rows='10' placeholder='Enter your message' className='p-2  border-2 rounded-md focus:outline-[#F7AB0A] text-orange-500'></textarea>

            <div className='items-center'>
            <button className='group text-slate-800 w-fit px-6 py-3 my-6 flex items-center rounded-md bg-gradient-to-r from-orange-300 to-orange-500 cursor-pointer mx-auto hover:scale-110 duration-300' ><b className='text-xl'>Let's connect</b></button>
            </div>
            
        </form>
    </div>
      </div>

    </div>
        </div>
    </div>
  )
}

export default Contact


// import React from 'react'

// const Contact = () => {
//   return (
    
//   )
// }

// export default Contact