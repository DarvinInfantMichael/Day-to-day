import { useState } from "react";

const PersonalForm = () => {
  const [data, setData] = useState({
    userName: "",
    userEmail: "",
    userNumber: "",
    userAddress: "",
  });

  const [sdata, setSdata] = useState([]);

  const HandleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const HandleClick = (e) => {
    e.preventDefault();

    setSdata((prev) => [...prev, data]);

    setData({
      userName: "",
      userEmail: "",
      userNumber: "",
      userAddress: "",
    });
  };

  const HandleEdit = (e) => {
    setData(e);
  };

  const HandleDelete = (id) => {
    const del = sdata.filter((_, i) => i !== id);
    setSdata(del);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start p-8">
      <div className="w-full max-w-4xl">
        {/* Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-center mb-6">
            Personal Information
          </h1>

          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">
                Enter Name
              </label>
              <input
                type="text"
                onChange={HandleChange}
                name="userName"
                value={data.userName}
                placeholder="Enter Name..."
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                Enter Email
              </label>
              <input
                type="email"
                onChange={HandleChange}
                name="userEmail"
                value={data.userEmail}
                placeholder="Enter Email..."
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                Enter Mobile Number
              </label>
              <input
                type="number"
                onChange={HandleChange}
                name="userNumber"
                value={data.userNumber}
                placeholder="Enter Number..."
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                Enter Address
              </label>
              <textarea
                onChange={HandleChange}
                name="userAddress"
                value={data.userAddress}
                placeholder="Enter Address..."
                rows="3"
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button
              onClick={HandleClick}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Register
            </button>
          </form>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-5 mt-8">
          {sdata.map((e, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md p-5 border"
            >
              <h2 className="text-xl font-semibold mb-4">
                User Details
              </h2>

              <p className="mb-2">
                <span className="font-semibold">Name:</span>{" "}
                {e.userName}
              </p>

              <p className="mb-2">
                <span className="font-semibold">Email:</span>{" "}
                {e.userEmail}
              </p>

              <p className="mb-2">
                <span className="font-semibold">Mobile:</span>{" "}
                {e.userNumber}
              </p>

              <p className="mb-4">
                <span className="font-semibold">Address:</span>{" "}
                {e.userAddress}
              </p>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => HandleEdit(e)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
                >
                  Edit
                </button>

                <button
                  type="button"
                  onClick={() => HandleDelete(i)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalForm;