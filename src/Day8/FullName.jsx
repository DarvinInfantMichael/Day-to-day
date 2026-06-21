import { useState } from "react";

const FullName = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [Fullname, setFullname] = useState([]);

  const handleName = (e) => {
    e.preventDefault();

    if (firstname.trim() === "" || lastname.trim() === "") {
      alert("Please enter both First Name and Last Name");
      return;
    }

    setFullname([...Fullname, { firstname, lastname }]);

    setFirstname("");
    setLastname("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-800 to-cyan-600 flex justify-center items-center p-6">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl p-8">

        <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Full Name Form
        </h1>

        <form onSubmit={handleName}>

          {/* First Name */}
          <div className="mb-5">
            <label className="block font-semibold mb-2">
              First Name
            </label>

            <input
              type="text"
              value={firstname}
              placeholder="Enter First Name..."
              onChange={(e) => setFirstname(e.target.value)}
              className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Last Name */}
          <div className="mb-6">
            <label className="block font-semibold mb-2">
              Last Name
            </label>

            <input
              type="text"
              value={lastname}
              placeholder="Enter Last Name..."
              onChange={(e) => setLastname(e.target.value)}
              className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:border-green-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-300"
          >
            Show Name
          </button>

        </form>

        {/* Display Names */}
        {Fullname.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Added Names
            </h2>

            <div className="space-y-3">
              {Fullname.map((person, index) => (
                <div
                  key={index}
                  className="bg-blue-50 border border-blue-200 rounded-xl p-4 shadow-sm"
                >
                  <p className="text-lg font-semibold text-blue-700">
                    {index + 1}. {person.firstname} {person.lastname}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default FullName;