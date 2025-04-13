import React, { useState } from "react";

export default function Practice() {
    const [home, setHome] = useState("Home");
    //   const [about, setAbout] = useState(false);

    const homeSec = () => {
        return (<div className=" text-white p-4 rounded border ">
            This is the Home section.
        </div>)
    }
    const aboutSec = () => {
        return (<div className="bg-purple-500 text-white p-4 rounded">
            This is the About section.
        </div>)
    }

    const data = [
        {
            title: "Home",
            content: homeSec(),
        },
        {
            title: "About",
            content: aboutSec()

        }
    ];

    return (
        //This is simple method -->
        // <div className=" p-6">
        //   <div className="flex gap-4 mb-10">
        //     <button
        //       className="bg-green-500 text-slate-900 py-1.5 px-3 rounded-lg cursor-pointer hover:bg-green-600"
        //       onClick={() => {
        //         setHome(!home);
        //         setAbout(false);
        //       }}
        //     >
        //       Home
        //     </button>
        //     <button
        //       className="bg-green-500 text-slate-900 py-1.5 px-3 rounded-lg cursor-pointer hover:bg-green-600"
        //       onClick={() => {
        //         setAbout(!about);
        //         setHome(false);
        //       }}
        //     >
        //       About
        //     </button>
        //   </div>
        //   {home && (
        //     <div className="h-[30vh] border flex items-center justify-center">
        //       home
        //     </div>
        //   )}
        //   {about && (
        //     <div className="h-[30vh] border flex items-center justify-center">
        //       about
        //     </div>
        //   )}
        // </div>

        //  this is new method -->
        <div className="p-4">
            <div className="flex gap-4">
                {data.map((d) => (
                    <button className="bg-green-500 text-slate-900 py-1.5 px-3 rounded-lg cursor-pointer hover:bg-green-600"
                        onClick={() => setHome(d.title)}
                        key={d.title} >{d.title}</button>

                ))}
            </div>
            <div className="flex gap-4">
                {data.map((d) => (
                    home === d.title &&
                    <div
                        key={d.title}
                        className="text-white border rounded-lg p-2 flex "
                    >
                        <div className="h-[30vh] w-fit">{d.content}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
