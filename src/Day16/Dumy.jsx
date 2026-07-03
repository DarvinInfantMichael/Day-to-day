import { useEffect, useState } from "react"


const Dumy = () => {

    const [data,setData] =useState([]);
    const [uniData,setUniData]=useState([]);


    const fetching = async()=>{

        try{

            const fdata =await fetch("https://dummyjson.com/products?limit=20");

            const changedata=await fdata.json();

            const cData=changedata.products.map((e)=>e.category);

            const value=[...new Set(cData)];

            setData(changedata.products);
            setUniData(value);

        }
        catch(err){
            console.log("Error",err);

        }
    }

    useEffect(()=>{
        fetching();
    },[])

    let Alldata=[...data];

    const[search,setSearch]=useState("");

    const HandleChange=(e)=>{
        setSearch(e.target.value);
    }

    if(search){

        Alldata=Alldata.filter((e)=>e.title.toLowerCase().includes(search))
    
    }

    const[cat,setCat]=useState("");



    const Handleit=(e)=>{

        setCat(e.target.value);

    }

    if(cat){

        Alldata=Alldata.filter((e)=>e.category==cat);
    }

    const [sdata,setSdata]=useState("");

    const Handle =(e)=>{

        setSdata(e.target.value);

    }
    if(sdata){

        if(sdata=="asc"){
            Alldata=Alldata.sort((a,b)=>a.price-b.price);
        }
        if(sdata=="dsc"){
            Alldata=Alldata.sort((a,b)=>b.price-a.price);
        }
    }


 return (
  <div className="min-h-screen bg-gray-100 py-10 px-4">
    <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-xl p-8">

      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Product Search and Filter
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

        <input
          type="text"
          onChange={HandleChange}
          placeholder="Enter Product Details"
          className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          onChange={Handleit}
          className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Category</option>

          {uniData.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>

        <select
          onChange={Handle}
          className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Range</option>
          <option value="dsc">High - Low</option>
          <option value="asc">Low - High</option>
        </select>

      </div>

      <h2 className="text-2xl font-semibold text-gray-700 mb-6">
        Products ({Alldata.length})
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {Alldata.map((e) => (
          <div
            key={e.id}
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 hover:shadow-lg transition duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {e.title}
            </h3>

            <p className="text-gray-600 mb-2">
              <span className="font-medium text-gray-800">
                Category:
              </span>{" "}
              {e.category}
            </p>

            <p className="text-gray-600 text-lg font-semibold">
              ₹{e.price}
            </p>
          </div>
        ))}

      </div>

      {Alldata.length === 0 && (
        <div className="text-center text-gray-500 text-lg mt-10">
          No products found
        </div>
      )}

    </div>
  </div>
)
}

export default Dumy