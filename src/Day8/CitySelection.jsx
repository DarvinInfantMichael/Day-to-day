import { useState } from "react";

const CitySelection = () => {
  const [city, setCity] = useState("");
  const [course, setCourse] = useState("");

  const [word, setWord] = useState("");
  const [count, setCount] = useState("");
  const [count1, setCount1] = useState("");

  const handleword = () => {
    setCount(word.length);
  };

  const handlecount = () => {
    setCount1(word.split(" ").filter((word) => word !== "").length);
  };

  const [text, setText] = useState("");
  const [res, setRes] = useState("");

  const handleu = () => {
    setRes(text.toUpperCase());
  };

  const handlel = () => {
    setRes(text.toLowerCase());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-800 to-cyan-600 py-10 px-6">
      <h1 className="text-4xl font-bold text-center text-white mb-10">
        React useState Practice
      </h1>

      <div className="max-w-5xl mx-auto grid gap-8">

        {/* City Selection */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-5">
            🏙️ City Selection
          </h2>

          <label className="font-semibold">Select City</label>

          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full mt-2 p-3 border rounded-lg"
          >
            <option value="">-- Select City --</option>
            <option value="Chennai">Chennai</option>
            <option value="Trichy">Trichy</option>
            <option value="Madurai">Madurai</option>
            <option value="Namakkal">Namakkal</option>
            <option value="Coimbatore">Coimbatore</option>
          </select>

          <h3 className="mt-4 font-semibold text-blue-600">
            Selected City: {city}
          </h3>
        </div>

        {/* Course */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h2 className="text-2xl font-bold text-green-700 mb-5">
            📚 Course Registration
          </h2>

          <label className="font-semibold">Select Course</label>

          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="w-full mt-2 p-3 border rounded-lg"
          >
            <option value="">-- Select Course --</option>
            <option value="Communication">Communication</option>
            <option value="FullStack Developer">
              FullStack Developer
            </option>
            <option value="Sales And Marketing">
              Sales And Marketing
            </option>
            <option value="Foundation of Programming">
              Foundation of Programming
            </option>
            <option value="Data Analytics">
              Data Analytics
            </option>
          </select>

          <h3 className="mt-4 font-semibold text-green-600">
            Selected Course: {course}
          </h3>
        </div>

        {/* Character Counter */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h2 className="text-2xl font-bold text-purple-700 mb-5">
            🔢 Character & Word Counter
          </h2>

          <input
            type="text"
            value={word}
            placeholder="Enter your message..."
            onChange={(e) => setWord(e.target.value)}
            className="w-full p-3 border rounded-lg"
          />

          <div className="flex gap-4 mt-5">
            <button
              onClick={handlecount}
              className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
            >
              Word Count
            </button>

            <button
              onClick={handleword}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
            >
              Character Count
            </button>
          </div>

          <h3 className="mt-5 font-semibold">
            Word Count: {count1}
          </h3>

          <h3 className="font-semibold">
            Character Count: {count}
          </h3>
        </div>

        {/* Upper Lower */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h2 className="text-2xl font-bold text-red-700 mb-5">
            🔠 Uppercase & Lowercase Converter
          </h2>

          <input
            type="text"
            value={text}
            placeholder="Enter Text"
            onChange={(e) => setText(e.target.value)}
            className="w-full p-3 border rounded-lg"
          />

          <div className="flex gap-4 mt-5">
            <button
              onClick={handleu}
              className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700"
            >
              To Uppercase
            </button>

            <button
              onClick={handlel}
              className="bg-pink-600 text-white px-5 py-2 rounded-lg hover:bg-pink-700"
            >
              To Lowercase
            </button>
          </div>

          {res && (
            <h3 className="mt-5 text-lg font-semibold text-red-600">
              Converted Result: {res}
            </h3>
          )}
        </div>

      </div>
    </div>
  );
};

export default CitySelection;