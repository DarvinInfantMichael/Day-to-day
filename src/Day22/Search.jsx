import { useMemo, useState } from "react";

const searchProcess = (search,products)=>{

    return products.filter((e)=>e.productName.toLowerCase().includes(search.toLowerCase()));
};

const themeSetting = (theme)=>{
  return {
    backgroundColor: theme?"#222":"#fff",
    color: theme?"#fff":"#000",
    minHeight:"100vh",
    padding:"20px",
  };
}
 const products = [
  {
    id: 1,
    productName: "Laptop",
    category: "Electronics",
    brand: "Dell",
    productPrice: 65000,
    stock: 15,
    rating: 4.5,
  },
  {
    id: 2,
    productName: "Smartphone",
    category: "Electronics",
    brand: "Samsung",
    productPrice: 30000,
    stock: 25,
    rating: 4.4,
  },
  {
    id: 3,
    productName: "Headphones",
    category: "Accessories",
    brand: "Sony",
    productPrice: 4500,
    stock: 40,
    rating: 4.7,
  },
  {
    id: 4,
    productName: "Keyboard",
    category: "Accessories",
    brand: "Logitech",
    productPrice: 2500,
    stock: 30,
    rating: 4.6,
  },
  {
    id: 5,
    productName: "Mouse",
    category: "Accessories",
    brand: "HP",
    productPrice: 1200,
    stock: 50,
    rating: 4.3,
  },
  {
    id: 6,
    productName: "T-Shirt",
    category: "Clothing",
    brand: "Nike",
    productPrice: 1800,
    stock: 35,
    rating: 4.2,
  },
  {
    id: 7,
    productName: "Jeans",
    category: "Clothing",
    brand: "Levi's",
    productPrice: 2800,
    stock: 20,
    rating: 4.5,
  },
  {
    id: 8,
    productName: "Sneakers",
    category: "Footwear",
    brand: "Puma",
    productPrice: 4200,
    stock: 18,
    rating: 4.4,
  },
  {
    id: 9,
    productName: "Watch",
    category: "Accessories",
    brand: "Fastrack",
    productPrice: 3500,
    stock: 12,
    rating: 4.1,
  },
  {
    id: 10,
    productName: "Backpack",
    category: "Bags",
    brand: "Wildcraft",
    productPrice: 2200,
    stock: 28,
    rating: 4.6,
  },
  {
    id: 11,
    productName: "Tablet",
    category: "Electronics",
    brand: "Apple",
    productPrice: 45000,
    stock: 10,
    rating: 4.8,
  },
  {
    id: 12,
    productName: "Monitor",
    category: "Electronics",
    brand: "LG",
    productPrice: 15000,
    stock: 14,
    rating: 4.7,
  },
];

const Search = () => {

   

const [search,setSearch]=useState("");
const [theme,setTheme]=useState(false);

const res =useMemo(()=>{

    const ss = searchProcess(search,products);
    return ss;
},[search]);

const the =useMemo(()=>{
  const tt =themeSetting(theme);
  return tt;
},[theme])

const toggleTheme = () => {
  setTheme((prev) => !prev);
}

 return (
  <div style={the} className="min-h-screen p-8">
    <div className="max-w-5xl mx-auto">

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <h1 className="text-3xl font-bold">
          Product Search Dashboard
        </h1>

        <button
          onClick={toggleTheme}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
        >
          {theme ? "Light Theme" : "Dark Theme"}
        </button>
      </div>

      <div className="mb-8">
        <label className="block font-semibold mb-2">
          Search Product
        </label>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Products Here..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {res.map((e) => (
          <div
            key={e.id}
            className="border rounded-xl shadow-lg p-5 hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-bold mb-4">
              {e.productName}
            </h2>

            <div className="space-y-2">
              <p>
                <span className="font-semibold">ID:</span> {e.id}
              </p>

              <p>
                <span className="font-semibold">Category:</span>{" "}
                {e.category}
              </p>

              <p>
                <span className="font-semibold">Brand:</span>{" "}
                {e.brand}
              </p>

              <p>
                <span className="font-semibold">Price:</span> ₹
                {e.productPrice}
              </p>

              <p>
                <span className="font-semibold">Stock:</span>{" "}
                {e.stock}
              </p>

              <p>
                <span className="font-semibold">Rating:</span>{" "}
                ⭐ {e.rating}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
);
}

export default Search