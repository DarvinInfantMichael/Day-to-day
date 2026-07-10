import { useEffect, useState } from "react"


const useLocal = (key,initial) => {

    const [value,setValue] =useState(initial);

    useEffect(()=>{

        const data =localStorage.getItem(key);

        if(data){
            setValue(data);
        }
    },[key]);

    useEffect(()=>{

        localStorage.setItem(key,value);

    },[value])
  return {value,setValue};
}

export default useLocal