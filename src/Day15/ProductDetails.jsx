import { useState } from "react";

const ProductDetails = () => {
  const products = [
    {
      id: 1,
      name: "Laptop",
      category: "Electronics",
      price: 55000,
    },
    {
      id: 2,
      name: "Laptop Stand",
      category: "Accessories",
      price: 1200,
    },
    {
      id: 3,
      name: "Mouse",
      category: "Accessories",
      price: 800,
    },
    {
      id: 4,
      name: "Keyboard",
      category: "Accessories",
      price: 1500,
    },
    {
      id: 5,
      name: "Mobile Phone",
      category: "Electronics",
      price: 25000,
    },
    {
      id: 6,
      name: "Monitor",
      category: "Electronics",
      price: 12000,
    },
    {
      id: 7,
      name: "Water Bottle",
      category: "Home",
      price: 300,
    },
    {
      id: 8,
      name: "Chair",
      category: "Furniture",
      price: 3500,
    },
    {
      id: 9,
      name: "Table",
      category: "Furniture",
      price: 5000,
    },
    {
      id: 10,
      name: "Notebook",
      category: "Stationery",
      price: 100,
    },
  ];

  const [user, setUser] = useState("");
  const [cat, setCat] = useState("");

  let Alldata = [...products];

  const HandleChange = (e) => {
    setUser(e.target.value);
  };

  if (user) {
    Alldata = Alldata.filter((e) =>
      e.name.toLowerCase().includes(user.toLowerCase())
    );
  }

  const Handleit = (e) => {
    setCat(e.target.value);
  };

  let categories = [...new Set(products.map((e) => e.category))];

  if (cat) {
    Alldata = Alldata.filter((e) => e.category === cat);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Product Search
        </h1>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <input
            type="text"
            onChange={HandleChange}
            placeholder="Search Product Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            onChange={Handleit}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Category</option>

            {categories.map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </select>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Alldata.map((e) => (
            <div
              key={e.id}
              className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition duration-300"
            >
              <h2 className="text-xl font-semibold mb-3">{e.name}</h2>

              <p className="text-gray-600 mb-2">
                <span className="font-medium">Category:</span> {e.category}
              </p>

              <p className="text-gray-600">
                <span className="font-medium">Price:</span> ₹{e.price}
              </p>
            </div>
          ))}
        </div>

        {Alldata.length === 0 && (
          <div className="text-center text-gray-500 mt-8">
            No products found.
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;