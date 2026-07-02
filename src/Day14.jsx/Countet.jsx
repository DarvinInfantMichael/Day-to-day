import { useEffect, useState } from "react";

const Countet = () => {
  const [data, setData] = useState(0);

  useEffect(() => {
    const dir = setInterval(() => {
      setData((prev) => prev + 1);
    }, 7000);

    return () => clearInterval(dir);
  }, []);

  useEffect(() => {
    console.log("Count Updated..");
  }, [data]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-96 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Counter Application
        </h2>

        <div className="text-6xl font-bold text-blue-600 mb-4">
          {data}
        </div>

        <h1 className="text-xl font-semibold text-gray-700">
          Count = {data}
        </h1>
      </div>
    </div>
  );
};

export default Countet;