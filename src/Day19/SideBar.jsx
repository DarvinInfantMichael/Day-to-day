import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";

const SideBar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <aside
      className={`w-64 h-screen p-6 shadow-lg transition-all duration-300 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-white text-gray-900"
      }`}
    >
      <h1 className="text-2xl font-bold border-b pb-4 mb-6">
        Sidebar
      </h1>

      <ul className="space-y-4">
        <li className="p-3 rounded-lg hover:bg-blue-500 hover:text-white cursor-pointer transition">
           Dashboard
        </li>

        <li className="p-3 rounded-lg hover:bg-blue-500 hover:text-white cursor-pointer transition">
           Profile
        </li>

        <li className="p-3 rounded-lg hover:bg-blue-500 hover:text-white cursor-pointer transition">
           Products
        </li>

        <li className="p-3 rounded-lg hover:bg-blue-500 hover:text-white cursor-pointer transition">
           Settings
        </li>

        <li className="p-3 rounded-lg hover:bg-red-500 hover:text-white cursor-pointer transition">
           Logout
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;