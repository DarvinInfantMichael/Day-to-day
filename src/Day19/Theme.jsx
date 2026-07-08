import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";

function Theme() {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-20 flex justify-center items-center p-6 ${
        theme === "dark"
          ? "bg-gray-950"
          : "bg-gradient-to-r from-cyan-100 to-blue-100"
      }`}
    >
      <header
        className={`w-full max-w-5xl flex justify-between items-center px-8 py-4 rounded-2xl shadow-xl ${
          theme === "dark"
            ? "bg-gray-800 border border-gray-700 text-white"
            : "bg-white/80 backdrop-blur-md border border-gray-200 text-gray-800"
        }`}
      >
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-sm text-gray-500">
            Theme Switcher Using Context API
          </p>
        </div>

        <button
          onClick={toggle}
          className={`px-6 py-2 rounded-full font-semibold transition duration-300 ${
            theme === "dark"
              ? "bg-white text-gray-900 hover:bg-gray-200"
              : "bg-gray-900 text-white hover:bg-gray-700"
          }`}
        >
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
    </div>
  );
}

export default Theme;