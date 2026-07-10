import { useContext } from "react"
import AuthContext from "../context/AuthContext"


const DashBoard = () => {

    const {user,Logout}=useContext(AuthContext);
  return (
    <div>
        <div>
            <h1>Welcome Back !!!! {user?.userName}</h1>
            <h2>Email :{user?.userEmail}</h2>
            <button onClick={Logout}>LOGOUT </button>
        </div>
    </div>
  )
}

export default DashBoard