import { useState } from "react"

function UseStates  () {

    const[count ,setCount]=new useState(0);

  return (
    <div className="border rounded-lg shadow-md p-5 bg-white mt-3">
        <h1 className="text-xl font-bold text-blue-600">Here I Using the UseState Syntax :</h1>
        <h2>{count}</h2>
        <button onClick={()=>setCount(count+1)}>Tap To Increase</button>
    </div>
  )
}

export default UseStates