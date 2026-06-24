const Show = ({ data, HandleEdit, HandleDelete }) => {
  return (
    <div className="mt-6 space-y-4">
      {data.map((e, i) => (
        <div
          key={i}
          className="bg-white shadow-md rounded-xl p-4 border border-gray-200 flex justify-between items-center"
        >
          <div>
            <h1 className="text-xl font-bold text-blue-600">
              {e.userName}
            </h1>
            <h3 className="text-gray-700">
              Age: <span className="font-medium">{e.userAge}</span>
            </h3>
            <h3 className="text-gray-700">
              City: <span className="font-medium">{e.userCity}</span>
            </h3>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => HandleEdit(e)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition"
            >
              Edit
            </button>

            <button
              onClick={() => HandleDelete(i)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Show;