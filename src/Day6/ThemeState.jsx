import { useState } from "react"

function ThemeState () {
     
    const[tem,setTem]=useState(false);

    let top=()=>{
        setTem(!tem);
    }
  return (
    <>
    <div className="border-2 w-100 rounded-2xl m-5">
        <div style={{backgroundColor :tem ?"black":"white",
            color:tem?"white":"black",
        
        }} className="flex justify-center items-center flex-col">
            <h1 className="text-2xl text-blue-500 font-bold">Here is Theme Processing....</h1>
            <h1 className="rounded-2xl text-xl font-bold mt-3">{tem?"DarkMode":"LightMode"}</h1>
            <button onClick={top} className="bg-amber-400 text-black font-bold p-3 rounded-2xl mt-3 text-xl">Toggle Theme</button>
        </div>
    </div></>
  )
}

export default ThemeState