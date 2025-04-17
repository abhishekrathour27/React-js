// import React, { useState } from 'react'

// export default function DarkMode() {

//     const [mode, setMode] = useState({
//         backgroundColor: 'white',
//         color: 'black'
//     })
//     const [btnText, setBtnText] = useState('dark mode')
//     const toggleMode = () => {
//         if (mode.color == 'black') {
//             setMode({
//                 color: 'white',
//                 backgroundColor: 'black'
//             })
//             setBtnText("light mode")
//         }
//         else {
//             setMode({
//                 backgroundColor: 'white',
//                 color: 'black'
//             })
//             setBtnText("dark mode")

//         }
//     }

//     return (
//         <>
//             <div className='border w-1/2'>
//                 <p style={mode}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic distinctio nobis atque omnis minima cupiditate harum, rerum enim consequatur dicta maiores id, eum nisi commodi voluptates blanditiis sint reiciendis excepturi explicabo vitae error architecto cumque! Pariatur sint quod deleniti. Rem sapiente dolores ducimus debitis, corrupti adipisci eveniet reprehenderit, rerum harum facere quasi, maxime animi. Velit esse modi quam aspernatur ipsa, debitis facilis voluptatum harum sed molestias fuga in ipsam culpa distinctio aliquam eum quaerat magni repudiandae voluptatem libero est aperiam sunt nobis. Nulla placeat adipisci modi beatae? Dolorem est architecto nemo obcaecati veniam perferendis, magni aut, esse reiciendis, sapiente voluptatum!</p>
//             </div>
//             <button className='bg-green-500 text-slate-500 px-4 py-2 rounded hover:bg-green-600 transition'
//                 onClick={toggleMode}>{btnText}</button>
//         </>
//     )
// }
