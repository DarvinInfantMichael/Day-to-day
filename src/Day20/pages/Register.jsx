import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const nav = useNavigate();

  const [rdata, setRdata] = useState({
    userName: "",
    userEmail: "",
    userPass: "",
  });

  const HandleChange = (e) => {
    setRdata({ ...rdata, [e.target.name]: e.target.value });
  };

  const HandleClick = (e) => {
    e.preventDefault();

    const db = JSON.parse(localStorage.getItem("AllData")) || [];

    db.push(rdata);

    localStorage.setItem("AllData", JSON.stringify(db));

    setRdata({ userName: "", userEmail: "", userPass: "" });

    nav("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-blue-600">
            Registration Form
          </h1>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Enter Name :
            </label>

            <input
              type="text"
              onChange={HandleChange}
              name="userName"
              value={rdata.userName}
              placeholder="Enter Name..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Enter Email :
            </label>

            <input
              type="email"
              onChange={HandleChange}
              name="userEmail"
              value={rdata.userEmail}
              placeholder="Enter Email..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Enter Password :
            </label>

            <input
              type="password"
              onChange={HandleChange}
              name="userPass"
              value={rdata.userPass}
              placeholder="Enter Password..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={HandleClick}
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;