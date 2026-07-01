import { useState } from "react";

const StudentsDetails = () => {
  const [usedata, setUsedata] = useState({
    userName: "",
    userAge: "",
    userCourse: "",
    userCity: "",
  });

  const [savedata, setSavedata] = useState(() => {
    return JSON.parse(localStorage.getItem("Data")) || [];
  });

  const [edit, setEdit] = useState(null);

  const HandleCheck = (e) => {
    setUsedata({
      ...usedata,
      [e.target.name]: e.target.value,
    });
  };

  const Handleit = (e) => {
    e.preventDefault();

    const res = [...savedata];

    if (edit !== null) {
      res[edit] = usedata;
      setEdit(null);
    } else {
      res.push(usedata);
    }

    localStorage.setItem("Data", JSON.stringify(res));

    setSavedata(res);

    setUsedata({
      userName: "",
      userAge: "",
      userCourse: "",
      userCity: "",
    });
  };

  const HandleClick = (e, i) => {
    setUsedata(e);
    setEdit(i);
  };

  const HandleDelete = (id) => {
    const update = savedata.filter((_, i) => i !== id);

    setSavedata(update);

    localStorage.setItem("Data", JSON.stringify(update));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      {/* Form Card */}
      <div className="bg-white shadow-lg rounded-xl p-8 w-[450px]">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Student Registration System
        </h1>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            name="userName"
            value={usedata.userName}
            onChange={HandleCheck}
            placeholder="Enter Student Name"
            className="border rounded-lg p-3"
          />

          <input
            type="number"
            name="userAge"
            value={usedata.userAge}
            onChange={HandleCheck}
            placeholder="Enter Student Age"
            className="border rounded-lg p-3"
          />

          <input
            type="text"
            name="userCourse"
            value={usedata.userCourse}
            onChange={HandleCheck}
            placeholder="Enter Student Course"
            className="border rounded-lg p-3"
          />

          <input
            type="text"
            name="userCity"
            value={usedata.userCity}
            onChange={HandleCheck}
            placeholder="Enter Student City"
            className="border rounded-lg p-3"
          />

          <button
            type="submit"
            onClick={Handleit}
            className={`text-white py-3 rounded-lg ${
              edit !== null
                ? "bg-yellow-500 hover:bg-yellow-600"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {edit !== null ? "Update Student" : "Register Student"}
          </button>
        </form>
      </div>

      {/* Student Cards */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {savedata.map((e, i) => (
          <div
            key={i}
            className="bg-white shadow-lg rounded-xl p-5 w-[320px]"
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-3">
              {e.userName}
            </h2>

            <p>
              <span className="font-medium">Age:</span> {e.userAge}
            </p>

            <p>
              <span className="font-medium">Course:</span> {e.userCourse}
            </p>

            <p>
              <span className="font-medium">City:</span> {e.userCity}
            </p>

            <div className="flex gap-3 mt-5">
              <button
                type="button"
                onClick={() => HandleClick(e, i)}
                className="bg-green-500 text-white px-4 py-2 rounded-lg"
              >
                Edit
              </button>

              <button
                type="button"
                onClick={() => HandleDelete(i)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
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

export default StudentsDetails;