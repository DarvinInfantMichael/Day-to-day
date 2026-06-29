import { useState } from "react";


const StudentsDetails = () => {

    const [usedata , setUsedata]=useState({userName:"",userAge:"",userCourse:"",userCity:""});

    const HandleCheck =()=>{

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

                <label>Enter Age :</label>

                <input type="number"
                value={usedata.userAge}
                onChange={HandleCheck}
                name="userAge"
                placeholder="Enter Student Age"/>

                <label>Enter Courses :</label>

                <input type="text"
                value={usedata.userCourse}
                onChange={HandleCheck}
                name="userCourse"
                placeholder="Enter Student Course"/>

                <label>Enter Name :</label>

                <input type="text"
                value={usedata.userCity}
                onChange={HandleCheck}
                name="userCity"
                placeholder="Enter Student City"/>
                


            </form>
        </div>
    </div>
  )
}

export default StudentsDetails