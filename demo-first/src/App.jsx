
import React, { useState } from 'react'
import './App.css'
// import Navbar from './components/Navbar'
import PropsNav from './components/PropsNav';
import State from './components/State';
import Form from './components/form';
import Know from './components/Know';
import ChildrenProps from './components/ChildrenProps';
import Button from './components/Button';



const App = () => {
  const [count, setCount] = useState(0);
  const [randi, setRandi] = useState(false); 
  const [mode, setMode] = useState({
    backgroundColor: 'white',
    color: 'black'
  })
  const [btnText, setBtnText] = useState('dark mode')

  const [increment , setIncrement] = useState(0);

  const handleCount = ()=>{
     setIncrement(increment+1);
  }

  const toggleMode = () => {
    if (mode.color == 'black') {
      setMode({
        color: 'white',
        backgroundColor: 'black'
      })
      setBtnText("light mode")
    }
    else {
      setMode({
        backgroundColor: 'white',
        color: 'black'
      })
      setBtnText("dark mode")

    }


  }
  const data2 = <div className='bg-white text-black h-32 w-1/2 rounded-lg mt-5'>
    <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique quaerat beatae aspernatur molestias natus facilis, velit qui libero nobis provident, tenetur quis? Quasi, dignissimos minima ab facilis harum alias tempore!</h1>
  </div>
  return (
    <div className=' h-fit pb-5' style={mode} >
     
      <PropsNav toggleMode={toggleMode}  btnText={btnText} title='NewHome' aboutText='AboutUs' />
      <div className='bg-green flex gap-4 p-4 items-center'>
        <button className='bg-green-500 text-slate-900 py-1.5 px-3 rounded-lg cursor-pointer hover:bg-green-600'
          onClick={() => {
            if (count > 0) {
              setCount(count - 1)
            } 
          }}>Decrese</button>
        <p>{count}</p>
        <button className='bg-green-500 text-slate-900 py-1.5 px-3 rounded-lg cursor-pointer hover:bg-green-600' onClick={() => { setCount(count + 1) }}>Increase</button>
      </div>
      <button className='bg-green-500 text-slate-900 py-1.5 px-3 rounded-lg cursor-pointer hover:bg-green-600' onClick={() => { setRandi(!randi) }}>CLick me</button>
      {randi && data2}
      <State  />
      <Form heading='This is form where a button use to convert text into upper case' />
      <Know />
      <ChildrenProps name='children'>
        <h1>This is ChildrenProps</h1>
        <p>Currently i am learning React-js</p>
      </ChildrenProps>
      <Button handleCount={handleCount} count={increment}>
        Click me
        
      </Button>
      
    </div>
  )
}

export default App
