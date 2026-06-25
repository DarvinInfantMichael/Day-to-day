import { useState } from "react";

const StudentRegistrationFrom = () => {
  const [userdata, setUserdata] = useState({
    userName: "",
    userAge: "",
    userCourse: "",
    userCity: "",
    userQuota: "",
  });

  const [savedata, setSaveData] = useState(() => {
    return JSON.parse(localStorage.getItem("UserData")) || [];
  });

  const [edit, setEdit] = useState(null);

  const handleChange = (e) => {
    setUserdata({
      ...userdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (
      !userdata.userName ||
      !userdata.userAge ||
      !userdata.userCourse ||
      !userdata.userCity ||
      !userdata.userQuota
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (userdata.userAge <= 0) {
      alert("Enter a valid age");
      return;
    }

    const res = JSON.parse(localStorage.getItem("UserData")) || [];

    if (edit !== null) {
      res[edit] = userdata;
      alert("Student Updated Successfully");
      setEdit(null);
    } else {
      res.push(userdata);
      alert("Student Added Successfully");
    }

    localStorage.setItem("UserData", JSON.stringify(res));
    setSaveData(res);

    setUserdata({
      userName: "",
      userAge: "",
      userCourse: "",
      userCity: "",
      userQuota: "",
    });
  };

  const handleEdit = (student, index) => {
    setUserdata(student);
    setEdit(index);
  };

  const handleDelete = (id) => {
    const updatedData = savedata.filter((_, i) => i !== id);

    setSaveData(updatedData);

    localStorage.setItem(
      "UserData",
      JSON.stringify(updatedData)
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg">
        <form>
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
            Registration Form
          </h1>

          <label className="font-semibold">Student Name</label>
          <input
            type="text"
            name="userName"
            placeholder="Enter Student Name"
            onChange={handleChange}
            value={userdata.userName}
            className="w-full border p-2 rounded-md mb-4 mt-1"
          />

          <label className="font-semibold">Student Age</label>
          <input
            type="number"
            name="userAge"
            placeholder="Enter Student Age"
            onChange={handleChange}
            value={userdata.userAge}
            className="w-full border p-2 rounded-md mb-4 mt-1"
          />

          <label className="font-semibold">Student Course</label>
          <input
            type="text"
            name="userCourse"
            placeholder="Enter Student Course"
            onChange={handleChange}
            value={userdata.userCourse}
            className="w-full border p-2 rounded-md mb-4 mt-1"
          />

          <label className="font-semibold">Student City</label>
          <input
            type="text"
            name="userCity"
            placeholder="Enter Student City"
            onChange={handleChange}
            value={userdata.userCity}
            className="w-full border p-2 rounded-md mb-4 mt-1"
          />

          <label className="font-semibold">Quota</label>
          <select
            name="userQuota"
            value={userdata.userQuota}
            onChange={handleChange}
            className="w-full border p-2 rounded-md mb-4 mt-1"
          >
            <option value="">--Quota--</option>
            <option>Government</option>
            <option>Management</option>
          </select>

          <button
            onClick={handleClick}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            {edit !== null ? "Update Student" : "Register"}
          </button>
        </form>
      </div>

      <div className="max-w-4xl mx-auto mt-8 grid md:grid-cols-2 gap-4">
        {savedata.map((e, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-xl shadow-md border"
          >
            <h2 className="text-xl font-bold text-blue-600 mb-3">
              Student Details
            </h2>

            <p><span className="font-semibold">Name:</span> {e.userName}</p>
            <p><span className="font-semibold">Age:</span> {e.userAge}</p>
            <p><span className="font-semibold">Course:</span> {e.userCourse}</p>
            <p><span className="font-semibold">City:</span> {e.userCity}</p>
            <p><span className="font-semibold">Quota:</span> {e.userQuota}</p>

            <div className="flex gap-3 mt-4">
              <button
                type="button"
                onClick={() => handleEdit(e, i)}
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
              >
                Edit
              </button>

              <button
                type="button"
                onClick={() => handleDelete(i)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentRegistrationFrom;