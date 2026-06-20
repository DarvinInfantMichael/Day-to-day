
const Employee = ({Name,Role,Salary,CompanyName}) => {
  return (
    <div>
      <p>Company_Name:{CompanyName}</p>
      <h3>Employee Dtails:</h3>
        <p>Emp_Name:{Name}</p>
        <p>Emp_Role:{Role}</p><p>Emp_Salary:{Salary}</p>
    </div>
  )
}

export default Employee