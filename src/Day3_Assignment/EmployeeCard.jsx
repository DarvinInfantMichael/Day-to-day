
const EmployeeCard = ({Name,ID,Salary,Dept,Experience}) => {
  return (
    <div>EmployeeCard
        <p>EmployeeName : {Name}</p>
        <p>ID :{ID}</p>
        <p>Department:{Dept}</p>
        <p>Salary :{Salary}</p>
        <p>Experience:{Experience}</p>
    </div>
  )
}

export default EmployeeCard