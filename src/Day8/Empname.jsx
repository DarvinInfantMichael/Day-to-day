import { useState } from "react";

const Empname = () => {
  const [emp, setEmp] = useState("");
  const [id, setId] = useState("");
  const [dept, setDept] = useState("");

  const [details, setDetails] = useState({
    name: "",
    id: "",
    dept: "",
  });

  const handleChange = () => {
    setDetails({
      name: emp,
      id: id,
      dept: dept,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-800 to-cyan-600 flex justify-center items-center p-6">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl p-8">

        <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Employee Registration Form
        </h1>

        {/* Employee Name */}
        <div className="mb-5">
          <label className="block font-semibold mb-2">
            Employee Name
          </label>

          <input
            type="text"
            placeholder="Enter Employee Name"
            value={emp}
            onChange={(e) => setEmp(e.target.value)}
            className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Employee ID */}
        <div className="mb-5">
          <label className="block font-semibold mb-2">
            Employee ID
          </label>

          <input
            type="text"
            placeholder="Enter Employee ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:border-green-500"
          />
        </div>

        {/* Department */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Department
          </label>

          <input
            type="text"
            placeholder="Enter Department"
            value={dept}
            onChange={(e) => setDept(e.target.value)}
            className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:border-purple-500"
          />
        </div>

        {/* Button */}
        <button
          onClick={handleChange}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-300"
        >
          Show Employee Details
        </button>

        {/* Result */}
        {details.name && (
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-5">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Employee Details
            </h2>

            <p className="text-lg">
              <span className="font-semibold">Employee Name:</span>{" "}
              {details.name}
            </p>

            <p className="text-lg">
              <span className="font-semibold">Employee ID:</span>{" "}
              {details.id}
            </p>

            <p className="text-lg">
              <span className="font-semibold">Department:</span>{" "}
              {details.dept}
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Empname;