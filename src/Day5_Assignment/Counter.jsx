import { useState } from "react"

function Counter () {

    const[count,setCount]=useState(0);


  return (
    <div className="border rounded-lg shadow-md p-5 bg-white mt-3">
        <h1 className="text-xl font-bold text-blue-600">Here it the Counter App: through Hereee....</h1>

        <h1>{count}</h1>

        <button onClick={()=>{setCount(count+1)}}>Increament</button>

        <button onClick={()=>{setCount(count-1)}}>Decreament</button>

        <button onClick={()=>{setCount(0)}}>Reset</button>

    </div>
  )
}

export default Counter