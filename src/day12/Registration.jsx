import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const cns = useNavigate();

  const [userdata, setUserdata] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
  });

  const handleChange = (e) => {
    setUserdata({ ...userdata, [e.target.name]: e.target.value });
  };

  const HandleClick = (e) => {
    e.preventDefault();

    if (!userdata.userName || !userdata.userEmail || !userdata.userPassword) {
      alert("Enter All Fields..");
      return;
    }

    const ans = JSON.parse(localStorage.getItem("Data")) || [];

    const checkmail = ans.find(
      (e) => e.userEmail === userdata.userEmail
    );

    if (checkmail) {
      alert("Email Exists, Enter New Email");
      return;
    }

    ans.push(userdata);

    localStorage.setItem("Data", JSON.stringify(ans));

    alert("Data Added Successfully...");

    setUserdata({
      userName: "",
      userEmail: "",
      userPassword: "",
    });

    cns("/Day12/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 p-5">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 hover:scale-[1.01] transition duration-300">
        
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Registration Form
        </h1>

        <form onSubmit={HandleClick} className="space-y-5">

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Enter Name
            </label>
            <input
              type="text"
              onChange={handleChange}
              name="userName"
              value={userdata.userName}
              placeholder="Enter Name..."
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Enter Email
            </label>
            <input
              type="email"
              onChange={handleChange}
              name="userEmail"
              value={userdata.userEmail}
              placeholder="Enter Email..."
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Enter Password
            </label>
            <input
              type="password"
              onChange={handleChange}
              name="userPassword"
              value={userdata.userPassword}
              placeholder="Enter Password..."
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300"
            />
          </div>

          <input
            type="submit"
            value="Register"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold cursor-pointer hover:bg-blue-700 hover:shadow-lg hover:scale-[1.02] transition duration-300"
          />

        </form>
      </div>
    </div>
  );
};

export default Registration;