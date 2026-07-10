import { useState } from "react"



const useToggle = () => {


    const[toggle,setToggle]=useState(false);

    const HandleTog =()=>{

        setToggle((prev)=>!prev);

    };

    
  return{toggle,HandleTog};
}

export default useToggle