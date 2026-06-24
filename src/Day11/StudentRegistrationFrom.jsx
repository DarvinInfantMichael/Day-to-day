import { useState } from "react"


const StudentRegistrationFrom = () => {

    const [userdata,setUserdata]=useState({userName:"",userAge:"",userCourse:"",userCity:"",userQuota:""});
    const[savedata,setSaveData]=useState(()=>{
        return JSON.parse(localStorage.getItem("UserData"))||[]
    });
    const[edit,setEdit]=useState(null);

    const handleChange =(e)=>{
        
        setUserdata ({...userdata,[e.target.name]:e.target.value});
    }

   const handleClick = (e) => {
    e.preventDefault();

    if (
        !userdata.userName ||
        !userdata.userAge ||
        !userdata.userCourse ||
        !userdata.userCity ||
        !userdata.userQuota
    ) {
        alert("Please fill all fields.");
        return;
    }

    if (userdata.userAge <= 0) {
        alert("Enter a valid age");
        return;
    }

    const res = JSON.parse(localStorage.getItem("UserData")) || [];

    if (edit !== null) {
        // Update existing student
        res[edit] = userdata;
        alert("Student Updated Successfully");
        setEdit(null);
    } else {
        // Add new student
        res.push(userdata);
        alert("Student Added Successfully");
    }

    localStorage.setItem("UserData", JSON.stringify(res));
    setSaveData(res);

    setUserdata({
        userName: "",
        userAge: "",
        userCourse: "",
        userCity: "",
        userQuota: ""
    });
};
  const handleEdit = (student, index) => {
    setUserdata(student);
    setEdit(index);
}


    const handleDelete = (id) => {
    const updatedData = savedata.filter((_, i) => i !== id);

    setSaveData(updatedData);

    localStorage.setItem(
        "UserData",
        JSON.stringify(updatedData)
    );
}

  return (
    <div>
        <div className="flex-col">
            <form>
                <h1>Rgistration Form </h1>
                <label>Enter Student Name:</label>
                <input type="text"
                name="userName"
                placeholder="Enter the Student Name...."
                onChange={handleChange}
                value={userdata.userName}/>
                <br></br>


                <label>Enter Student Age:</label>
                <input type="number"
                name="userAge"
                placeholder="Enter the Student Age...."
                onChange={handleChange}
                value={userdata.userAge}/>
                <br></br>



                <label>Enter Student Course:</label>
                <input type="email"
                name="userCourse"
                placeholder="Enter the Student Course...."
                onChange={handleChange}
                value={userdata.userCourse}/>
                <br></br>



                <label>Enter Student City:</label>
                <input type="text"
                name="userCity"
                placeholder="Enter the Student City...."
                onChange={handleChange}
                value={userdata.userCity}/>
                <br></br>



                <label>Select Quota:</label>
                <select
                name="userQuota"
                value={userdata.userQuota}
                onChange={handleChange}>
                    <option>--Quota--</option>
                    <option>Government</option>
                    <option>Management</option>
                </select>
                <br></br>


                <button onClick={handleClick}>Register</button>

                <div>
                    
                    {savedata.map((e,i)=>(
                            <>
                            <h1>User Data</h1>
                            <h1 key={i}>{e.userName}</h1>
                            <h1>{e.userAge}</h1>
                            <h1>{e.userCourse}</h1>
                            <h1>{e.userCity}</h1>
                            <h1>{e.userQuota}</h1>

                            <button onClick={()=>handleEdit(e,i)}>Edit Student</button>
                            <button onClick={()=>handleDelete(i)}>Delete</button>
                            </>
                    ))}
                    <h1></h1>
                </div>
            </form>
        </div>
    </div>
  )
}

export default StudentRegistrationFrom