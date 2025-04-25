import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import ArrObjInState from './components/ArrObjInState'
import { createBrowserRouter , RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: <> <Navbar  /><Home /></>
  },

  {
    path: '/About',
    element: <> <Navbar  /><About /></>
  },
  {
    path: '/Contact',
    element: <> <Navbar /><ArrObjInState /></>
  }

])



function App() {

  

  return (

    <div >
      {/* <Navbar showMenu={showMenu} show={show} setShow={setShow} /> */}
      <RouterProvider router={router}/>
    

    </div>

  )
}

export default App
