import { useEffect, useState } from "react"


const ProductFetch = () => {

    const [userData,setUserData]=useState([]);
    const[uniqData,setUniqData]=useState([]);

    const fetching = async ()=>{

        try{

            const fData=await fetch("https://dummyjson.com/products");

            const cData=await fData.json();

            const tData=[...new Set(cData.products.map((e)=>e.category))]

            setUserData(cData.products);
            setUniqData(tData)

        }
        catch(err){
            console.log("Error",err);
        }
    }

    useEffect(()=>{
        fetching();
    },[])

    let Data=[...userData];

    const [search,setSearch]=useState("");

    const HandleChange =(e)=>{
        setSearch(e.target.value);
    }   

    if(search){
        Data=Data.filter((e)=>e.title.toLowerCase().includes(search.toLowerCase()))
    }

const [sort,setSort]=useState("");

const HandleIt =(e)=>{

    setSort(e.target.value);
}

if(sort){
    Data=Data.filter((e)=>e.category==sort);
}

const [select,setSelect]=useState("");
const HandleS=(e)=>{
    setSelect(e.target.value);
}

if(select){
    if(select==="asc"){
        Data=Data.sort((a,b)=>a.price-b.price);
    }
    if(select==="dsc"){
        Data=Data.sort((a,b)=>b.price-a.price);
    }
}



    

    



 return (
  <div className="min-h-screen bg-slate-100 p-8">
    <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-6">

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">

        <input
          type="text"
          onChange={HandleChange}
          placeholder="Enter Product Name..."
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          onChange={HandleIt}
          className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Categories</option>
          {uniqData.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>

        <select
          onChange={HandleS}
          className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Sort By</option>
          <option value="asc">Low To High</option>
          <option value="dsc">High To Low</option>
        </select>

      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {Data.map((e) => (
          <div
            key={e.id}
            className="bg-white border rounded-xl shadow-md hover:shadow-xl transition duration-300 p-5"
          >
             <img
      src={e.thumbnail}
      alt={e.title}
      className="w-full h-56 object-cover"
    />
            <h2 className="text-xl font-bold text-slate-800 mb-2">
              {e.title}
            </h2>

            <p className="text-gray-600 capitalize mb-2">
              {e.category}
            </p>

            <p className="text-2xl font-semibold text-green-600">
              ${e.price}
            </p>
          </div>
        ))}

      </div>
    </div>
  </div>
)}

export default ProductFetch