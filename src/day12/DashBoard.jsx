
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  const csn = useNavigate();

  

  
    const authData = JSON.parse(localStorage.getItem("Auth"));

    

  const logout = () => {
    localStorage.removeItem("Auth");
    csn("/Day12/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 flex items-center justify-center p-5">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl p-10 text-center hover:scale-[1.01] transition duration-300">

        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          User Dashboard
        </h1>

        <div className="space-y-5 mb-8">
          <div className="bg-gray-100 p-4 rounded-xl shadow-sm">
            <p className="text-gray-500 text-sm">Username</p>
            <h2 className="text-xl font-semibold text-gray-800">
              {authData.userName}
            </h2>
          </div>

          <div className="bg-gray-100 p-4 rounded-xl shadow-sm">
            <p className="text-gray-500 text-sm">Email Address</p>
            <h2 className="text-xl font-semibold text-gray-800">
              {authData.userEmail}
            </h2>
          </div>
        </div>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 hover:scale-105 hover:shadow-lg transition duration-300"
        >
          Logout
        </button>

      </div>
    </div>
  );
};

export default DashBoard;