import EmployeeCard from "../Day3_Assignment/EmployeeCard";
import Student from "../Day3_Assignment/Student";
import Product from "../Day3_Assignment/Product";
import UserSkills from "../Day3_Assignment/UserSkills";
import UserInformationCard from "../Day3_Assignment/UserInformationCard";
import Company from "../Day3_Assignment/Company";
import Parent from "../Day3_Assignment/Parent";
import CourseCard from "../Day3_Assignment/CourseCard";
const Model = () => {
  const skills = ["CSS", "JavaScript", "React", "Node.js"];

  const user = {
    name: "Darvin",
    email: "dim@gmail.com",
    phone: 9342745599,
    city: "Chennai",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-700 py-10 px-6">

      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-white">
          React Props Demo
        </h1>
        <p className="text-gray-300 mt-2">
          Displaying different components using Props
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition duration-300">
          <h2 className="text-xl font-semibold text-blue-700 mb-4 border-b pb-2">
            Student
          </h2>
          <Student
            name="Darvin"
            age="21"
            course="FullStack"
            city="Chennai"
          />
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition duration-300">
          <h2 className="text-xl font-semibold text-blue-700 mb-4 border-b pb-2">
            Employee
          </h2>
          <EmployeeCard
            Name="Michael"
            ID="22IT050"
            Dept="Information Technology"
            Salary="50000"
            Experience="2"
          />
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition duration-300">
          <h2 className="text-xl font-semibold text-blue-700 mb-4 border-b pb-2">
            Product
          </h2>
          <Product
            name="Football"
            price="5000"
            Cate="Sports"
            Brand="Adidas"
          />
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition duration-300">
          <h2 className="text-xl font-semibold text-blue-700 mb-4 border-b pb-2">
            Skills
          </h2>
          <UserSkills skills={skills} />
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition duration-300">
          <h2 className="text-xl font-semibold text-blue-700 mb-4 border-b pb-2">
            User Information
          </h2>
          <UserInformationCard user={user} />
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition duration-300">
          <h2 className="text-xl font-semibold text-blue-700 mb-4 border-b pb-2">
            Company
  
          </h2>
          <Company companyname="SLA" role="Developer" Salary="20000" name="Darvin"/>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition duration-300">
          <h2 className="text-xl font-semibold text-blue-700 mb-4 border-b pb-2">
            Parent,Child,GrandChild
  
          </h2>
          <Parent name="Darvin Infant Michael L" course="MERN Tech"/>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition duration-300">
          <h2 className="text-xl font-semibold text-blue-700 mb-4 border-b pb-2">
            CourseCard Process:
  
          </h2>
          <CourseCard CourseName="MERN STACK" Duration="6 Months" Fees="50000"/>
          <CourseCard CourseName="Python FullStack" Duration="6 Months" Fees="55000"/>
          <CourseCard CourseName="Java FullStack" Duration="6 Months" Fees="58000"/>
        </div>

      </div>
    </div>
  );
};

export default Model;