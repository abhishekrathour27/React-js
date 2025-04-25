import React from 'react'
import { useState } from 'react'

export default function About() {

    const [food, setFood] = useState(['Apple ', 'Orange ', 'Banana '])

    const ToggleFood = () => {
        let newFood = document.getElementById('add').value;
        document.getElementById('add').value = newFood;
        document.getElementById('add').value = '';
        setFood([...food, newFood])
    }
    return (
        <div className=' mt-5 text-blue-500 space-y-3 flex flex-col items-center'>
            <h1 className='text-4xl text-blue-500 '>This is About page</h1>

            <h1 className='text-4xl text-blue-500'>Food list</h1>
            <ul>
                {food.map((f, i) => <li key={i}>{f}</li>)}
            </ul>


            <input type="text" id='add' placeholder='Enter your Food' className='border py-1.5 px-3 rounded-lg w-96 outline-0'/>
            <button className='bg-blue-600 h-fit text-white px-3 py-1.5 rounded-lg cursor-pointer hover:bg-blue-700 w-fit'
                onClick={ToggleFood}>AddToList</button>

        </div>
    )
}
