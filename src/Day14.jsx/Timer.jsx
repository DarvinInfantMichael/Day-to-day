import { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const stime = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(stime);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-[400px] text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Timer Application
        </h1>

        <div className="text-7xl font-bold text-blue-600 mb-4">
          {time}
        </div>

        <p className="text-gray-500 text-lg">
          Seconds Elapsed
        </p>
      </div>
    </div>
  );
};

export default Timer;