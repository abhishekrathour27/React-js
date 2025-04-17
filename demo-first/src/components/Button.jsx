import React from 'react'

export default function Button(props) {
    return (
        <div className='ml-5'>
            <button onClick={props.handleCount} className='bg-green-500 text-slate-900 py-1.5 px-3 rounded-lg cursor-pointer hover:bg-green-600 mt-6 '>
                {props.children}
            </button>
            <p>{props.count}</p>
        </div>

    )
}
