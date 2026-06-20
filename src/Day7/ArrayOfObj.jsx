import { useState } from "react"

const ArrayOfObj = () => {

    const [input,setInput]=useState({
        name:"",
        email:"",
        password:""
    })

    const[user,setUser]=useState([])

    const handleChange =(e)=>{

        setInput({...input,[e.target.name]:e.target.value});
    }

    const handClick=()=>{
        if(
            input.name.trim()===""||input.email.trim()===""||input.password.trim()===""
        ){return}
    
    setUser([...user,input]);
    setInput({
        name:"",
        email:"",
        password:""
    })}
  return (
    <>
    <div className=" border-2 m-5 rounded-2xl">
        <div className="flex justify-center items-center flex-col">
            <h1 className=" text-2xl text-blue-600 font-bold mt-3 ">
                This is process of the Array Of Object:
            </h1>
            <div className="border-2 mt-3 rounded-2xl p-5 flex justify-center items-center flex-col">
                <div >
                    <label className="m-3">Enter Name :</label>
                    <input type="text"
                        name= "name"
                        placeholder="Enter Name"
                        value={input.name}
                        onChange={handleChange}
                        className="mt-3 border-2 rounded m-3"/>
                        <br></br>
                    <label className="m-3 mt-3">Enter Email :</label>
                    <input type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={input.email}
                    onChange={handleChange} className="border-2 mt-3 rounded m-3"/><br></br>
                    <label className="m-3 mt-3">Enter Password :</label>
                    <input type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={input.password}
                    onChange={handleChange} className="border-2 mt-3 rounded m-3"/><br></br>
                </div>
                    <button onClick={handClick} className=" mt-3 bg-amber-400 p-3 rounded text-white font-bold">Add User</button>
                

                {user.map((e,i)=>(
                    <>
                    <div key={i} className="text-xl font-bold">
                        <h2 >Users{i+1} Data:</h2>
                        <h2 className="font-mono text-xl text-green-600">Name:{e.name}</h2>
                    <h2 className="font-mono text-xl text-green-600">Email:{e.email}</h2>
                    <h2  className="font-mono text-xl text-green-600">Password:{e.password}</h2>
                    </div></>
                    


                ))}
                

                
            </div>


        </div>
    </div>
    </>
  )
}

export default ArrayOfObj