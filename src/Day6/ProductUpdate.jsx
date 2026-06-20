import { useState } from "react"


function ProductUpdate  ()  {
    const[up,setUp]=useState(undefined);

    let Productup =()=>{
        setUp({
            name:"R15 V3",
            price:"250000"
        })
    }
  return (
    <>
    <div className="border-2 m-5 rounded-2xl w-150 p-5">
        <div className="flex justify-center items-center flex-col ">
            <h1 className="text-blue-600 font-bold text-2xl">Product Details:
                </h1>
                {up&&
                <div className="text-xl font-bold mt-3">
                    <h1>ProductName:{up.name}</h1>
                    <h1>ProductPrice:{up.price}</h1>
                    </div>
                    }

                    <button onClick={Productup} className="mt-3 text-xl bg-red-600 p-3 rounded-2xl text-white font-bold">Get Product Details</button>
                </div></div></>
  )
}

export default ProductUpdate