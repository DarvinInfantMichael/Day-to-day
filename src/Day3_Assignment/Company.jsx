import Employee from "../Day3_Assignment/Employee"
const Company = ({companyname,name,role,salary}) => {
  return (
    <div>Company Details :
        <Employee Name={name} Role={role} Salary={salary} CompanyName={companyname} />
      
    </div>

  )
}

export default Company