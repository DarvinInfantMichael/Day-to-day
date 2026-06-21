import { useState } from "react";

const Login = () => {
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");
  const [details, setDetails] = useState([]);

  const handleLogin = (e) => {
    e.preventDefault();

    setDetails([
      ...details,
      {
        uname,
        pass,
      },
    ]);

    setUname("");
    setPass("");
  };

  const [input, setInput] = useState("");
  const [mes, setMes] = useState([]);

  const handleText = (e) => {
    e.preventDefault();

    setMes([...mes, { input }]);

    setInput("");
  };

  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-800 to-cyan-600 py-10 px-6">
      <h1 className="text-4xl font-bold text-center text-white mb-10">
        React Form Practice
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-5">
            🔐 Login Form
          </h2>

          <form onSubmit={handleLogin}>
            <label className="block font-semibold mb-2">
              Username
            </label>

            <input
              type="text"
              value={uname}
              placeholder="Enter Username..."
              onChange={(e) => setUname(e.target.value)}
              className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label className="block font-semibold mb-2">
              Password
            </label>

            <input
              type="password"
              value={pass}
              placeholder="Enter Password..."
              onChange={(e) => setPass(e.target.value)}
              className="w-full border rounded-lg p-3 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
            >
              Login
            </button>
          </form>

          {details.length > 0 && (
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-3">
                User Details
              </h3>

              {details.map((user, i) => (
                <div
                  key={i}
                  className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-3"
                >
                  <p>
                    <strong>Username:</strong> {user.uname}
                  </p>

                  <p>
                    <strong>Password:</strong> {user.pass}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Feedback Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-6">
          <h2 className="text-2xl font-bold text-green-700 mb-5">
            💬 Feedback Form
          </h2>

          <textarea
            rows="5"
            value={input}
            placeholder="Enter Your Feedback..."
            onChange={(e) => setInput(e.target.value)}
            className="w-full border rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>

          <button
            onClick={handleText}
            className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold"
          >
            Show Feedback
          </button>

          {mes.length > 0 && (
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-3">
                Your Feedback
              </h3>

              {mes.map((item, i) => (
                <div
                  key={i}
                  className="bg-green-50 border border-green-200 rounded-xl p-4 mb-3"
                >
                  {item.input}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Search Box */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:col-span-2">
          <h2 className="text-2xl font-bold text-purple-700 mb-5">
            🔍 Search Box
          </h2>

          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          {search && (
            <div className="mt-5 bg-purple-50 border border-purple-200 rounded-xl p-4">
              <h3 className="font-semibold text-lg">
                Searching For:
              </h3>

              <p className="text-purple-700 font-medium">
                {search}
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Login;