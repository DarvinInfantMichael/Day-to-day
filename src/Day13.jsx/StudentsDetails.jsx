import { useState } from "react";


const StudentsDetails = () => {

    const [usedata , setUsedata]=useState({userName:"",userAge:"",userCourse:"",userCity:""});
    const [savedata,setSavedata]=useState(() => {
    return JSON.parse(localStorage.getItem("Data")) || [];
});
    const [edit,setEdit]=useState(null);

    const HandleCheck =(e)=>{

        setUsedata({...usedata,[e.target.name]:e.target.value})

    }

    const Handleit =(e)=>{

        e.preventDefault();

        const res=JSON.parse(localStorage.getItem("Data"))||[];

        if(edit!==null){
            res[edit] =usedata;
            setEdit(null);
        }else{
            res.push(usedata);
        }

        localStorage.setItem("Data",JSON.stringify(res));

        setSavedata(res)

        setUsedata ({userName:"",userAge:"",userCourse:"",userCity:""});

    }

    const HandleClick=(e,i)=>{

        setUsedata(e);
        setEdit(i);

    }

    const HandleDelete =(id)=>{

        const update =savedata.filter((_,i)=>i!==id);

        setSavedata(update);

        localStorage.setItem("Data",JSON.stringify(update));

    }

  return (
    <div>
        <div>
            <h1>Students Registeration System: </h1>
        </div>
        <div>

            <form>
                <label>Enter Name :</label>

                <input type="text"
                value={usedata.userName}
                onChange={HandleCheck}
                name="userName"
                placeholder="Enter Student Name"/>
                <br>
                </br>

                <label>Enter Age :</label>

                <input type="number"
                value={usedata.userAge}
                onChange={HandleCheck}
                name="userAge"
                placeholder="Enter Student Age"/>
                <br></br>

                <label>Enter Courses :</label>


                <input type="text"
                value={usedata.userCourse}
                onChange={HandleCheck}
                name="userCourse"
                placeholder="Enter Student Course"/>
                <br></br>

                <label>Enter Name :</label>

                <input type="text"
                value={usedata.userCity}
                onChange={HandleCheck}
                name="userCity"
                placeholder="Enter Student City"/>
                <br>
                </br>

                <button type="submit" onClick={Handleit}>{edit !== null ? "Update Student" : "Register"}</button>

                <div>

                    {
                    savedata.map((e,i)=>(
                        <>
                        <div key={i}>
                        <h1>{e.userAge}</h1>
                        <h1>{e.userCourse}</h1>x
                        <h1>
                            {e.userCity}
                        </h1>

                        <button  type="button" onClick={()=>HandleClick(e,i)}>Edit</button>
                        <br></br>
                        <button type="button" onClick={()=>HandleDelete(i)}>Delete</button>
                        </div>
                        </>

                        
                    ))
                    }
                </div>
                


            </form>
        </div>
    </div>
  )
}

export default StudentsDetails