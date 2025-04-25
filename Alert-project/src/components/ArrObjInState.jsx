import React, { useState } from 'react'

export default function ArrObjInState() {

    const [cars , setCars] = useState([]);
    const [year , setYear] = useState('2023');
    const [model , setModel] = useState([]);
    const [name , setName] = useState([]);
     


    return (
        <div className=' mt-5 text-blue-500 space-y-3 flex flex-col items-center'>

            <h1 className='text-4xl text-blue-500 font-bold'>Cars list</h1>
            <ul>

            </ul>

            <input type="number" value={year} className='border py-1.5 px-3 rounded-lg w-96 outline-0' />
            <input type="text" id='add' placeholder='Enter your Food' className='border py-1.5 px-3 rounded-lg w-96 outline-0' />
            <button className='bg-blue-600 h-fit text-white px-3 py-1.5 rounded-lg cursor-pointer hover:bg-blue-700 w-fit'
            >AddToList</button>

        </div>
    )
}
