import { useState } from "react";

const ProductManagementForm = () => {
  const [data, setData] = useState({
    pName: "",
    pBrand: "",
    pCate: "",
    pPrice: "",
  });

  const [savedata, setSavedata] = useState(() => {
    return JSON.parse(localStorage.getItem("Items")) || [];
  });

  const [edit, setEdit] = useState(null);

  const HandleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const HandleClick = (e) => {
    e.preventDefault();

    if (
      !data.pName ||
      !data.pBrand ||
      !data.pCate ||
      !data.pPrice
    ) {
      alert("Please fill all the fields");
      return;
    }

    const res = [...savedata];

    if (edit !== null) {
      res[edit] = data;
      alert("Product Updated Successfully");
      setEdit(null);
    } else {
      res.push(data);
      alert("Product Added Successfully");
    }

    localStorage.setItem("Items", JSON.stringify(res));
    setSavedata(res);

    setData({
      pName: "",
      pBrand: "",
      pCate: "",
      pPrice: "",
    });
  };

  const HandleEdit = (product, index) => {
    setData(product);
    setEdit(index);
  };

  const HandleDelete = (index) => {
    const updatedProducts = savedata.filter(
      (_, i) => i !== index
    );

    setSavedata(updatedProducts);

    localStorage.setItem(
      "Items",
      JSON.stringify(updatedProducts)
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10 px-4">
      <div className="w-full max-w-5xl">
        
        {/* Form Section */}
        <div className="bg-white shadow-lg rounded-xl p-8 mb-8">
          <h1 className="text-3xl font-bold text-center mb-6">
            Product Management Form
          </h1>

          <form className="space-y-5">
            <div>
              <label className="block font-medium mb-2">
                Product Name
              </label>

              <input
                type="text"
                name="pName"
                value={data.pName}
                onChange={HandleChange}
                placeholder="Enter Product Name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block font-medium mb-2">
                Product Brand
              </label>

              <input
                type="text"
                name="pBrand"
                value={data.pBrand}
                onChange={HandleChange}
                placeholder="Enter Product Brand"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block font-medium mb-2">
                Category
              </label>

              <select
                name="pCate"
                value={data.pCate}
                onChange={HandleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select Category</option>
                <option value="Electronics">
                  Electronics
                </option>
                <option value="Clothing">
                  Clothing
                </option>
                <option value="Foods">
                  Foods
                </option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-2">
                Product Price
              </label>

              <input
                type="number"
                name="pPrice"
                value={data.pPrice}
                onChange={HandleChange}
                placeholder="Enter Product Price"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button
              onClick={HandleClick}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              {edit !== null
                ? "Update Product"
                : "Add Product"}
            </button>
          </form>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedata.map((e, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg p-5 border border-gray-200"
            >
              <h2 className="text-xl font-bold mb-4">
                Product Details
              </h2>

              <p className="mb-2">
                <span className="font-semibold">
                  Name:
                </span>{" "}
                {e.pName}
              </p>

              <p className="mb-2">
                <span className="font-semibold">
                  Brand:
                </span>{" "}
                {e.pBrand}
              </p>

              <p className="mb-2">
                <span className="font-semibold">
                  Category:
                </span>{" "}
                {e.pCate}
              </p>

              <p className="mb-4">
                <span className="font-semibold">
                  Price:
                </span>{" "}
                ₹{e.pPrice}
              </p>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() =>
                    HandleEdit(e, i)
                  }
                  className="flex-1 bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition"
                >
                  Edit
                </button>

                <button
                  type="button"
                  onClick={() =>
                    HandleDelete(i)
                  }
                  className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
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

export default ProductManagementForm;