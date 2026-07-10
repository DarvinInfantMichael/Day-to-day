import { useState } from "react"
import { useNavigate } from "react-router-dom";


const Register = () => {

    const nav=useNavigate();

    const [rdata,setRdata] = useState({userName:"",userEmail:"",userPass:""});


    const HandleChange=(e)=>{

        setRdata({...rdata,[e.target.name]:e.target.value});

    }

    const HandleClick =(e)=>{

        e.preventDefault();

        const db =JSON.parse(localStorage.getItem("AllData"))||[];

        db.push(rdata);

        localStorage.setItem("AllData",JSON.stringify(db));

        setRdata({userName:"",userEmail:"",userPass:""})

        nav("/login");

    }

  return (
    <div>
        <div>
            <h1>Registration  System </h1>
        </div>

        <div>
            <form>
                
                <label>Enter Name :</label>
                <input type="text"
                onChange={HandleChange}
                name="userName"
                value={rdata.userName}
                placeholder="Enter User Name"/>
                <br></br>


                <label>Enter Email :</label>
                <input type="email"
                onChange={HandleChange}
                name="userEmail"
                value={rdata.userEmail}
                placeholder="Enter Email"/>
                <br></br>

                <label>Enter Name :</label>
                <input type="password"
                onChange={HandleChange}
                name="userPass"
                value={rdata.userPass}
                placeholder="Enter Password..."/>

                <button onClick={HandleClick}>Register Now !</button>

            </form>
        </div>
    </div>
  )
}

export default Register