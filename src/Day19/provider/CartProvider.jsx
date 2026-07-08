import { useState } from "react"
import CartContext from "../context/CartContext";


const CartProvider = ({children}) => {

    const[userData]=useState([
 {
   id:1,
   product:"Laptop",
   qty:2
 },
 {
   id:2,
   product:"Mouse",
   qty:1
 }
]);

const TotalCount= userData.reduce((Total,e)=>Total+e.qty,0);

  return (
    <div>
        <CartContext.Provider value={{userData,TotalCount}}>
            {children}
        </CartContext.Provider>
    </div>
  )
}

export default CartProvider