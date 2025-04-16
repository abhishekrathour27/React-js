import React, { useState } from 'react'

export default function Form(props) {

  const handleOnChange = (e) => {
    setText(e.target.value)
  }
  const handleOnClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleClear = () =>{
    setText('')
  }
  const [text, setText] = useState('')

  return (

    <div className='ml-12 space-y-1 flex items-center justify-center'>
      <div className='space-y-3'>
        <h1>{props.heading}</h1>
        <div className='h-[20vh] w-[50vw] border '>
          <textarea rows='8' value={text} onChange={handleOnChange} className='outline-0 w-full pl-1' placeholder='Start Writing Here'></textarea>
        </div>
        <button className='bg-green-500 w-fit text-slate-900 py-1.5 px-3 rounded-lg cursor-pointer hover:bg-green-600'
          onClick={handleOnClick}  >upperCase</button>
        <button className='bg-green-500 w-fit mx-5 text-slate-900 py-1.5 px-3 rounded-lg cursor-pointer hover:bg-green-600'
          onClick={handleLowClick}  >lowerCase</button>
        <button className='bg-green-500 w-fit mx-3 text-slate-900 py-1.5 px-3 rounded-lg cursor-pointer hover:bg-green-600'
          onClick={handleClear} >Clear</button>
        <div className="cont">
          <h1 className='text-4xl'>Your Text Summary</h1>
          <p> {text.split(' ').length-1} words and {text.length} characters</p>
        </div>
      </div>
    </div>

  )
}
