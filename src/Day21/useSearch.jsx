import { useState } from "react"


const useSearch = (students) => {

    const [search , setSearch]=useState("");

    const FilteredData = students.filter((p)=>p.toLowerCase().includes(search.toLowerCase()));

  return{search,setSearch,FilteredData};
}

export default useSearch