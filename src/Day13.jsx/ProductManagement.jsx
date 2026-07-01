import { useState } from "react";

const ProductManagement = () => {
  const [data, setData] = useState({
    pName: "",
    pPrice: "",
    pCato: "",
    pBrand: "",
  });

  const [saved, setSaved] = useState(() => {
    return JSON.parse(localStorage.getItem("Items")) || [];
  });

  const [edit, setEdit] = useState(null);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const HandleClick = (e) => {
    e.preventDefault();

    const res = [...saved];

    if (edit !== null) {
      res[edit] = data;
      setEdit(null);
    } else {
      res.push(data);
    }

    localStorage.setItem("Items", JSON.stringify(res));
    setSaved(res);

    setData({
      pName: "",
      pPrice: "",
      pCato: "",
      pBrand: "",
    });
  };

  const HandleEdit = (e, i) => {
    setData(e);
    setEdit(i);
  };

  const HandleDelete = (id) => {
    const dee = saved.filter((_, i) => i !== id);

    setSaved(dee);
    localStorage.setItem("Items", JSON.stringify(dee));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      {/* Form Card */}
      <div className="bg-white shadow-lg rounded-xl p-8 w-[450px]">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Product Management
        </h1>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            name="pName"
            value={data.pName}
            onChange={handleChange}
            placeholder="Enter Product Name..."
            className="border rounded-lg p-3"
          />

          <input
            type="number"
            name="pPrice"
            value={data.pPrice}
            onChange={handleChange}
            placeholder="Enter Price..."
            className="border rounded-lg p-3"
          />

          <select
            name="pCato"
            value={data.pCato}
            onChange={handleChange}
            className="border rounded-lg p-3"
          >
            <option value="">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Footwear">Footwear</option>
            <option value="Home Appliances">Home Appliances</option>
            <option value="Audio">Audio</option>
            <option value="Wearables">Wearables</option>
            <option value="Books">Books</option>
            <option value="Sports">Sports</option>
          </select>

          <input
            type="text"
            name="pBrand"
            value={data.pBrand}
            onChange={handleChange}
            placeholder="Enter Brand Name..."
            className="border rounded-lg p-3"
          />

          <button
            type="submit"
            onClick={HandleClick}
            className={`text-white py-3 rounded-lg ${
              edit !== null
                ? "bg-yellow-500 hover:bg-yellow-600"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {edit !== null ? "Update Product" : "Register Product"}
          </button>
        </form>
      </div>

      {/* Product Cards */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {saved.map((e, i) => (
          <div
            key={i}
            className="bg-white shadow-lg rounded-xl p-5 w-[320px]"
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-3">
              {e.pName}
            </h2>

            <p>
              <span className="font-medium">Price:</span> ₹{e.pPrice}
            </p>

            <p>
              <span className="font-medium">Category:</span> {e.pCato}
            </p>

            <p>
              <span className="font-medium">Brand:</span> {e.pBrand}
            </p>

            <div className="flex gap-3 mt-5">
              <button
                type="button"
                onClick={() => HandleEdit(e, i)}
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

export default ProductManagement;