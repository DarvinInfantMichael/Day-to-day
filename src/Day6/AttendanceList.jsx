import { useState } from "react"

function AttendanceList  ()  {

    const[present,setPresent]=useState(0);
  return (
    <>
    <div className="border-2 rounded-2xl shadow-2xl p-5 m-5 w-100">
        <div className="flex justify-center items-center flex-col">
            <h1 className="text-blue-600 text-2xl font-bold">Attendance Process </h1>

            <h1 className="font-mono text-xl mt-4">Present Count:{present}</h1>

            <button onClick={()=>{setPresent(present+1)}} className="bg-green-600 border-2 rounded-2xl p-3 mt-3 w-30 text-xl font-bold text-amber-50">Present</button>

            <h1 className="bg-black text-white p-5 rounded-2xl mt-3 text-xl font-bold">No.Present Count : {present}</h1>
            
            </div></div></>
  )
}

export default AttendanceList