import { useState } from "react"

function BankAccount (){

    const[pro,setPro]=useState(1000);


    let handleD =()=>{
        setPro(pro+1000);
    }

    let handleW=()=>{
        if(pro>=1000){
            setPro(pro-1000);
        }else{
            alert("Insufficient Balance");
        }
    };


  return (
    <>
    <div className="border-2 rounded-2xl p-5 w-100 m-5">
        <div className="flex justify-center items-center flex-col">
            <h1 className="text-blue-600 font-bold text-2xl">
                Bank Account
            </h1>
            <h2 className="text-xl mt-3 font-bold text-green-500">Balance: ₹{pro}</h2>
            <button onClick={handleD} className="text-amber-50 bg-green-700 p-3 text-xl rounded-2xl mt-3 font-bold">Deposit</button><br></br>
            <button onClick={handleW} className="bg-red-600 p-3 rounded-2xl text-xl font-bold text-amber-50 ">Withdraw</button>
        </div>
    </div>
    </>
  )
}

export default BankAccount