import { useState } from "react"

function UserDataLoad  ()  {

    const[data,setData]=useState(null);

    let load =()=>{
        setData({
            name:"Darvin",
            work:"FullStack Developer",
            age:21
        })
    }

  return (
    <>
    <div className="border-2 w-100 rounded-2xl m-5">
        <div className="flex justify-center items-center flex-col">
            <h1 className="text-2xl text-blue-500 font-bold">Here is the UserDataLoad :</h1>

            <button onClick={load} className="bg-amber-400 text-black font-bold p-3 rounded-2xl mt-3 text-xl">Load User Data</button>

            {data&&
            <div>
                <h1>Name:{data.name}</h1>
                <h1>Working:{data.work}</h1>
                <h1>Age:{data.age}</h1>
                </div>}

        </div>
    </div>
    </>
  )
}

export default UserDataLoad