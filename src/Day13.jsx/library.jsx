import { useState } from "react";

const BookManagement = () => {
  const [bookData, setBookData] = useState({
    BookName: "",
    Author: "",
    Price: "",
  });

  const [saveData, setSaveData] = useState(() => {
    return JSON.parse(localStorage.getItem("Items")) || [];
  });

  const HandleChange = (e) => {
    setBookData({
      ...bookData,
      [e.target.name]: e.target.value,
    });
  };

  const HandleClick = (e) => {
    e.preventDefault();

    const res = [...saveData, bookData];

    localStorage.setItem("Items", JSON.stringify(res));

    setSaveData(res);

    setBookData({
      BookName: "",
      Author: "",
      Price: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      {/* Form Card */}
      <div className="bg-white shadow-lg rounded-xl p-8 w-[400px]">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Book Management System
        </h1>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            name="BookName"
            value={bookData.BookName}
            onChange={HandleChange}
            placeholder="Enter Book Name..."
            className="border rounded-lg p-3"
          />

          <input
            type="text"
            name="Author"
            value={bookData.Author}
            onChange={HandleChange}
            placeholder="Enter Author Name..."
            className="border rounded-lg p-3"
          />

          <input
            type="number"
            name="Price"
            value={bookData.Price}
            onChange={HandleChange}
            placeholder="Enter Price..."
            className="border rounded-lg p-3"
          />

          <button
            onClick={HandleClick}
            className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Add Book
          </button>
        </form>
      </div>

      {/* Book Cards */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {saveData.map((e, i) => (
          <div
            key={i}
            className="bg-white shadow-lg rounded-xl p-5 w-[320px]"
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-3">
              {e.BookName}
            </h2>

            <p className="text-gray-700">
              <span className="font-medium">Author:</span> {e.Author}
            </p>

            <p className="text-gray-700 mt-2">
              <span className="font-medium">Price:</span> ₹{e.Price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookManagement;