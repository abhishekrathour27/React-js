import { useState } from 'react'
import './App.css'
import ChangeColor from './components/ChangeColor'

function App() {


  const randomColor = () => {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)]
    }
    return color
  }

  const setColor = ()=>{
    
    document.body.style.backgroundColor = randomColor();
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <ChangeColor changeColor={setColor} />
    </div>
  )


  // return(
  //   <div>
  //     {isLoggedIn ? <LogoutBtn/> : <LoginBtn/>}
  //   </div>
  // )

  //  if (isLoggedIn) {
  //    return(
  //     <LogoutBtn/>
  //    ) 
  //  }
  //  else{
  //   return(
  //     <LoginBtn/>
  //   )
  //  }

}

export default App
