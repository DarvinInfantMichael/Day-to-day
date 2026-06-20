import { useState } from "react"

function SalaryUpdate ()  {

    const[salary,setSalary]=useState(25000);

  return (
    <>
    <div className="border-2 w-100 rounded-2xl m-5">
        <div className="flex justify-center items-center flex-col">
            <h1 className="text-2xl text-blue-500 font-bold">This is the SalaryUpdate Process</h1>
            <h1>{salary}</h1>
            <button onClick={()=>{setSalary(salary+5000)}} className="bg-amber-400 text-black font-bold p-3 rounded-2xl mt-3 text-xl">Increase Salary by Month</button>
        </div>
    </div></>
  )
}

export default SalaryUpdate