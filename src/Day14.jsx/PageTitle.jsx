import { useEffect, useState } from "react";

const PageTitle = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count : ${count}`;
  }, [count]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-[420px] text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Dynamic Page Title
        </h1>

        <div className="text-6xl font-bold text-blue-600 mb-6">
          {count}
        </div>

        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default PageTitle;