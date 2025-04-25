import React from 'react'
import { AlignJustify, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {

  const [show, setShow] = useState(false)

  const showMenu = () => {
    setShow(!show)
  }

  return (
    <div className='flex justify-around w-full h-14 items-center bg-blue-200 text-blue-600'>
      <div className='space-x-1'>
        <input type="search" placeholder='search here' className='outline-0 px-3 py-1.5 border border-blue-600 rounded-xl w-[30vw]' />
        <button className='bg-blue-600 h-fit text-white px-3 py-1.5 rounded-xl cursor-pointer hover:bg-blue-700'>Search</button>
      </div>
      <div className='flex gap-4 items-center'>
        <AlignJustify color="#3d11df" className='flex cursor-pointer md:hidden' onClick={showMenu} />
        <ul className='hidden md:flex  gap-5'>
          <Link to='/'><li className='cursor-pointer'>Home</li></Link>
          <Link to='/About'><li className='cursor-pointer'>About</li></Link>
          <Link to='/Contact'><li className='cursor-pointer'>Contact</li></Link>
          <li className='cursor-pointer'>Help</li>
        </ul>
      </div>

      {show && (
        <div className='md:hidden fixed top-0  right-0 h-screen w-1/2 bg-white shadow-lg p-5 z-50'>
          <ul className='space-y-4 relative text-blue-600'>
            <Link to='/'><li className='cursor-pointer' onClick={() => setShow(false)}>Home</li></Link>
            <Link to='/About'><li className='cursor-pointer'onClick={() => setShow(false)}>About</li></Link>
            <Link to='/Contact'><li className='cursor-pointer' onClick={() => setShow(false)}>Contact</li></Link>
            <li className='cursor-pointer'>Help</li>
            <X className='absolute right-2 top-0 border p-1 cursor-pointer' onClick={() => setShow(false)} />

          </ul>
        </div>
      )}

    </div>
  )
}
