import { useMemo, useState } from "react";

const ree= (employees)=>{

    return employees.reduce((total,employees)=>{
        return total + employees.salary;
    },0)
}

const gg = (theme)=>{
    return {
        backgroundColor:theme?"#222":"#fff",
        color:theme?"#fff":"#222",
        minHeight:"100vH",
        padding:"20px"
    }
}

const employees = [
  {
    id: 1,
    name: "Darvin",
    department: "IT",
    salary: 50000,
  },
  {
    id: 2,
    name: "John",
    department: "HR",
    salary: 40000,
  },
  {
    id: 3,
    name: "Maria",
    department: "Finance",
    salary: 60000,
  },
  {
    id: 4,
    name: "David",
    department: "Marketing",
    salary: 45000,
  },
  {
    id: 5,
    name: "Sophia",
    department: "IT",
    salary: 55000,
  },
];

const Employee = () => {

    const [theme,setTheme]=useState(false);

    const toggle=()=>{
        setTheme(!theme)
    }

    const res = useMemo(()=>{
        const set = ree(employees);
        return set ;
    },[employees]);

    const themeStyle = useMemo(() => {
    return gg(theme);
}, [theme]);

  return (
  <>
    <div style={themeStyle} className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">
            Employee Salary Dashboard
          </h1>

          <button
            onClick={toggle}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
          >
            {theme ? "Light Theme" : "Dark Theme"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {employees.map((e) => (
            <div
              key={e.id}
              className="border rounded-xl shadow-lg p-5 hover:shadow-xl transition"
            >
              <h2 className="text-2xl font-bold mb-4">{e.name}</h2>

              <div className="space-y-2">
                <p>
                  <span className="font-semibold">Employee ID:</span> {e.id}
                </p>

                <p>
                  <span className="font-semibold">Department:</span>{" "}
                  {e.department}
                </p>

                <p>
                  <span className="font-semibold">Salary:</span> ₹{e.salary}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <div className="bg-green-600 text-white px-6 py-4 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold">
              Total Salary Expense: ₹{res}
            </h2>
          </div>
        </div>
      </div>
    </div>
  </>
);
}

export default Employee