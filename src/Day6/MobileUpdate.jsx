import { useState } from "react"

function  MobileUpdate  ()  {

    const [mobi,setMobi]=useState(null);

    let number=()=>{
        setMobi(9876543210);
    }
  return (
    <>
    <div className="border-2 m-5 rounded-2xl w-150 p-5">
        <div className="flex justify-center items-center flex-col ">
            <h1 className="text-blue-600 font-bold text-2xl">This Is the Process of MobileNumber:</h1>
            <h1 className="bg-black text-xl font-bold text-white p-3 mt-3 rounded-2xl">{mobi}</h1>
            <button onClick={number} className="bg-red-600 p-3 mt-3 rounded-2xl text-xl text-white font-bold">{mobi?"Call Me Now :)":"Display No."}</button>
        </div>
        </div></>
  )
}

export default MobileUpdate