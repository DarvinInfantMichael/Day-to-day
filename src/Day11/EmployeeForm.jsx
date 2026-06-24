import { useState } from "react"


const EmployeeForm = () => {

    const[data,setData]=useState({eName:"",eID:"",eDept:"",eSal:""});
    const[savedata,setSavedata]=useState(()=>{
        return JSON.parse(localStorage.getItem("User"))||[]
    })

    const[edit,setEdit]=useState(null);

    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
    }

    const handleClick =(e)=>{
        e.preventDefault();

      if(data.eSal < 10000){
    alert("Salary should be at least 10000");
    return;
}

        const res = JSON.parse(localStorage.getItem("User"))||[];
        res.push(data);
        alert('Employee Data Added')

        if (edit !== null) {
        // Update existing student
        res[edit] = data;
        alert("Student Updated Successfully");
        setEdit(null);
    } else {
        // Add new student
        res.push(data);
        alert("Student Added Successfully");
    }

        localStorage.setItem("User",JSON.stringify(res));
        setSavedata(res);

         setData({
        eName: "",
        eID: "",
        eDept: "",
        eSal: ""
    });
    }

    const HandleEdit =(data,index)=>{

        setData(data);
        setEdit(index);

    }

    const HandleDelete=(id)=>{

        const md=(data.filter((_,i)=>i!==id));
        setSavedata(md);

        localStorage.setItem("User",JSON.stringify(md));
        
    }
  return (
    <div>
        <div>
            <h1>Employee Form</h1>
            <form>

                <label>Enter EmployeeName :</label>
                <input type="text"
                name="eName"
                onChange={handleChange}
                value={data.eName}
                placeholder="Enter EmployeeName..."/>
                <br></br>

                <label>Enter EmployeeID :</label>
                <input type="number"
                name="eID"
                onChange={handleChange}
                value={data.eID}
                placeholder="Enter EmployeeID..."/>
                <br></br>

                <select
                name="eDept"
                onChange={handleChange}
                value={data.eDept}>
                    <option>--Select Employee Department--</option>
                    <option>IT</option>
                    <option>Sales & Marketing</option>
                    <option>Mechanical</option>
                    <option>Electricals</option>
                </select>

                <label>Enter EmployeeSalary:</label>
                <input type="number"
                name="eSal"
                onChange={handleChange}
                value={data.eSal}
                placeholder="Enter EmployeeSalary..."/>
                <br></br>

                <button onClick={handleClick}>Display</button>

                <div>
                    {savedata.map((e,i)=>(
                        <>
                        <h1>User Data :</h1>
                        <h1 key={i}>{e.eName}</h1>
                        <h1>{e.eID}</h1>
                        <h1>{e.eDept}</h1>
                        <h1>{e.eSal}</h1>

                        <button onClick={()=>HandleEdit(e,i)}>Edit Employee</button>
                        <button onClick={()=>HandleDelete(e,i)}>Remove Employee</button>
                        </>
                    ))}
                </div>
            </form>
        </div>
    </div>
  )
}

export default EmployeeForm