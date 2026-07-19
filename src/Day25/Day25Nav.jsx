import { Link, NavLink } from "react-router-dom";

const Day25Nav = () => {
  return (
    <nav className="w-full border-b border-gray-200 bg-white px-6 py-4 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        <h1 className="text-xl font-bold text-gray-900">
          Day 25
        </h1>

        <div className="flex items-center gap-8">

          <NavLink
            to="/Day25"
            end
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${
                isActive
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/Day25/products"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${
                isActive
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/Day25/profile"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${
                isActive
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`
            }
          >
            Profile
          </NavLink>

        </div>

      </div>
    </nav>
  );
};

export default Day25Nav;