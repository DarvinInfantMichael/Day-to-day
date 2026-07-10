import { Routes,Route } from "react-router-dom"
import Regsiter from "../pages/Register"
import Login from "../pages/Login"
import DashBoard from "../pages/DashBoard"
import ProductedRouters from "./ProductRoutes"

const AppRoutes = () => {
  return (
    <>
    <Routes>
        <Route path={"/"} element={<Regsiter/>}></Route>
        <Route path={"/login"} element={<Login/>}></Route>
        <Route path={"/dash"} element={<ProductedRouters><DashBoard/></ProductedRouters>}></Route>
    </Routes>
    </>
  )
}

export default AppRoutes