import React, { useState } from 'react'

export default function Home() {

    const [car, setCar] = useState({
        name: 'RangeRover',
        model: 'Defander',
        year: '2015'
    })

    const ToggleYear = (event) => {
        setCar({ ...car, year: event.target.value });
    }
    const ToggleModel = (event) => {
        setCar({ ...car, model: event.target.value });
    }
    const ToggleName = (event) => {
        setCar({ ...car, name: event.target.value });
    }

    return (
        <div className='text-blue-500  pt-2 space-y-4 flex flex-col items-center'>
            <h1 className='text-4xl text-blue-500 '>This is Home page</h1>

            <h1 className='text-2xl ' >My Car is : {car.year} , {car.name} , {car.model} </h1>
            <input type="number" value={car.year} className='border py-1.5 px-3 rounded-lg w-96 outline-0' onChange={ToggleYear} />
            <input type="text" value={car.name} placeholder='Enter your Car Name' className='border py-1.5 px-3 rounded-lg w-96 outline-0' onChange={ToggleName}/>
            <input type="text" value={car.model} placeholder='Enter your Car Model' className='border py-1.5 px-3 rounded-lg w-96 outline-0' onChange={ToggleModel} />

        </div>
    )
}
