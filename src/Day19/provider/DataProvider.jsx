import { useState } from "react"
import ManagerContext from "../context/ManagerContext";


const DataProvider = ({children}) => {

    const [data]=useState({name:"Darvin Infant Michael",
                                email:"darvininfantmichael.26it@licet.ac.in",
                                role:"Trainee Developer.."});

    const [product]=useState([
  {
    id:1,
    title:"Laptop",
    price:50000
  },
  {
    id:2,
    title:"Mobile",
    price:20000
  }
]
)


  return (
    <>
    <ManagerContext.Provider value={{data,product}}>
    {children}
    </ManagerContext.Provider>
    </>
  )
}

export default DataProvider