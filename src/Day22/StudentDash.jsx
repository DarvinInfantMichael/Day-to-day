import { useMemo, useState } from "react";

const ts = (theme)=>{
    return {
    backgroundColor: theme?"#222":"#fff",
    color: theme?"#fff":"#000",
    minHeight:"100vh",
    padding:"20px",
  }};

const tt = (students)=>{

    return {
        total : students.length,
        ps : students.filter((e)=>e.placed).length,
        up : students.filter((e)=>!e.placed).length,
    }

}
const students = [
  {
    id: 1,
    name: "Darvin",
    department: "IT",
    placed: true,
    getJob:"yes",
  },
  {
    id: 2,
    name: "John",
    department: "CSE",
    placed: false,
    getJob:"Progressing...",
  },
  {
    id: 3,
    name: "Maria",
    department: "ECE",
    placed: true,
    getJob:"yes",
  },
  {
    id: 4,
    name: "David",
    department: "EEE",
    placed: false,
    getJob:"Progressing...",
  },
  {
    id: 5,
    name: "Sophia",
    department: "IT",
    placed: true,
    getJob:"yes",
  },
];
const StudentDash = () => {

    const [theme ,setTheme]=useState(false);

    const mee = useMemo(()=>{
        const gg = tt(students);
        return gg;
    },[students]);

    const tg = useMemo(()=>{
        const tt = ts(theme);
        return tt;
    },[theme])

    const toggle =()=>{
        setTheme(!theme);
    }
    
  return (
  <>
    <div style={tg} className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold">
            Student Dashboard
          </h1>

          <button
            onClick={toggle}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
          >
            {theme ? "Light Theme" : "Dark Theme"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {students.map((e) => (
            <div
              key={e.id}
              className="border rounded-xl shadow-lg p-5 hover:shadow-xl transition"
            >
              <h2 className="text-2xl font-bold mb-4">
                {e.name}
              </h2>

              <div className="space-y-2">
                <p>
                  <span className="font-semibold">Student ID:</span> {e.id}
                </p>

                <p>
                  <span className="font-semibold">Department:</span>{" "}
                  {e.department}
                </p>

                <p>
                  <span className="font-semibold">Placed:</span>{" "}
                  {e.placed ? "Yes" : "No"}
                </p>

                <p>
                  <span className="font-semibold">Status:</span>{" "}
                  {e.getJob}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-600 text-white rounded-xl p-6 text-center shadow-lg">
            <h3 className="text-lg font-semibold">Total Students</h3>
            <p className="text-3xl font-bold mt-2">{mee.total}</p>
          </div>

          <div className="bg-green-600 text-white rounded-xl p-6 text-center shadow-lg">
            <h3 className="text-lg font-semibold">Placed Students</h3>
            <p className="text-3xl font-bold mt-2">{mee.ps}</p>
          </div>

          <div className="bg-red-600 text-white rounded-xl p-6 text-center shadow-lg">
            <h3 className="text-lg font-semibold">Progressing Students</h3>
            <p className="text-3xl font-bold mt-2">{mee.up}</p>
          </div>
        </div>

      </div>
    </div>
  </>
);
}

export default StudentDash