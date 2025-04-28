import { Delete } from 'lucide-react';
import React, { useState } from 'react'

export default function ToDoList() {

  const [list, setList] = useState([]);

  const ToggleText = () => {
    const newList = document.getElementById('input').value;
    document.getElementById('input').value = '';
    setList([...list, newList]);
  }
  const ToggleDelete = (index) => {
    console.log('object')
    const delList = list.filter((item, i) => index !== i)
    setList(delList);
  }

  return (
    <div className='space-y-2 text-center'>
      <h1 className='text-4xl font-semibold'>This is To-Do-List </h1>
      <input type="text" id='input' className='border py-1.5 px-3 rounded-lg w-96 outline-0' /> <br />
      <button className='bg-blue-600 h-fit text-white px-3 py-1.5 rounded-lg cursor-pointer hover:bg-blue-700 w-full '
        onClick={ToggleText}>Add</button>
      <ol className=' text-center mt-2  text-2xl font-semibold  '>
        {list.map((item, index) => (<div className='flex justify-between '>
          <li key={index} className='border bg-blue-500 text-white rounded-lg px-5'>
            {item} </li> <Delete onClick={() => ToggleDelete(index)} />
        </div>))}

      </ol>
    </div>
  )
}
