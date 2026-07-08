import { useContext } from "react";
import ManagerContext from "./context/ManagerContext";

function Inputaken() {
  const { data } = useContext(ManagerContext);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          User Details
        </h1>

        <div className="space-y-4">
          <div className="border-b pb-2">
            <p className="text-gray-500 text-sm">Name</p>
            <h2 className="text-xl font-semibold text-gray-800">
              {data.name}
            </h2>
          </div>

          <div className="border-b pb-2">
            <p className="text-gray-500 text-sm">Email</p>
            <h2 className="text-xl font-semibold text-gray-800">
              {data.email}
            </h2>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Role</p>
            <h2 className="text-xl font-semibold text-gray-800">
              {data.role}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inputaken;