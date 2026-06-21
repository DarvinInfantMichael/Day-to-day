import { useState } from "react";

const Student = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setcourse] = useState("");
  const [city, setcity] = useState("");
  const [contact, setContact] = useState("");

  const [details, setDetails] = useState([]);

  const HandleSubmit = (e) => {
    e.preventDefault();

    setDetails([
      ...details,
      {
        name,
        age,
        course,
        city,
        contact,
      },
    ]);

    setName("");
    setAge("");
    setcourse("");
    setcity("");
    setContact("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-800 to-cyan-600 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8">

        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
           Student Registration Form
        </h1>

        <form onSubmit={HandleSubmit} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block font-semibold mb-2">
              Student Name
            </label>

            <input
              type="text"
              value={name}
              placeholder="Enter Name..."
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Age */}
          <div>
            <label className="block font-semibold mb-2">
              Age
            </label>

            <input
              type="number"
              value={age}
              placeholder="Enter Age..."
              onChange={(e) => setAge(e.target.value)}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Course */}
          <div>
            <label className="block font-semibold mb-2">
              Course
            </label>

            <input
              type="text"
              value={course}
              placeholder="Enter Course..."
              onChange={(e) => setcourse(e.target.value)}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* City */}
          <div>
            <label className="block font-semibold mb-2">
              City
            </label>

            <select
              value={city}
              onChange={(e) => setcity(e.target.value)}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">--Select City--</option>
              <option>Chennai</option>
              <option>Trichy</option>
              <option>Madurai</option>
              <option>Kanyakumari</option>
            </select>
          </div>

          {/* Contact */}
          <div>
            <label className="block font-semibold mb-2">
              Contact Number
            </label>

            <input
              type="number"
              value={contact}
              placeholder="Enter Contact Number..."
              onChange={(e) => setContact(e.target.value)}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-300"
          >
            Submit
          </button>

        </form>

        {/* Student Details */}
        {details.length > 0 && (
          <div className="mt-10">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Registered Students
            </h2>

            <div className="space-y-4">
              {details.map((student, i) => (
                <div
                  key={i}
                  className="bg-blue-50 border border-blue-200 rounded-xl p-5 shadow-md"
                >
                  <p><span className="font-semibold"> Name:</span> {student.name}</p>
                  <p><span className="font-semibold"> Age:</span> {student.age}</p>
                  <p><span className="font-semibold"> Course:</span> {student.course}</p>
                  <p><span className="font-semibold"> City:</span> {student.city}</p>
                  <p><span className="font-semibold"> Contact:</span> {student.contact}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Student;