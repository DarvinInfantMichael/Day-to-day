import { useState } from "react";


const EmployeeSystem = () => {

    const[usedata,setUsedata]=useState({userName:"",userID:"",userDept:"",useSalary:""});
    const [savadata, setSavadata] = useState(() => {
    return JSON.parse(localStorage.getItem("Items")) || [];
});

    const [edit,setEdit]=useState(null);

    const HandleChange =(e)=>{

        setUsedata({...usedata,[e.target.name]:e.target.value});

    }

    const HandleClick=(e)=>{

        e.preventDefault();

        const res=JSON.parse(localStorage.getItem("Items"))||[];

        if(edit!==null){
            res[edit]=usedata;
            setEdit(null);
        }else{
            res.push(usedata)
        }

        localStorage.setItem("Items",JSON.stringify(res));

        setSavadata(res);
        
        setUsedata({userName:"",userID:"",userDept:"",useSalary:""});

    }

    const Handleit =(e,i)=>{

        setUsedata(e);
        setEdit(i);

    }


    const HandleDelete=(id)=>{

        const update=savadata.filter((_,i)=>(i!==id));

        setSavadata(update);

        localStorage.setItem("Items",JSON.stringify(update));

    }


  return (
    <div>
        <div>
            <form>

                <label>Employee Name:</label>
                <input type="text"
                onChange={HandleChange}
                name="userName"
                value={usedata.userName}
                placeholder="Enter Name Here..."/>
                <br></br>

                <label>Employee ID:</label>
                <input type="number"
                onChange={HandleChange}
                name="userID"
                value={usedata.userID}
                placeholder="Enter ID Here.."/>
                <br></br>

                <label>Employee Department:</label>
                <select
                name="userDept"
                value={usedata.userDept}
                onChange={HandleChange}>
                    <option value="">Select Department</option>
                    <option value="IT">IT</option>
                    <option value="HR">HR</option>
                    <option value="Finance">Finance</option>
                    <option value="Sales">Sales</option>
                    <option value="Marketing">Marketing</option>
                </select>
                <br></br>

                <label>Employee Salary:</label>
                <input type="number"
                onChange={HandleChange}
                name="useSalary"
                value={usedata.useSalary}
                placeholder="Enter Salary Here.."/>
                <br></br>

                <button type="button" onClick={HandleClick}>{edit!==null ? "Updating...":"Register"}</button>

            </form>

            <div>
                <table>
    <thead>
        <tr>
            <th>Employee Name</th>
            <th>Employee ID</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Actions</th>
        </tr>
    </thead>

    <tbody>
        {savadata.map((e, i) => (
            <tr key={i}>
                <td>{e.userName}</td>
                <td>{e.userID}</td>
                <td>{e.userDept}</td>
                <td>{e.useSalary}</td>
                <td>
                    <button  type="button" onClick={()=>Handleit(e,i)}>Edit</button>
                    <button  type="button" onClick={()=>HandleDelete(i)}>Delete</button>
                </td>
            </tr>
        ))}
    </tbody>
</table>
            </div>
        </div>
    </div>
  )
}

export default EmployeeSystem