



import { useNavigate } from "react-router-dom";


const Daycard = () => {
  const nav = useNavigate();


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-800 to-cyan-600 py-12 px-6">


      <h1 className="text-4xl font-bold text-center text-white mb-10">
        My React Projects
      </h1>


      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


        {/* Day 1 */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 text-center hover:scale-105 transition duration-300">
          <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="text-4xl">📘</span>
          </div>


          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Day 1
          </h2>


          <p className="text-gray-600 mb-6">
            Introduction to React and JSX fundamentals.
          </p>


          <button
          onClick={() => window.location.href = "https://task-rho-rust.vercel.app/"}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
          >
            View Project
          </button>
        </div>


        {/* Day 2 */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 text-center hover:scale-105 transition duration-300">
          <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-green-100 flex items-center justify-center">
            <span className="text-4xl">⚛️</span>
          </div>


          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Day 2
          </h2>


          <p className="text-gray-600 mb-6">
            React Components and reusable UI development.
          </p>


          <button
            onClick={() => window.location.href = "https://navi-route.vercel.app/"}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold"
          >
            View Project
          </button>
        </div>


        {/* Day 3 */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 text-center hover:scale-105 transition duration-300">
          <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-purple-100 flex items-center justify-center">
            <span className="text-4xl">💻</span>
          </div>


          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Day 3
          </h2>


          <p className="text-gray-600 mb-6">
            Props, reusable components, and Tailwind CSS.
          </p>


          <button
            onClick={() => nav("/Day3")}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold"
          >
            View Project
          </button>
        </div>


   
        <div className="bg-white rounded-2xl shadow-2xl p-6 text-center hover:scale-105 transition duration-300">
          <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="text-4xl">📘</span>
          </div>


          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Day 4
          </h2>


          <p className="text-gray-600 mb-6">
            Props Map fucntions, reusable components, and Tailwind CSS with Grid.
          </p>


          <button
          onClick={() => window.location.href = "https://day4-task-six.vercel.app/"}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
          >
            View Project
          </button>
        </div>




        <div className="bg-white rounded-2xl shadow-2xl p-6 text-center hover:scale-105 transition duration-300">
          <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-purple-100 flex items-center justify-center">
            <span className="text-4xl ">🎨</span>
          </div>


          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Day 5
          </h2>


          <p className="text-gray-600 mb-6">
            Props, reusable components, and Tailwind CSS.
          </p>


          <button
            onClick={() => nav("/Day5")}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold"
          >
            View Project
          </button>
        </div>
       


        <div className="bg-white rounded-2xl shadow-2xl p-6 text-center hover:scale-105 transition duration-300">
          <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-purple-100 flex items-center justify-center">
            <span className="text-4xl">🔥</span>
          </div>


          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Day 6
          </h2>


          <p className="text-gray-600 mb-6">
            Props, reusable components, and Tailwind CSS.
          </p>


          <button
            onClick={() => nav("/Day6")}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold"
          >
            View Project
          </button>
        </div>




        <div className="bg-white rounded-2xl shadow-2xl p-6 text-center hover:scale-105 transition duration-300">
          <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-purple-100 flex items-center justify-center">
            <span className="text-4xl">🚀</span>
          </div>


          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Day 7
          </h2>


          <p className="text-gray-600 mb-6">
            Props, reusable components, and Tailwind CSS.
          </p>


          <button
            onClick={() => nav("/Day7")}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold"
          >
            View Project
          </button>
        </div>

        
        <div className="bg-white rounded-2xl shadow-2xl p-6 text-center hover:scale-105 transition duration-300">
          <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-purple-100 flex items-center justify-center">
            <span className="text-4xl ">🎨</span>
          </div>


          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Day 8
          </h2>


          <p className="text-gray-600 mb-6">
            Different uses by using UseState
          </p>


          <button
            onClick={() => nav("/Day8")}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold"
          >
            View Project
          </button>
        </div>


         
        <div className="bg-white rounded-2xl shadow-2xl p-6 text-center hover:scale-105 transition duration-300">
          <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-purple-100 flex items-center justify-center">
            <span className="text-4xl ">🎨</span>
          </div>


          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Day 9
          </h2>


          <p className="text-gray-600 mb-6">
            Different uses of HOC
          </p>


          <button
            onClick={() => nav("/Day9")}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold"
          >
            View Project
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-6 text-center hover:scale-105 transition duration-300">
          <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-purple-100 flex items-center justify-center">
            <span className="text-4xl ">🎨</span>
          </div>


          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Day 10
          </h2>


          <p className="text-gray-600 mb-6">
            Different uses of HOC
          </p>


          <button
            onClick={() => nav("/Day10")}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold"
          >
            View Project
          </button>
        </div>

      </div>
    </div>
  );
};


export default Daycard;

