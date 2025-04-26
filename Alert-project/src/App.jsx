import React from 'react'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import ArrObjInState from './components/ArrObjInState'
import {  Route, Routes } from 'react-router-dom';

function App() {
  return (
      <div>
        <Routes>
          <Route path='/contact' element={<ArrObjInState />} />
          <Route path='/about' element={<About />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
  )
}

export default App
