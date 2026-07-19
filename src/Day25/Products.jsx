import { useEffect, useState } from "react";

const Products = ({ API_URL }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/products`);

        const res = await response.json();

        setProducts(res.products);
      } catch (err) {
        console.log("ERROR", err);
      }
    };

    fetchData();
  }, [API_URL]);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            Product List
          </h1>

          <p className="mt-2 text-gray-600">
            Browse all available products
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {products.map((e) => (
            <div
              key={e.id}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >

              <img
                src={e.thumbnail}
                alt={e.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-5">

                <p className="mb-2 text-sm text-gray-500">
                  Product ID: {e.id}
                </p>

                <h2 className="line-clamp-2 min-h-[3.5rem] text-xl font-semibold text-gray-900">
                  {e.title}
                </h2>

                <div className="mt-5 flex items-center justify-between">

                  <p className="text-xl font-bold text-gray-900">
                    ${e.price}
                  </p>

                  <p className="text-sm font-medium text-gray-600">
                    Rating: {e.rating}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Products;