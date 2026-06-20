import { useState } from "react"

function CounterApp (){

const [count,setCount]=new useState(0);


  return (
    <>
    <div className="border-2 rounded-2xl w-100 p-5 m-5">
        <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl text-blue-400 font-bold "> This is the Counter App </h1>
        <h1 className="text-xl font-bold">{count}</h1>
        <button onClick={()=>{setCount(count+1)}} className="bg-green-400 rounded-2xl p-3 mt-3 text-xl font-bold">Increament</button>
        <button onClick={()=>{setCount(count-1)}} className="bg-red-500 rounded-2xl p-3 mt-3 text-xl font-bold" >Decreament</button>
        <button onClick={()=>{setCount(0)}} className="bg-amber-300 rounded-2xl px-10 py-3 mt-3 text-xl font-bold">Reset</button>
        </div>
    </div>
    </>
  )
}

export default CounterApp