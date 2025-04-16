import React, { useState } from 'react'

export default function DarkMode() {

    const [mode, setMode] = useState({
        backgroundColor: 'slate-900',
        color: 'green-500'
    })
    const [btnText , setBtnText] = useState('light mode')
    const toggleMode = () => {
        if (mode.color == 'green-500') {
            setMode({
                color: 'black',
                backgroundColor: 'white'
            })
          setBtnText("light mode")
        }
        else {
            setMode({
                backgroundColor: 'slate-900',
                color: 'green-500'
            })
            setBtnText("dark mode")

        }
    }

    return (
        <div>
            <button className='bg-green-500 text-slate-500 px-4 py-2 rounded hover:bg-green-600 transition'
                onClick={toggleMode}>{btnText}</button>
        </div>
    )
}
