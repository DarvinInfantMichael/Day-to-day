
import { useRef, useState } from "react"
const ToggleProcess = () => {

    const textRef =useRef(null);
    const [indiRef,setIndiRef] =useState(false);

    const HandleChange=()=>{

        setIndiRef(!indiRef)

        if(!indiRef){
            textRef.current.classList.remove("hidden");
        }else{
            textRef.current.classList.add("hidden");
        }
    }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div>Toggle Process</div>
        <button onClick={HandleChange}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">{indiRef?"on":"off"}</button>
        <div>
            <h1 ref={textRef}
            className="hidden mt-6 text-3xl font-bold text-green-600">Hello Darvin Infant Michael </h1>
        </div>
    </div>
  )
}

export default ToggleProcess