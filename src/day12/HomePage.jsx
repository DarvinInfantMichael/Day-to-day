import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
        
        <h1 className="text-3xl font-bold text-white cursor-pointer hover:scale-105 transition duration-300">
          Logo
        </h1>

        <div className="flex gap-6">
          <Link
            to="/Day12/registration"
            className="text-white font-medium px-5 py-2 rounded-lg hover:bg-white hover:text-blue-700 transition duration-300"
          >
            Registration
          </Link>

          <Link
            to="/Day12/login"
            className="bg-white text-blue-700 font-medium px-5 py-2 rounded-lg hover:bg-blue-100 hover:scale-105 transition duration-300"
          >
            Login
          </Link>
        </div>

      </div>
    </div>
  );
};

export default HomePage;