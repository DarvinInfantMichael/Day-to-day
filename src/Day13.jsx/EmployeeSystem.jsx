import { useState } from "react";

const EmployeeSystem = () => {
  const [usedata, setUsedata] = useState({
    userName: "",
    userID: "",
    userDept: "",
    useSalary: "",
  });

  const [savadata, setSavadata] = useState(() => {
    return JSON.parse(localStorage.getItem("Items")) || [];
  });

  const [edit, setEdit] = useState(null);

  const HandleChange = (e) => {
    setUsedata({
      ...usedata,
      [e.target.name]: e.target.value,
    });
  };

  const HandleClick = (e) => {
    e.preventDefault();

    const res = [...savadata];

    if (edit !== null) {
      res[edit] = usedata;
      setEdit(null);
    } else {
      res.push(usedata);
    }

    localStorage.setItem("Items", JSON.stringify(res));

    setSavadata(res);

    setUsedata({
      userName: "",
      userID: "",
      userDept: "",
      useSalary: "",
    });
  };

  const Handleit = (e, i) => {
    setUsedata(e);
    setEdit(i);
  };

  const HandleDelete = (id) => {
    const update = savadata.filter((_, i) => i !== id);

    setSavadata(update);

    localStorage.setItem("Items", JSON.stringify(update));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      {/* Form Card */}
      <div className="bg-white shadow-lg rounded-xl p-8 w-[450px]">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Employee Management System
        </h1>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            name="userName"
            value={usedata.userName}
            onChange={HandleChange}
            placeholder="Employee Name"
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="number"
            name="userID"
            value={usedata.userID}
            onChange={HandleChange}
            placeholder="Employee ID"
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <select
            name="userDept"
            value={usedata.userDept}
            onChange={HandleChange}
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Department</option>
            <option value="IT">IT</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
          </select>

          <input
            type="number"
            name="useSalary"
            value={usedata.useSalary}
            onChange={HandleChange}
            placeholder="Employee Salary"
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="button"
            onClick={HandleClick}
            className={`text-white py-3 rounded-lg transition ${
              edit !== null
                ? "bg-yellow-500 hover:bg-yellow-600"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {edit !== null ? "Update Employee" : "Register Employee"}
          </button>
        </form>
      </div>

      {/* Employee Table */}
      <div className="mt-10 w-[90%] overflow-x-auto">
        <table className="w-full bg-white shadow-lg rounded-xl overflow-hidden">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-4">Employee Name</th>
              <th className="p-4">Employee ID</th>
              <th className="p-4">Department</th>
              <th className="p-4">Salary</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {savadata.map((e, i) => (
              <tr
                key={i}
                className="text-center border-b hover:bg-gray-100"
              >
                <td className="p-4">{e.userName}</td>
                <td className="p-4">{e.userID}</td>
                <td className="p-4">{e.userDept}</td>
                <td className="p-4">{e.useSalary}</td>

                <td className="p-4 flex justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => Handleit(e, i)}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() => HandleDelete(i)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeSystem;