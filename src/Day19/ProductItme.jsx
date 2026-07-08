import { useContext } from "react";
import ManagerContext from "./context/ManagerContext";

function ProductItme() {
  const { product } = useContext(ManagerContext);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Product List
      </h1>

      <div className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {product.map((e) => (
          <div
            key={e.id}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300"
          >
            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full">
                ID: {e.id}
              </span>
            </div>

            <h2 className="text-xl font-bold text-gray-800 mb-3">
              {e.title}
            </h2>

            <p className="text-2xl font-semibold text-green-600">
              ₹{e.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductItme;