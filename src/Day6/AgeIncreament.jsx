import { useState } from "react"

function AgeIncreament (){

    const [age,setAge]=useState(18);

  return (
    <>
    <div className="border-2 rounded-2xl shadow-md p-5 m-5 w-100">
        <div className="flex justify-center items-center flex-col">
            <h1 className="font-bold text-2xl text-blue-500">Here Age Increament Process :</h1>
            <h1 className="text-3xl font-bold">{age}</h1>
            <button onClick={()=>{setAge(age+1)}} className="border-2 rounded-2xl bg-red-600 p-3 text-white font-bold">Click to Increase AGE</button>
        </div>

    </div></>
  )
}

export default AgeIncreament