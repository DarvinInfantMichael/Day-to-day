import { useState } from "react";

const Ageinput = () => {
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [mbi, setMbi] = useState("");
  const [message, setMessage] = useState("");
  const [showEmail, setShowEmail] = useState("");

  const HandleEmail = () => {
    setShowEmail(email);

    if (email.includes("@")) {
      alert("Valid User Email");
      setMessage("✅ Valid Email");
    } else {
      alert("Invalid Email");
      setMessage("❌ Invalid Email");
    }
  };

  const handleMobile = () => {
    const mii = /^[0-9]{10}$/;

    if (mii.test(mbi)) {
      alert("Valid Mobile Number");
    } else {
      alert("Invalid Mobile Number");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-800 to-cyan-600 flex justify-center items-center p-6">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl p-8">

        <h1 className="text-3xl font-bold text-center text-slate-800 mb-8">
          Age, Email & Mobile Validation
        </h1>

        {/* Age */}

        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Age
          </label>

          <input
            type="number"
            placeholder="Enter Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500"
          />

          <h2 className="mt-3 text-lg font-medium text-blue-700">
            User Age: {age}
          </h2>
        </div>

        {/* Email */}

        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:border-green-500"
          />

          <button
            onClick={HandleEmail}
            className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Validate Email
          </button>

          {showEmail && (
            <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4">
              <h2 className="font-semibold">
                Email: {showEmail}
              </h2>

              <p className="text-green-700 font-medium">
                {message}
              </p>
            </div>
          )}
        </div>

        {/* Mobile */}

        <div>
          <label className="block font-semibold mb-2">
            Mobile Number
          </label>

          <input
            type="text"
            placeholder="Enter Mobile Number"
            value={mbi}
            onChange={(e) => setMbi(e.target.value)}
            className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:border-purple-500"
          />

          <button
            onClick={handleMobile}
            className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Check Mobile Number
          </button>

          {mbi && (
            <div className="mt-4 bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h2 className="font-semibold">
                Mobile Number: {mbi}
              </h2>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Ageinput;