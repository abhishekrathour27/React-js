import React from 'react'

const Navbar = () => {
  return (
   <nav className='flex items-center justify-around '>
    <ul className='flex gap-8 pl-3 h-15 items-center w-1/2 cursor-pointer'>
      <li className='font-bold'>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>Help</li>
    </ul>
    <div className='space-x-1'>
      <input type="Search" placeholder='Search here' className='border px-7 py-1.5 rounded-lg outline-0' />
      <button className='bg-green-500 text-slate-900 py-1.5 px-3 rounded-lg cursor-pointer hover:bg-green-600'>Search</button>
      
    </div>
   </nav>
  )
}


export default Navbar
