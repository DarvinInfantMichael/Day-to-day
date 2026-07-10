import { useState } from "react"


const useCounter = () => {

    const [count,setCount] = useState(0);

    const HandleInc =()=>{

        setCount((prev)=>prev+1);

    }

    const HandleDec =()=>{

        setCount((prev)=>prev-1);

    }

    const HandleReset =()=>{

        setCount(0);
    
    }


  return {count , HandleInc , HandleDec , HandleReset}

}

export default useCounter