import { useEffect } from "react";

const Pageload = () => {
  useEffect(() => {
    console.log("Component Loading...");
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-[450px] text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">
          Page Loading...
        </h1>

        <div className="bg-green-100 border border-green-300 rounded-lg p-5">
          <h1 className="text-xl font-semibold text-green-700">
            Component Loaded Successfully
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Pageload;