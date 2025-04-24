import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [mode, setMode] = useState({
    backgroundColor : 'white',
    color : 'black'
  })

  const [show , setShow] = useState(false)

  const showMenu = ()=>{
    setShow(!show)
  }

  return (
   <div style={mode} >
     <Navbar showMenu={showMenu} show={show} setShow={setShow}/>
   </div>
  )
}

export default App
