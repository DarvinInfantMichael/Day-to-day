import { useEffect, useState } from "react";

const Home = ({ API_URL }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching from:", `${API_URL}/products`);

        const response = await fetch(`${API_URL}/products`);

        const res = await response.json();

        console.log("API Response:", res);

        setProducts(res.products);
      } catch (err) {
        console.log("Error:", err);
      }
    };

    fetchData();
  }, [API_URL]);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            Home Page Contents
          </h1>

          <p className="mt-2 text-gray-600">
            Explore our featured products
          </p>
        </div>

        <section>
          <h2 className="mb-6 text-2xl font-semibold text-gray-800">
            Featured Products
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

            {products.slice(0, 5).map((e) => (
              <div
                key={e.id}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >

                <img
                  src={e.thumbnail}
                  alt={e.title}
                  className="mb-4 h-40 w-full rounded-lg object-cover"
                />

                <h3 className="line-clamp-2 min-h-[3rem] text-lg font-semibold text-gray-900">
                  {e.title}
                </h3>

                <p className="mt-3 text-sm text-gray-500">
                  Product ID: {e.id}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <p className="text-lg font-bold text-gray-900">
                    ${e.price}
                  </p>

                  <p className="text-sm font-medium text-gray-600">
                    Rating: {e.rating}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </section>

      </div>
    </div>
  );
};

export default Home;