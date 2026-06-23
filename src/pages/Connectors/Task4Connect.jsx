import { useState } from "react";
import DashBoard from "../../Day9/DashBoard";
import withAuth from "../../hoc/withAuth";

const Connect = withAuth(DashBoard);

function Task4Connect() {
  const [isLogin, setLogin] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-[450px]">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Authentication Dashboard
        </h2>

        <div className="flex justify-center mb-6">
          <button
            onClick={() => setLogin(!isLogin)}
            className={`px-6 py-2 rounded-md text-white ${
              isLogin ? "bg-red-600" : "bg-blue-600"
            }`}
          >
            {isLogin ? "Logout" : "Login"}
          </button>
        </div>

        <div className="border rounded-md bg-gray-50 p-6 min-h-[120px] flex items-center justify-center">
          <Connect isLogin={isLogin} />
        </div>
      </div>
    </div>
  );
}

export default Task4Connect;