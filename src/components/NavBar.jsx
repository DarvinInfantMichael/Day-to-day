import {Link} from "react-router-dom"

const NavBar = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-800 to-cyan-600   p-3 flex justify-between items-center">
      <img src="/dim.png" className="w-25 h-15 rounded" />

      <div className="flex gap-7 mx-5">
        <Link to="/" className="bg-amber-100 rounded p-3 text-black font-bold">Home</Link>
        <Link to="/about" className="bg-amber-100 rounded p-3 text-black font-bold">About</Link>
        <Link to="/projects" className="bg-amber-100 rounded p-3 text-black font-bold">Projects</Link>
        <Link to="/tasks" className="bg-amber-100 rounded p-3 text-black font-bold">Tasks</Link>
        <Link to="/contact" className="bg-amber-100 rounded p-3 text-black font-bold">Contact</Link>
      </div>
    </div>
  );
};

export default NavBar;

