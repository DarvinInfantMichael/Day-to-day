import { useState } from "react"

function CourseUpdate () {

    const[course,setCourse]=useState("MERN");
  return (
    <>
    <div className="border-2 rounded-2xl shadow-md p-5 m-5 w-100">
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-blue-700 text-2xl font-bold mt-3 ">This is Course Update Process</h1>
            
            <label className="text-xl font-bold m-3 ">Select Course</label>
            <select value={course} onChange={(e)=>{setCourse(e.target.value)}} className="font-bold m-3 border-2 text-green-600 border-black">
                <option>MERN</option>
                <option>React Native</option>
                <option>Flutter</option>
                <option>Python Full Stack</option>
                <option>Java Full Stack</option>
                <option>Data Analysis</option>
            </select>
            <h1 className="text-l font-semibold">Selected Course: <span className="font-bold text-xl text-green-500">{course}</span></h1>
            </div></div></>
  )
}

export default CourseUpdate