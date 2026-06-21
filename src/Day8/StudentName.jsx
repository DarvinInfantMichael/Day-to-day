import { useState } from "react";

const StudentName = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [full, setFull] = useState("");

  const handleName = () => {
    setFull(fname + " " + lname);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-800 to-cyan-600 flex justify-center items-center p-6">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl p-8">

        <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
           Student Full Name
        </h1>

        {/* First Name */}
        <div className="mb-5">
          <label className="block font-semibold mb-2">
            First Name
          </label>

          <input
            type="text"
            placeholder="Enter First Name..."
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Last Name */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Last Name
          </label>

          <input
            type="text"
            placeholder="Enter Last Name..."
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Button */}
        <button
          onClick={handleName}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-300"
        >
          Show Full Name
        </button>

        {/* Result */}
        {full && (
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-5 shadow-md">
            <h2 className="text-xl font-bold text-blue-700 mb-2">
               Student Details
            </h2>

            <p className="text-lg">
              <span className="font-semibold">Full Name:</span> {full}
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default StudentName;