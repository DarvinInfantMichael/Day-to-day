import { useState } from "react"

function LoginStatus  ()  {

    const[log,setLog]=useState(false);

    let toggle =()=>{

        setLog(!log);

    }


  return (
    
    <>
    <div className="border-2 m-5 w-150 rounded-2xl p-5">
        <div className="flex justify-center items-center flex-col">
            <h1 className="text-2xl text-blue-600 font-bold">Here is the Login Status Processing </h1>
            <h2 className="text-xl font-bold bg-black text-white p-5 rounded-2xl mt-3">{log?"You are Logged In" :"You are Logged Out"}</h2>
            <button onClick={toggle} className="bg-black text-xl font-bold text-white rounded-xl mt-3 p-3">{log?"LogOut":"LogIn"}</button>
        </div>
    </div></>
  )
}

export default LoginStatus