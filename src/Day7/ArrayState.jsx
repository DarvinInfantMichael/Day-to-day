import { useState } from "react"


const ArrayState = () => {

    const [arr,setArr]=useState("")
    const[val,setVal]=useState([])

    const handleChange=(e)=>{
        setArr(e.target.value)
    }

    const handleAdd =()=>{
        if(arr.trim ()==="") return;

        setVal([...val,arr])
        setArr("")

    }
  return (
    <>
    <div className="border-2 p-5 m-5 rounded-2xl mt-3">
        <div className="flex justify-center items-center flex-col">
            <h1 className="text-2xl font-bold text-blue-600 ">
                The Array Processing Here:
            </h1>
            <input type="text"
                placeholder=" Enter Name"
                value={arr}
                onChange={handleChange} className="border-2 mt-3 rounded text-xl text-red-600 "/>

            <button onClick={handleAdd} className="bg-amber-300 p-3 mt-3 w-30 font-bold  rounded-xl hover:bg-green-500">Add</button>

            <h2 className="mt-3 text-xl font-mono">Users:</h2>

            <ul className="mt-3 text-xl font-bold">
                {val.map((e,i)=>(
                    <li key={i}>{e}</li>
                ))}
            </ul>


        </div>
    </div>
    </>
  )
}

export default ArrayState