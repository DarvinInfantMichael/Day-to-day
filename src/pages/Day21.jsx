import { useState } from "react";
import useCounter from "../Day21/useCounter"
import useFetch from "../Day21/useFetch";
import useToggle from "../Day21/useToggle";
import useLocal from "../Day21/useLocal";
import useSearch from "../Day21/useSearch";



const Day21 = () => {

    const students =[
     "Darvin",
    "Michael",
    "John",
    "David",
    "Maria",
    "Joseph",
    "Sophia",
    "Rahul",
    "Priya",
    "Arun",
  ]

 const {count , HandleInc , HandleDec , HandleReset} = useCounter();
 const {valid,loading,error} =useFetch("https://dummyjson.com/products");
 const {toggle,HandleTog} =useToggle(false);
 const [kiii,setKiii]=useState("");
 const {value:firstname,setValue:setFirstname} =useLocal("FullName","");
 const {search,setSearch,FilteredData}=useSearch(students);



 if(loading){
    return<h1>Loading....</h1>
 }

 if(error){
    return ("Somthing Error ...");
 }
  return (
  <div className="min-h-screen bg-slate-100 p-8">
    <div className="max-w-5xl mx-auto space-y-10">

      {/* Counter */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-5">Counter App</h1>

        <p className="text-lg font-medium mb-4">
          Count :
          <span className="text-blue-600 text-2xl ml-2">{count}</span>
        </p>

        <div className="flex gap-3 flex-wrap">
          <button
            onClick={HandleInc}
            className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
          >
            Increase
          </button>

          <button
            onClick={HandleDec}
            className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700"
          >
            Decrease
          </button>

          <button
            onClick={HandleReset}
            className="bg-gray-700 text-white px-5 py-2 rounded-lg hover:bg-gray-800"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Products */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-5">
          Products
        </h1>

        <div className="grid md:grid-cols-3 gap-5">
          {valid.products.map((e, i) => (
            <div
              key={i}
              className="border rounded-xl p-4 hover:shadow-lg transition"
            >
              <h2 className="font-bold text-lg">{e.title}</h2>

              <p className="text-gray-500 capitalize">
                {e.category}
              </p>

              <p className="text-green-600 font-semibold mt-2">
                ${e.price}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Toggle */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-5">
          Password Toggle
        </h1>

        <div className="flex gap-3">
          <input
            type={toggle ? "text" : "password"}
            value={kiii}
            onChange={(e) => setKiii(e.target.value)}
            placeholder="Enter Password"
            className="border rounded-lg px-4 py-2 flex-1 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={HandleTog}
            className="bg-blue-600 text-white px-5 rounded-lg hover:bg-blue-700"
          >
            {toggle ? "Hide" : "Show"}
          </button>
        </div>
      </div>

      {/* Local Storage */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-5">
          Local Storage
        </h1>

        <input
          type="text"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          placeholder="Enter Student Name"
          className="border rounded-lg px-4 py-2 w-full outline-none focus:ring-2 focus:ring-green-500"
        />

        <h2 className="mt-4 text-xl">
          Student :
          <span className="font-semibold text-green-600">
            {" "}{firstname}
          </span>
        </h2>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-5">
          Search Students
        </h1>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Student..."
          className="border rounded-lg px-4 py-2 w-full outline-none focus:ring-2 focus:ring-purple-500"
        />

        <div className="mt-6">
          {FilteredData.length > 0 ? (
            <div className="space-y-3">
              {FilteredData.map((e, i) => (
                <div
                  key={i}
                  className="bg-purple-50 border border-purple-200 rounded-lg p-4 hover:bg-purple-100 transition"
                >
                  <h1 className="font-semibold text-lg">
                    {e}
                  </h1>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 bg-gray-100 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-500">
                No Data Found
              </h2>
            </div>
          )}
        </div>
      </div>

    </div>
  </div>
);
}

export default Day21