import { useState } from "react";

const JobApply = () => {
  const [data, setData] = useState({
    userName: "",
    userSkills: "",
    userEmail: "",
    userex: "",
  });

  const [sdata, setSdata] = useState(
    JSON.parse(localStorage.getItem("Data")) || []
  );

  const HandleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const HandleClick = (e) => {
    e.preventDefault();

    const res = [...sdata, data];

    localStorage.setItem("Data", JSON.stringify(res));
    setSdata(res);

    setData({
      userName: "",
      userSkills: "",
      userEmail: "",
      userex: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      {/* Form Card */}
      <div className="bg-white shadow-lg rounded-xl p-8 w-[450px]">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Job Application Form
        </h1>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            name="userName"
            value={data.userName}
            onChange={HandleChange}
            placeholder="Enter Name..."
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="text"
            name="userSkills"
            value={data.userSkills}
            onChange={HandleChange}
            placeholder="Enter Skills..."
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            name="userEmail"
            value={data.userEmail}
            onChange={HandleChange}
            placeholder="Enter Email..."
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <textarea
            name="userex"
            value={data.userex}
            onChange={HandleChange}
            placeholder="Tell about your experience..."
            rows="4"
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            onClick={HandleClick}
            className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Apply Now
          </button>
        </form>
      </div>

      {/* Application Cards */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {sdata.map((e, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-lg p-5 border border-gray-200 w-[350px]"
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              {e.userName}
            </h2>

            <div className="space-y-2 text-gray-700">
              <p>
                <span className="font-medium">Skills:</span> {e.userSkills}
              </p>

              <p>
                <span className="font-medium">Email:</span> {e.userEmail}
              </p>

              <p>
                <span className="font-medium">Experience:</span>
              </p>

              <p className="text-gray-600 border-t pt-2">
                {e.userex}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobApply;