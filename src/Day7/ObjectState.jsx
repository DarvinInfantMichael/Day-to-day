import { useState } from "react"


const ObjectState = () => {

    const[user,setUser]=useState(null);
    const [ori,setOri]=useState(null)

    const handleshow =()=>{
        setUser({
            name:"Darvin",
            age:21,
            city:"Chennai"
        })
}


    const handleClick=()=>{
        setUser({...user,city:"Trichy"})}

    const handleOri=()=>{
            setOri({...user})
    }

    const [input,setInput]=useState({
        name:"",
        email:"",
        password:""
    });

    const [user1,setUser1]=useState(null)

    const handleChange=(e)=>{
        setInput({...input,[e.target.name] : e.target.value})
    }

    const hack =()=>{
        setUser1({...input});

    }
  return (
    <>

    <div className="border-2 m-5 rounded-xl p-5">
    <div className="flex justify-center items-center flex-col">

        <h1 className=" text-2xl font-bold text-blue-500 mb-3">This the ObjectState Processing :</h1>


        <div className="font-mono text-xl  p-5 rounded-2xl">
            {user &&(
             <>
            <h3>Name: {user.name}</h3>
            <h3>Age :{user.age}</h3>
            <h3>City:{user.city}</h3>
            </>)}
        </div>
        

        <button onClick={handleshow} className="bg-amber-300 p-3 rounded w-30 mt-3 font-bold text-black text-xl">Show</button>
        <button onClick={handleClick} className="bg-red-600 p-3 mt-3 font-bold text-amber-50 text-xl rounded">Update Change City</button>

        {/* <h3>updated value</h3>
        {user && (<>
        <h3>Name:{user.name}</h3>
        <h3>Age:{user.age}</h3>
        <h3>City:{user.city}</h3>
        </>)} */}

        <button onClick={handleOri} className="bg-green-500 p-3 mt-3 font-bold text-xl text-amber-50 rounded">Now Original Data</button>

        <h3 className="text-xl font-bold mt-3">now data are:</h3>
        <div className=" p-5 font-bold text-xl rounded-2xl  mt-3">
            {ori && (<>
        
        <h3>Name:{ori.name}</h3>
        <h3>Age:{ori.age}</h3>
        <h3>City:{ori.city}</h3></>)}
        </div>
</div>
</div>



<div className="border-2 p-5 m-5 rounded-2xl">
    <div className="flex justify-center items-center flex-col">
        <h1 className="text-2xl font-bold text-blue-500">
            Here i am processing using inputs of the data.
        </h1>

        <label className="bg-black text-white font-bold p-3 mt-3 rounded-2xl">Enter User Name: </label>
        <input type="text"
                name="name"
                placeholder="Enter the Name."
                value={input.name}
                onChange={handleChange} className="mt-3 border-2 p-3 rounded"/>
         <label className="bg-black text-white font-bold p-3 mt-3 rounded-2xl">Enter User Email </label>
        <input type="email"
                name="email"
                placeholder="Enter Email"
                value={input.email}
                onChange={handleChange} className="mt-3 border-2 p-3 rounded"/>
        <label className="bg-black text-white font-bold p-3 mt-3 rounded-2xl">Enter User Password</label>
        <input type="password"
        name="password"
        placeholder="Eneter Password"
        value={input.password}
        onChange={handleChange} className="mt-3 border-2 p-3 rounded"/>

        <button onClick={hack} className="mt-3 bg-red-500 font-bold text-xl text-amber-50 rounded p-3">Show Details..</button>

        <div className=" font-mono text-2xl mt-3">
            {user1 &&(<>
            <h3>Name:{user1.name}</h3>
            <h3>Email:{user1.email}</h3>
            <h3>Password:{user1.password}</h3>
            </>)}
        </div>
        
    </div>
</div>






    </>
  )
}

export default ObjectState