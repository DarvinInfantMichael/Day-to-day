import { useState } from "react"
import Show from "./Show";

const RegistrationSystem = () => {

    const[userinput,setUserinput]=useState({userName:"",userAge:"",userCity:""});
    const[savedata,setSavedata]=useState([])


    const HandleEvent =(e)=>{
        setUserinput({...userinput,[e.target.name]:e.target.value})
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        setSavedata((prev)=>[...prev,userinput]);

        setUserinput({userName:"",userAge:"",userCity:""});
        
    }

    const HandleEdit =(e)=>{

        setUserinput(e);

    }

    const HandleDelete=(id)=>{

        setSavedata(savedata.filter((_,i)=>i!==id))

    }



  return (
    <div className=" flex justify-center items-center mt-50 flex-col p-10 mx-100 rounded-2xl bg-blue-500">
        <h1 className="text-2xl font-bold mt-3 p-3 text-white">Registration form</h1>
        <form onSubmit={handleSubmit}>
            <table className="mt-3 mx-5">
                <tbody>
                    <tr>
                        <td>
                            <label className="mt-3 text-xl text-white font-bold">Enter Name:</label>
                        </td>
                        <td>
                            <input type="text"
                            placeholder="Enter the Name..."
                            value={userinput.userName}
                            name="userName"
                            onChange={HandleEvent} className="mx-4 bg-amber-100 rounded text-xl font-mono"/>
                        </td>
                    </tr>
                    <br></br>

                     <tr>
                        <td>
                            <label className="mt-5 text-xl text-white font-bold">Enter Age:</label>
                        </td>
                        <td>
                            <input type="text"
                            placeholder="Enter the Age..."
                            value={userinput.userAge}
                            name="userAge"
                            onChange={HandleEvent} className="mx-4 bg-amber-100 rounded text-xl font-mono"/>
                        </td>
                    </tr>
                    <br></br>

                     <tr>
                        <td>
                            <label className="mt-3 text-xl text-white font-bold">Enter City:</label>
                        </td>
                        <td>
                            <input type="text"
                            placeholder="Enter the City..."
                            value={userinput.userCity}
                            name="userCity"
                            onChange={HandleEvent} className="mx-4 bg-amber-100 rounded text-xl font-mono"/>
                        </td>
                    </tr>
                    <bR></bR>

                    <tr>
                        <td>
                            <button type="submit" className="bg-red-600 p-4 rounded-2xl text-2xl text-white font-bold ">Register</button>
                        </td>
                    </tr>
                </tbody>                
            </table>
        </form>
       <div>
        <Show data={savedata} HandleEdit={HandleEdit} HandleDelete={HandleDelete}/>
        </div>
    </div>
  )
}

export default RegistrationSystem