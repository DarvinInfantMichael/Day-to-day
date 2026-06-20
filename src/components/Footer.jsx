import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto flex justify-center gap-8">
        <Link  className="hover:text-cyan-400 transition">
          Home
        </Link>

        <Link  className="hover:text-cyan-400 transition">
          About Us
        </Link>

        <Link  className="hover:text-cyan-400 transition">
          Courses
        </Link>

        <Link  className="hover:text-cyan-400 transition">
          Career
        </Link>
      </div>

      <div className="text-center mt-6 text-gray-400 text-sm">
        © 2026 Tech SLA. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;