import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const csn = useNavigate();

  const [userdata, setUserdata] = useState({
    userEmail: "",
    userPassword: "",
  });

  const handleChange = (e) => {
    setUserdata({
      ...userdata,
      [e.target.name]: e.target.value,
    });
  };

  const HandleClick = (e) => {
    e.preventDefault();

    if (!userdata.userEmail || !userdata.userPassword) {
      alert("Enter All Fields..");
      return;
    }

    const ans = JSON.parse(localStorage.getItem("Data")) || [];

    const checkmail = ans.find(
      (e) =>
        e.userEmail === userdata.userEmail &&
        e.userPassword === userdata.userPassword
    );

    if (!checkmail) {
      alert("User Not Found...");
      return;
    }

    localStorage.setItem("Auth", JSON.stringify(checkmail));

    setUserdata({
      userEmail: "",
      userPassword: "",
    });

    csn("/Day12/dashBoard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 p-5">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 hover:scale-[1.01] transition duration-300">

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Login Form
        </h1>

        <form onSubmit={HandleClick} className="space-y-5">

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Enter Email
            </label>

            <input
              type="email"
              name="userEmail"
              value={userdata.userEmail}
              onChange={handleChange}
              placeholder="Enter Email..."
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Enter Password
            </label>

            <input
              type="password"
              name="userPassword"
              value={userdata.userPassword}
              onChange={handleChange}
              placeholder="Enter Password..."
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300"
            />
          </div>

          <input
            type="submit"
            value="Login"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold cursor-pointer hover:bg-blue-700 hover:shadow-lg hover:scale-[1.02] transition duration-300"
          />

        </form>

      </div>
    </div>
  );
};

export default LoginForm;