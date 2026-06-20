import AgeIncreament from "../Day6/AgeIncreament"
import CounterApp from "../Day6/CounterApp"
import LoginStatus from "../Day6/LoginStatus"
import MobileUpdate from "../Day6/MobileUpdate"
import ProductUpdate from "../Day6/ProductUpdate"
import ShowHide from "../Day6/ShowHide"
import StudentNameUpdate from "../Day6/StudentNameUpdate"
import ThemeState from "../Day6/ThemeState"
import UserDataLoad from "../Day6/UserDataLoad"
import SalaryUpdate from "../Day6/SalaryUpdate"
import CourseUpdate from "../Day6/CourseUpdate"
import Employee from "../Day6/Employee"
import AttendanceList from "../Day6/AttendanceList"
import ProfileShow from "../Day6/ProfileShow"
import BankAccount from "../Day6/BankAccount"


const Day6 = () => {
  return (
    <>
    <div>
        <CounterApp/>
        <StudentNameUpdate/>
        <AgeIncreament/>
        <LoginStatus/>
        <ThemeState/>
        <ShowHide/>
        <UserDataLoad/>
        <ProductUpdate/>
        <MobileUpdate/>
        <SalaryUpdate/>
        <CourseUpdate/>
        <Employee/>
        <AttendanceList/>
        <ProfileShow/>
        <BankAccount/>
    </div>
    </>
  )
}

export default Day6