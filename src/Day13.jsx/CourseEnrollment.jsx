import { useState } from "react";

const CourseEnrollment = () => {
  const [userdata, setUserdata] = useState({
    UserName: "",
    UserCourse: "",
    Duration: "",
  });

  const [saveData, setSaveData] = useState(
    JSON.parse(localStorage.getItem("Items")) || []
  );

  const HandleChange = (e) => {
    setUserdata({
      ...userdata,
      [e.target.name]: e.target.value,
    });
  };

  const HandleClick = (e) => {
    e.preventDefault();

    const res = [...saveData, userdata];

    localStorage.setItem("Items", JSON.stringify(res));

    setSaveData(res);

    setUserdata({
      UserName: "",
      UserCourse: "",
      Duration: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      {/* Form Card */}
      <div className="bg-white shadow-lg rounded-xl p-8 w-[400px]">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Course Enrollment
        </h1>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            name="UserName"
            value={userdata.UserName}
            onChange={HandleChange}
            placeholder="Enter Name..."
            className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400"
          />

          <select
            value={userdata.UserCourse}
            name="UserCourse"
            onChange={HandleChange}
            className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Course</option>
            <option value="IT">IT</option>
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
          </select>

          <input
            type="number"
            name="Duration"
            value={userdata.Duration}
            onChange={HandleChange}
            placeholder="Enter Duration..."
            className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            onClick={HandleClick}
            className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Enroll Now
          </button>
        </form>
      </div>

      {/* Enrollment Cards */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {saveData.map((e, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-lg p-5 border border-gray-200 w-[320px]"
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              {e.UserName}
            </h2>

            <div className="space-y-2 text-gray-700">
              <p>
                <span className="font-medium">Course:</span> {e.UserCourse}
              </p>

              <p>
                <span className="font-medium">Duration:</span> {e.Duration} Months
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseEnrollment;