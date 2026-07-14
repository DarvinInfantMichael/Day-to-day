



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
            onClick={() => nav("/Day11")}
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
            Day 11
          </h2>


          <p className="text-gray-600 mb-6">
            Form Handling
          </p>


          <button
            onClick={() => nav("/Day11")}
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
            Day 12
          </h2>


          <p className="text-gray-600 mb-6">
            Registration,Login and Dashboard.
          </p>


          <button
            onClick={() => nav("/Day12")}
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
            Day 13
          </h2>


          <p className="text-gray-600 mb-6">
            Form Handling Work.
          </p>


          <button
            onClick={() => nav("/Day13")}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold"
          >
            View Project
          </button>
        </div>


        <div className="bg-green-300 rounded-2xl shadow-2xl p-6 text-center">
          <div className="w-20 h-20 mx-auto mb-5 rounded-full flex items-center justify-center bg-purple-700">
          <span className="text-4xl">🔥</span>
          </div>

          <h2 className="text-2xl font-bold mb-2">
            Day14
          </h2>
          <p>
            UseEffects and concepts
          </p>

          <button
          onClick={()=>nav("/Day14")} 
          className="bg-amber-100  p-3 w-full rounded-2xl font-bold mt-4 ">View Work</button>

        </div>

        <div className="bg-amber-200 rounded-2xl shadow-2xl p-6 text-center">
          <div className="w-20 h-20 bg-blue-300 rounded-full flex items-center mx-auto justify-center">
            <span className="text-4xl">🚀</span></div>
            <div>
              <h1 className="text-2xl font-bold mb-2 mt-5">
                Day15
              </h1>
              <h1>User Search Process</h1>
            </div>
            <div>
              <button onClick={()=>nav("/Day15")} className="bg-red-600 p-3 w-full rounded-2xl mt-4 text-white font-bold">View Work</button>
            </div>

        </div>


        <div className="bg-amber-200 rounded-2xl shadow-2xl p-6 text-center">
          <div className="w-20 h-20 bg-blue-300 rounded-full flex items-center mx-auto justify-center">
            <span className="text-4xl">🔥</span></div>
            <div>
              <h1 className="text-2xl font-bold mb-2 mt-5">
                Day16
              </h1>
              <h1>User Fetching Data</h1>
            </div>
            <div>
              <button onClick={()=>nav("/Day16")} className="bg-red-600 p-3 w-full rounded-2xl mt-4 text-white font-bold">View Work</button>
            </div>

        </div>


        <div className="bg-pink-400 rounded-2xl shadow-2xl p-6 text-center">
          <div className="w-20 h-20 rounded-full bg-amber-200 flex items-center justify-center mx-auto">
            <span className="text-4xl">🚀</span>
          </div>
           <div>
              <h1 className="text-2xl font-bold mb-2 mt-5">
                Day17
              </h1>
              <h1>User Fetching and Todo Data</h1>
            </div>
            <div>
              <button onClick={()=>nav("/Day17")} className="bg-red-600 p-3 w-full rounded-2xl mt-4 text-white font-bold">View Work</button>
            </div>

        </div>


        <div className="bg-green-200 rounded-2xl shadow-2xl">
          <div className="w-20 h-20 bg-amber-200 rounded-full mx-auto mt-5 flex items-center justify-center"> <span className="text-4xl">💻</span></div>
          <div className="flex items-center justify-center mt-5">
            <h1 className="text-2xl font-bold">Day18</h1>
            
          </div>
          <div className="flex items-center justify-center mt-4 flex-col">
            <h2>User Ref</h2>
            <button onClick={()=>nav("/Day18")}className="bg-black p-3 w-80 rounded-2xl text-amber-50 mt-3">Use It</button>
          </div>
        </div>


        <div className="bg-red-200 rounded-2xl shadow-2xl">
          <div className="w-20 h-20 bg-amber-200 rounded-full mx-auto mt-5 flex items-center justify-center"> <span className="text-4xl">💻</span></div>
          <div className="flex items-center justify-center mt-5">
            <h1 className="text-2xl font-bold">Day19</h1>
            
          </div>
          <div className="flex items-center justify-center mt-4 flex-col">
            <h2>User Context Processing</h2>
            <button onClick={()=>nav("/Day19")}className="bg-black p-3 w-80 rounded-2xl text-amber-50 mt-3">Use It</button>
          </div>
        </div>


      <div className="bg-pink-400 rounded-2xl shadow-2xl p-6 text-center">
          <div className="w-20 h-20 rounded-full bg-amber-200 flex items-center justify-center mx-auto">
            <span className="text-4xl">🚀</span>
          </div>
           <div>
              <h1 className="text-2xl font-bold mb-2 mt-5">
                Day20
              </h1>
              <h1>User Fetching and Todo Data</h1>
            </div>
            <div>
              <button onClick={()=>nav("/Day20")} className="bg-red-600 p-3 w-full rounded-2xl mt-4 text-white font-bold">View Work</button>
            </div>

        </div>


        <div className="bg-amber-100 rounded-2xl shadow-2xl p-6 text-center ">
          <div className="bg-red-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto"><span className="text-4xl">🔥</span> </div>

          <div className="mt-5 text-2xl font-bold">
            <h1>Day21</h1>
          </div>

          <div>
            <p>UseHooks Concepts Here</p>
          </div>

          <div>
            <button onClick={()=>nav("/Day21")} className="bg-red-600 p-3 w-full rounded-2xl text-white font-bold mt-4">View Process</button>
          </div>


        </div>



         <div className="bg-yellow-400 rounded-2xl shadow-2xl p-6 text-center ">
          <div className="bg-red-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto"><span className="text-4xl">🔥</span> </div>

          <div className="mt-5 text-2xl font-bold">
            <h1>Day22</h1>
          </div>

          <div>
            <p>UseHooks Concepts Here</p>
          </div>

          <div>
            <button onClick={()=>nav("/Day22")} className="bg-red-600 p-3 w-full rounded-2xl text-white font-bold mt-4">View Process</button>
          </div>


        </div>

        



        

      </div>
    </div>
  );
};


export default Daycard;

