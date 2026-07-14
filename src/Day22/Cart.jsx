import { useMemo, useState } from "react";

const themeSetting =(theme)=>{

     return {
    backgroundColor: theme?"#222":"#fff",
    color: theme?"#fff":"#000",
    minHeight:"100vh",
    padding:"20px",
  };
}

const Grand =(cart)=>{
    return cart.reduce((total,item)=>{
        return total+ item.price *item.quantity
    },0)
}

// const rr =(selectedItems)=>{
//     return cart
// }

const cart = [
  {
    id: 1,
    productName: "Laptop",
    price: 65000,
    quantity: 1,
  },
  {
    id: 2,
    productName: "Smartphone",
    price: 30000,
    quantity: 2,
  },
  {
    id: 3,
    productName: "Headphones",
    price: 4500,
    quantity: 3,
  },
  {
    id: 4,
    productName: "Keyboard",
    price: 2500,
    quantity: 2,
  },
  {
    id: 5,
    productName: "Mouse",
    price: 1200,
    quantity: 4,
  },
];

const Cart = () => {

    const [theme ,setTheme]=useState(false);
    // const [selectedItems,setSelectedItems] = useState([]);
    const toggle =()=>{
        setTheme(!theme);
    }

    const gg = useMemo(()=>{
        const pp =Grand(cart);
        return pp
    },[])

    const tg =useMemo(()=>{
        const tt =themeSetting(theme);
        return tt;
    },[theme])
  return (
  <>
    <div style={tg} className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Shopping Cart
        </h1>

        <div className="flex justify-end mb-6">
          <button
            onClick={toggle}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            {theme ? "Light Theme" : "Dark Theme"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.map((e) => (
            <div
              key={e.id}
              className="border rounded-xl shadow-lg p-5 hover:shadow-xl transition"
            >
              {/* <input
                type="checkbox"
                checked={selectedItems.includes(e.id)}
                onChange={(e) => setSelectedItems(e.id)}
              /> */}

              <h2 className="text-xl font-bold mb-3">{e.productName}</h2>

              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-semibold">ID:</span> {e.id}
                </p>

                <p>
                  <span className="font-semibold">Price:</span> ₹{e.price}
                </p>

                <p>
                  <span className="font-semibold">Quantity:</span> {e.quantity}
                </p>

                <p>
                  <span className="font-semibold">Subtotal:</span> ₹
                  {e.price * e.quantity}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <div className="bg-green-600 text-white px-6 py-4 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold">
              Grand Total : ₹{gg}
            </h3>
          </div>
        </div>
      </div>
    </div>
  </>
);
}

export default Cart