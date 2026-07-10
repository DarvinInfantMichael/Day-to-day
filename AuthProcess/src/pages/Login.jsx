import { useContext, useState } from "react"
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


const Login = () => {


    const nav = useNavigate();

    const{login}=useContext(AuthContext);

    const [ldata,setLdata]=useState({userEmail:"" ,userPass:""});

    const HandleChange=(e)=>{

        setLdata({...ldata,[e.target.name]:e.target.value});

    }

    const HandleClick =(e)=>{
        e.preventDefault();

        const res = JSON.parse(localStorage.getItem("AllData"))||[];

        const fil =res.find((data)=>
        data.userEmail===ldata.userEmail &&
        data.userPass=== ldata.userPass);

        if(fil){
        login(fil);
        nav("/dash");
        alert('Login Successfully...')
        }else{
        alert('User Not Found');
        }   

        setLdata({userEmail:"" ,userPass:""})

    }

    
   
    



  return (
    <div>
        <div>
            <h1>Login Form </h1>
        </div>

        <div>
            <label>Enter UserName :</label>
            <input type="email"
            onChange={HandleChange}
            name="userEmail"
            value={ldata.userEmail}
            placeholder="Enter Registered Email"/>


            <label>Enter UserPassWord :</label>
            <input type="password"
            onChange={HandleChange}
            name="userPass"
            value={ldata.userPass}
            placeholder="Enter Registered Password.."/>

            <button onClick={HandleClick}> Login Now ! </button>

        </div>
    </div>
  )
}

export default Login