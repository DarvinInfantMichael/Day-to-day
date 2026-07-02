import { useState } from "react";

const NamewithCourse = () => {
  const students = [
    {
      id: 1,
      name: "Darvin Infant Michael L",
      course: "Full Stack Development"
    },
    {
      id: 2,
      name: "Joel",
      course: "Java Programming"
    },
    {
      id: 3,
      name: "Godson",
      course: "Cyber Security"
    },
    {
      id: 4,
      name: "Sudhan",
      course: "React JS"
    },
    {
      id: 5,
      name: "Sudhakar",
      course: "Python Development"
    },
    {
      id: 6,
      name: "Arun",
      course: "Data Structures and Algorithms"
    },
    {
      id: 7,
      name: "Karthik",
      course: "Machine Learning"
    },
    {
      id: 8,
      name: "Vignesh",
      course: "Cloud Computing"
    },
    {
      id: 9,
      name: "Praveen",
      course: "DevOps"
    },
    {
      id: 10,
      name: "Ajay",
      course: "UI/UX Design"
    }
  ];

  const [data, setData] = useState("");
  const [tar, setTar] = useState("");

  const HandleEvent = (e) => {
    setData(e.target.value);
  };

  let temp = [...students];

  if (data) {
    temp = temp.filter((e) =>
      e.name.toLowerCase().includes(data.toLowerCase())
    );
  }

  const Handleit = (e) => {
    setTar(e.target.value);
  };

  let dummy = [...new Set(students.map((e) => e.course))];

  if (tar) {
    temp = temp.filter((e) => e.course === tar);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Student Course Search
        </h1>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <input
            type="text"
            onChange={HandleEvent}
            placeholder="Search by Student Name"
            className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            onChange={Handleit}
            className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Course</option>

            {dummy.map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </select>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {temp.map((e) => (
            <div
              key={e.id}
              className="border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold mb-2">{e.name}</h2>

              <p className="text-gray-600">
                <span className="font-medium">Course:</span> {e.course}
              </p>
            </div>
          ))}
        </div>

        {temp.length === 0 && (
          <div className="text-center text-gray-500 mt-8">
            No students found.
          </div>
        )}
      </div>
    </div>
  );
};

export default NamewithCourse;