import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const DashBoard = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-xl p-8">
        <div className="border-b border-gray-200 pb-4 mb-6">
          <h1 className="text-3xl font-bold text-blue-600">
            Dashboard Information
          </h1>
          <p className="text-gray-500 mt-1">
            Welcome to your dashboard
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-slate-50 border border-gray-200 rounded-lg p-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Welcome Back, {user?.userName}
            </h2>

            <p className="text-gray-600 mt-2">
              <span className="font-semibold">Email:</span> {user?.userEmail}
            </p>
          </div>

          <button
            onClick={logout}
            className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;