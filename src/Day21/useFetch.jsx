import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [valid,setValid] =useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError]=useState("");

    const getData = async(url)=>{

        try{

            const data = await fetch (url);

            const Tdata = await data.json();

            setValid(Tdata);

        }catch (error){

            setError(error.message);
            
        }finally{

            setLoading(false);

        }
    }

    useEffect(()=>{
        getData(url)
    },[url]);

  return {valid,loading,error}
}

export default useFetch