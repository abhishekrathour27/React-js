import React from 'react'

export default function ChangeColor({changeColor}) {
  return (
    <button className='border py-1 px-2'
     onClick={changeColor}
     >click me</button>
  )
}
