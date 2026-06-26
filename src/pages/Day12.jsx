import LoginForm from "../day12/LoginForm"
import HomePage from "../day12/HomePage"
import Registration from "../day12/Registration"
import DashBoard from "../day12/DashBoard"
import { Route,Routes } from "react-router-dom"

const Day12 = () => {
  return (
    <>
    <div>
        <Routes>
    <Route index element={<HomePage />} />
    <Route path="registration" element={<Registration />} />
    <Route path="login" element={<LoginForm />} />
    <Route path="dashBoard" element={<DashBoard />} />
</Routes>
    </div>
    </>
  )
}

export default Day12