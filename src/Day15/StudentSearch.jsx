import { useEffect, useState } from "react";

const StudentSearch = () => {
  const students = [
    {
      id: 1,
      name: "Darvin Infant Michael L",
      department: "IT",
      year: 3,
    },
    {
      id: 2,
      name: "Joel",
      department: "CSE",
      year: 2,
    },
    {
      id: 3,
      name: "Godson",
      department: "ECE",
      year: 4,
    },
    {
      id: 4,
      name: "Sudhan",
      department: "IT",
      year: 3,
    },
    {
      id: 5,
      name: "Sudhakar",
      department: "CSE",
      year: 2,
    },
  ];

  const [data, setData] = useState("");
  const [filter, setFilter] = useState(students);

  useEffect(() => {
    const res = students.filter((e) =>
      e.name.toLowerCase().includes(data.toLowerCase())
    );

    setFilter(res);
  }, [data]);

  const HandleChange = (e) => {
    setData(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Student Search
        </h1>

        <input
          type="text"
          value={data}
          onChange={HandleChange}
          placeholder="Enter Student Name"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {filter.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {filter.map((e) => (
              <div
                key={e.id}
                className="border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition"
              >
                <h2 className="text-xl font-semibold mb-3">{e.name}</h2>

                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Student ID:</span> {e.id}
                </p>

                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Department:</span>{" "}
                  {e.department}
                </p>

                <p className="text-gray-600">
                  <span className="font-medium">Year:</span> {e.year}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 text-lg">
            No Data Found
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentSearch;