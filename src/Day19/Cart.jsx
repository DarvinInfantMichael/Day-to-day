import { useContext } from "react";
import CartContext from "./context/CartContext";

function Cart() {
  const { userData, TotalCount } = useContext(CartContext);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Navbar */}
      <nav className="max-w-3xl mx-auto bg-blue-600 text-white rounded-lg shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">🛒 Shopping Cart</h1>

        <div className="bg-white text-blue-600 px-4 py-2 rounded-full font-semibold">
          Total Items: {TotalCount}
        </div>
      </nav>

      {/* Cart Items */}
      <section className="max-w-3xl mx-auto mt-8 space-y-4">
        {userData.map((e, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-lg p-5 flex justify-between items-center hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold text-gray-800">
              {e.product}
            </h2>

            <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full font-medium">
              Qty: {e.qty}
            </span>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Cart;