import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import ArrObjInState from './components/ArrObjInState'
// import {BrowserRouter} from "react-router-dom"

function App() {

  const [show, setShow] = useState(false)

  const showMenu = () => {
    setShow(!show)
  }

  return (
    
      <div >
        <Navbar showMenu={showMenu} show={show} setShow={setShow} />
        {/* <Home /> */}
        {/* <About/> */}
        <ArrObjInState/>
      </div>
   
  )
}

export default App
