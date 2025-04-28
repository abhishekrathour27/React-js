import React, { useState } from 'react'
import ToDoList from './ToDoList';

export default function ArrObjInState() {

    const [cars, setCars] = useState([]);
    const [year, setYear] = useState('2023');
    const [model, setModel] = useState('');
    const [name, setName] = useState('');

    const toggleCars = () => {
        // console.log('object')
        const newCars = {
            carYear: year,
            carName: name,
            carModel: model
        }

        setCars([...cars, newCars])
        setYear('2020');
        setName('')
        setModel('')

    }

    const changeYear = (e) => {
        setYear(e.target.value)
    }
    const toggleName = (e) => {
        setName(e.target.value);
    }
    const toggleModel = (e) => {
        setModel(e.target.value);
    }



    return (
        <>
            <div className=' mt-5 text-blue-500 space-y-3 flex flex-col items-center'>
                <h1 className='text-4xl text-blue-500 '>This is Contact page</h1>


                <h1 className='text-4xl text-blue-500 font-bold'>Cars list</h1>
                <ul>
                    {cars.map((car, i) => (
                        <li key={i}>
                            {car.carYear} - {car.carName} - {car.carModel}
                        </li>
                    ))}
                </ul>


                <input type="number" value={year} className='border py-1.5 px-3 rounded-lg w-96 outline-0' onChange={changeYear} />
                <input type="text" value={name} placeholder='Enter Car Name' className='border py-1.5 px-3 rounded-lg w-96 outline-0' onChange={toggleName} />
                <input type="text" value={model} placeholder='Enter Car Model' className='border py-1.5 px-3 rounded-lg w-96 outline-0' onChange={toggleModel} />
                <button className='bg-blue-600 h-fit text-white px-3 py-1.5 rounded-lg cursor-pointer hover:bg-blue-700 w-fit'
                    onClick={toggleCars}>AddToList</button>

                <ToDoList />
            </div>
        </>
    )
}
