import { useState } from "react"

function StudentNameUpdate () {

    const [name,setName]=useState("Dim");

    let change=()=>{
        setName("Darvin Infant Michael L")
    }
  return (
    <>
    <div className="border-2 w-100 rounded-2xl m-5">

        <div className="flex justify-center items-center flex-col"> 
            <h1 className="text-2xl text-blue-500 font-bold">Student Name Update Task Here:</h1>
            <h1>{name}</h1>

            <button onClick={change} className="bg-amber-400 text-black font-bold p-3 rounded-2xl mt-3 text-xl">Click Here to Change Name</button>
        </div>

    </div>
    </>
  )
}

export default StudentNameUpdate