import React from "react";
// import PropTypes from 'prop-types';


export default function PropsNav(props) {
  return (
    <div>
      <nav className="flex items-center justify-around text-green-500 bg-slate-900  border-b-2">
        <ul className="flex gap-8 pl-3 h-15 items-center w-1/2 cursor-pointer">
          <li>{props.title}</li>
          <li>{props.aboutText}</li>
          <li>Contact</li>
          <li>Help</li>
        </ul>
        <div className="space-x-1">
          <input
            type="Search"
            placeholder="Search here"
            className="border px-7 py-1.5 rounded-lg outline-0"
          />
          <button className="bg-green-500 text-slate-900 py-1.5 px-3 rounded-lg cursor-pointer hover:bg-green-600">
            Search
          </button>
          <button className='bg-green-500 text-slate-900 px-4 py-2 rounded hover:bg-green-600 transition'
            onClick={props.toggleMode}>{props.btnText}</button>
        </div>
      </nav>
    </div>
  );
}


