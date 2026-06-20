import { useState } from "react"

function ShowHide  () {
    const[show,setShow]=useState(true);

    let hide=()=>{
        setShow(!show);
    }
  return (
    <>
    <div className="border-2 w-100 rounded-2xl m-5">
        <div className="flex justify-center items-center flex-col">
            <h1 className="text-2xl text-blue-500 font-bold">This is the Hide/Seek Game:</h1>
            {show&&<p>"You are Inteligent but Actually you are Joker !"</p>}
            <button onClick={hide} className="bg-amber-400 text-black font-bold p-3 rounded-2xl mt-3 text-xl">{show?"Hide":"Show"}</button>
        </div>
    </div></>
  )
}

export default ShowHide