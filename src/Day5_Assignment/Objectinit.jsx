import { useState } from "react"

function Objectinit()  {

    const [student]=useState({
        name:"Darvin",
        age :21,
        city :"Chennai",
        course :"FullStack MERN"
    });
return (
    <>
    <div className="border rounded-lg shadow-md p-5 bg-white mt-3">
        <h1 className="text-xl font-bold text-blue-600">This is An Object Created inside useState:</h1>
        <h2>Name = {student.name}</h2>
        <h2>Age  ={student.age}</h2>
        <h2>City ={student.city}</h2>
        <h4>cCourse ={student.course}</h4>
    </div>
    </>
   
  )
}

export default Objectinit