import React, { useState } from 'react'

export default function Form(props) {
    const [text , setText] = useState()

  const handleOnChange = (e)=>{
    setText(e.target.value)
  }
  const handleOnClick =()=>{
    let newText = text.toUpperCase();
    setText(newText);
  }

  return (
    
    <div className='ml-12 space-y-1'>
      <h1>{props.heading}</h1>
      <div className='h-[20vh] w-[50vw] border '>
        <textarea rows='8' value={text} onChange={handleOnChange} className='outline-0 w-full pl-1' placeholder='Start Writing Here'></textarea>
      </div>
      <button className='bg-green-500 w-fit text-slate-900 py-1.5 px-3 rounded-lg cursor-pointer hover:bg-green-600'
      onClick={handleOnClick}  >upperCase</button>
    </div>
  )
}
