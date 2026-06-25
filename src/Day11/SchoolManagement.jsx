import { useState } from "react";

const SchoolForm = () => {
  const [schoolData, setSchoolData] = useState({
    schoolName: "",
    principalName: "",
    city: "",
    totalStudents: "",
  });

  const [savedData, setSavedData] = useState([]);

  const handleChange = (e) => {
    setSchoolData({
      ...schoolData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();

    setSavedData((prev) => [...prev, schoolData]);

    setSchoolData({
      schoolName: "",
      principalName: "",
      city: "",
      totalStudents: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10 px-4">
      <div className="w-full max-w-5xl">

        {/* Form Section */}
        <div className="bg-white shadow-lg rounded-xl p-8 mb-8">
          <h1 className="text-3xl font-bold text-center mb-6">
            School Information Form
          </h1>

          <form className="space-y-5">
            <div>
              <label className="block font-medium mb-2">
                School Name
              </label>
              <input
                type="text"
                name="schoolName"
                value={schoolData.schoolName}
                onChange={handleChange}
                placeholder="Enter School Name..."
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block font-medium mb-2">
                Principal Name
              </label>
              <input
                type="text"
                name="principalName"
                value={schoolData.principalName}
                onChange={handleChange}
                placeholder="Enter Principal Name..."
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block font-medium mb-2">
                City
              </label>
              <input
                type="text"
                name="city"
                value={schoolData.city}
                onChange={handleChange}
                placeholder="Enter City..."
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block font-medium mb-2">
                Total Students
              </label>
              <input
                type="number"
                name="totalStudents"
                value={schoolData.totalStudents}
                onChange={handleChange}
                placeholder="Enter Total Students..."
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button
              onClick={handleSave}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Save School Information
            </button>
          </form>
        </div>

        {/* School Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedData.map((school, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-5 border border-gray-200"
            >
              <h2 className="text-xl font-bold mb-4">
                School Information
              </h2>

              <p className="mb-2">
                <span className="font-semibold">School Name:</span>{" "}
                {school.schoolName}
              </p>

              <p className="mb-2">
                <span className="font-semibold">Principal Name:</span>{" "}
                {school.principalName}
              </p>

              <p className="mb-2">
                <span className="font-semibold">City:</span>{" "}
                {school.city}
              </p>

              <p>
                <span className="font-semibold">Total Students:</span>{" "}
                {school.totalStudents}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchoolForm;