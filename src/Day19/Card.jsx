import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";

const Card = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        className={`w-80 p-6 rounded-xl shadow-lg transition-all duration-300 ${
          theme === "dark"
            ? "bg-gray-900 text-white"
            : "bg-white text-gray-900"
        }`}
      >
        <h1 className="text-2xl font-bold mb-3">Card</h1>

        <p className="text-gray-500 dark:text-red-700 font-bold mb-4">
          This card changes its theme using React Context API.
        </p>

        <button
          className={`px-4 py-2 rounded-lg font-semibold ${
            theme === "dark"
              ? "bg-blue-600 hover:bg-blue-700 text-black"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;