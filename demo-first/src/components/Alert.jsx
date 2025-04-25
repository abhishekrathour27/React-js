import React from 'react'
import { useState } from 'react'

export default function Alert(props) {
    return (
        props.show ? <div className={`${props.show?"flex":"hidden"}  justify-between px-3 h-10 items-center bg-slate-800 text-green-500`}>
            <p>{props.alert} Enabled</p>
            <button className='bg-green-500 text-slate-900 py-1.5 px-3 rounded-lg cursor-pointer hover:bg-green-600'
                onClick={() => props.setShow(false)}>X</button>
        </div> : <div className={`${props.show?"flex":"hidden"} justify-between px-3 h-10 items-center bg-slate-800 text-green-500`}>
            <p>{props.alert} Enabled</p>
            <button className='bg-green-500 text-slate-900 py-1.5 px-3 rounded-lg cursor-pointer hover:bg-green-600'
                onClick={() => props.setShow(false)}>X</button>
        </div>
    )
}
