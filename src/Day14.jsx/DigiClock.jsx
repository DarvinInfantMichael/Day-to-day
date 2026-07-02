import { useEffect, useState } from "react";

const DigiClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const data = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(data);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-[400px] text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Digital Clock
        </h1>

        <div className="text-5xl font-bold text-blue-600 mb-8">
          {time.toLocaleTimeString()}
        </div>

        <h2 className="text-lg font-semibold text-gray-600 mb-2">
          Current Date
        </h2>

        <div className="text-xl text-gray-700 font-medium">
          {time.toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default DigiClock;