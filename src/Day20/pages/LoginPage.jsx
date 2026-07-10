import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const nav = useNavigate();

  const { login } = useContext(AuthContext);

  const [ldata, setLdata] = useState({
    userEmail: "",
    userPass: "",
  });

  const HandleChange = (e) => {
    setLdata({ ...ldata, [e.target.name]: e.target.value });
  };

  const HandleClick = (e) => {
    e.preventDefault();

    const gg = JSON.parse(localStorage.getItem("AllData")) || [];

    const filter = gg.find(
      (e) =>
        e.userEmail == ldata.userEmail && e.userPass == ldata.userPass
    );

    if (!filter) {
      alert("Invalid User");
      return;
    }

    alert("Login Successfully");
    login(filter);
    nav("/dash");

    setLdata({ userEmail: "", userPass: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-blue-600">
            Login Processing
          </h1>
          <p className="text-gray-500 mt-2">
            Sign in to continue
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Enter Registered Email :
            </label>

            <input
              type="email"
              onChange={HandleChange}
              name="userEmail"
              value={ldata.userEmail}
              placeholder="Enter Registered Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Enter Registered Password :
            </label>

            <input
              type="password"
              onChange={HandleChange}
              name="userPass"
              value={ldata.userPass}
              placeholder="Enter Registered Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={HandleClick}
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Login Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;