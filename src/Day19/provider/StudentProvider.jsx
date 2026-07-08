import { useState } from "react"
import StudentContext from "../context/StudentContext";

const StudentProvider = ({children}) => {
    const [data]=useState([
 {
   id:1,
   name:"Darvin",
   course:"MERN"
 },
 {
   id:2,
   name:"Joel",
   course:"React"
 },
 {
   id:2,
   name:"Godson",
   course:"React"
 }
]);
  return (
    <div>
        
        <StudentContext.Provider value={{data}}>
            {children}
        </StudentContext.Provider>

    </div>
  )
}

export default StudentProvider