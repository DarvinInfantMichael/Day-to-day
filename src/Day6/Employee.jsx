import { useState } from "react"

function  Employee  ()  {

    const[active,setActive]=useState(false);

    let user=()=>{
        setActive(!active)
    }
  return (
    <>
    <div className="border-2 rounded-2xl shadow-md p-5 m-5 w-100 ">
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-cyan-700 text-2xl font-bold mt-3 ">Process of Employee Status</h1>
            <h1 className="text-green-400 text-xl font-bold mt-3">Employee Status Now:{active?" Offline":" Active"}</h1>
            <h1 onClick={user} className="font-bold text-xl mt-3 bg-red-600 p-3 rounded-2xl text-white">{active?"He is Offline Now":"He is Active Now"} </h1>
            </div>
        </div>
    </>
  )
}

export default Employee