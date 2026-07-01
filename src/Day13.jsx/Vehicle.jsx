import { useState } from "react";

const Vehicle = () => {
  const [userdata, setUserdata] = useState({
    VehicleNo: "",
    OwnerName: "",
    VehiType: "",
  });

  const [saveData, setSaveData] = useState(() => {
    return JSON.parse(localStorage.getItem("Items")) || [];
  });

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
      VehicleNo: "",
      OwnerName: "",
      VehiType: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      {/* Form Card */}
      <div className="bg-white shadow-lg rounded-xl p-8 w-[420px]">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Vehicle Registration System
        </h1>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            name="VehicleNo"
            value={userdata.VehicleNo}
            onChange={HandleChange}
            placeholder="Enter Vehicle Number..."
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <select
            value={userdata.VehiType}
            name="VehiType"
            onChange={HandleChange}
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Vehicle Type</option>
            <option value="Two Wheeler">Two Wheeler</option>
            <option value="Four Wheeler">Four Wheeler</option>
            <option value="Heavy Vehicle">Heavy Vehicle</option>
          </select>

          <input
            type="text"
            name="OwnerName"
            value={userdata.OwnerName}
            onChange={HandleChange}
            placeholder="Enter Owner Name..."
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            onClick={HandleClick}
            className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Register Vehicle
          </button>
        </form>
      </div>

      {/* Vehicle Cards */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {saveData.map((e, i) => (
          <div
            key={i}
            className="bg-white shadow-lg rounded-xl p-5 w-[320px] border border-gray-200"
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              {e.VehicleNo}
            </h2>

            <p className="text-gray-700">
              <span className="font-semibold">Vehicle Type:</span>{" "}
              {e.VehiType}
            </p>

            <p className="text-gray-700 mt-2">
              <span className="font-semibold">Owner Name:</span>{" "}
              {e.OwnerName}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vehicle;