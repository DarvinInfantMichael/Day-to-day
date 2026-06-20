import { useState } from "react"

function ProfileShow  ()  {

    const[provi,setProvi]=useState(false);

    let pass=()=>{
        setProvi(true);
    }


  return (
    <>
    <div className="border-2 w-100 rounded-2xl m-5">
        <div className="flex justify-center items-center flex-col">
            <h1 className="text-2xl font-bold text-blue-600 mt-3">
                Profile Visit
            </h1>
            <button onClick={pass} className="text-xl font-bold bg-amber-300 p-3 rounded-2xl mt-3">Show Profile</button>
            <h1 className="mt-3">{provi &&(
                <div className="text-xl  font-bold mt-3">
                    <h1>Name:"Darvin"</h1>
                    <h1>Age:"21"</h1>
                    <h1>City:"Chennai"</h1>
                </div>
            )}</h1>
        </div>
    </div>
    </>
  )
}

export default ProfileShow