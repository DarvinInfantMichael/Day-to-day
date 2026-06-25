import { useState } from "react";

const EmployeeForm = () => {
  const [data, setData] = useState({
    eName: "",
    eID: "",
    eDept: "",
    eSal: "",
  });

  const [savedata, setSavedata] = useState(() => {
    return JSON.parse(localStorage.getItem("User")) || [];
  });

  const [edit, setEdit] = useState(null);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (!data.eName || !data.eID || !data.eDept || !data.eSal) {
      alert("Please fill all fields");
      return;
    }

    if (data.eSal < 10000) {
      alert("Salary should be at least 10000");
      return;
    }

    const res = [...savedata];

    if (edit !== null) {
      res[edit] = data;
      alert("Employee Updated Successfully");
      setEdit(null);
    } else {
      res.push(data);
      alert("Employee Added Successfully");
    }

    localStorage.setItem("User", JSON.stringify(res));
    setSavedata(res);

    setData({
      eName: "",
      eID: "",
      eDept: "",
      eSal: "",
    });
  };

  const HandleEdit = (employee, index) => {
    setData(employee);
    setEdit(index);
  };

  const HandleDelete = (id) => {
    const updatedData = savedata.filter((_, i) => i !== id);

    setSavedata(updatedData);
    localStorage.setItem("User", JSON.stringify(updatedData));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10 px-4">
      <div className="w-full max-w-4xl">
        
        {/* Form Card */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
          <h1 className="text-3xl font-bold text-center mb-6">
            Employee Form
          </h1>

          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">
                Employee Name
              </label>
              <input
                type="text"
                name="eName"
                value={data.eName}
                onChange={handleChange}
                placeholder="Enter Employee Name"
                className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                Employee ID
              </label>
              <input
                type="number"
                name="eID"
                value={data.eID}
                onChange={handleChange}
                placeholder="Enter Employee ID"
                className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                Department
              </label>
              <select
                name="eDept"
                value={data.eDept}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">--Select Department--</option>
                <option value="IT">IT</option>
                <option value="Sales & Marketing">
                  Sales & Marketing
                </option>
                <option value="Mechanical">Mechanical</option>
                <option value="Electricals">Electricals</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium">
                Employee Salary
              </label>
              <input
                type="number"
                name="eSal"
                value={data.eSal}
                onChange={handleChange}
                placeholder="Enter Employee Salary"
                className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button
              onClick={handleClick}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              {edit !== null ? "Update Employee" : "Add Employee"}
            </button>
          </form>
        </div>

        {/* Employee Cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {savedata.map((e, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-xl shadow-lg border"
            >
              <h2 className="text-xl font-bold mb-4">
                Employee Details
              </h2>

              <p className="mb-2">
                <span className="font-semibold">Name:</span> {e.eName}
              </p>

              <p className="mb-2">
                <span className="font-semibold">ID:</span> {e.eID}
              </p>

              <p className="mb-2">
                <span className="font-semibold">Department:</span>{" "}
                {e.eDept}
              </p>

              <p className="mb-4">
                <span className="font-semibold">Salary:</span> ₹{e.eSal}
              </p>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => HandleEdit(e, i)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
                >
                  Edit
                </button>

                <button
                  type="button"
                  onClick={() => HandleDelete(i)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default EmployeeForm;