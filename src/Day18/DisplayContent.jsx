import { useRef } from "react";

const DisplayContent = () => {
  const inputRef = useRef();
  const displayRef = useRef();

  const HandleChange = () => {
    displayRef.current.textContent = inputRef.current.value;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-[400px]">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Display Content
        </h1>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Enter Text..."
            ref={inputRef}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={HandleChange}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Display
          </button>
        </div>

        <div className="mt-6 text-center">
          <h1
            ref={displayRef}
            className="text-2xl font-semibold text-green-600 break-words"
          ></h1>
        </div>
      </div>
    </div>
  );
};

export default DisplayContent;