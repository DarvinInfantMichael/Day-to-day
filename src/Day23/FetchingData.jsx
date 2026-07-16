import { useCallback, useEffect, useMemo, useState } from "react"

const detail = (search, fdata, sort,cat) => {
  let res = [...fdata];

  res = res.filter((e) =>
    e.title.toLowerCase().includes(search.toLowerCase())
  );

  if(cat!==""){
    res=res.filter((e)=>e.category===cat)
  }

  if (sort === "asc") {
    res.sort((a, b) => a.price - b.price);
  }

  if (sort === "dsc") {
    res.sort((a, b) => b.price - a.price);
  }

  return res;
};

const FetchingData = () => {

    const [fdata,setFdata] = useState([]);
    const [unic,setUnic] =useState([]);

    const[search,setSearch] = useState("");
    const[sort,setSort]=useState("");
    const[cat,setCat] = useState("");


    const getData =useCallback(async()=>{

        try{

            const response = await fetch("https://dummyjson.com/products");

            const data = await response.json();

            const ud = [...new Set (data.products.map((e)=>e.category ))];

            setUnic(ud)

            setFdata(data.products);



        }catch(err){

            console.log("Error",err);

        }
    },[])
    
    useEffect(()=>{
        getData();
    },[getData])

    const HandleSearch =useCallback(
        (e)=>{
        setSearch(e.target.value);
    },[]);

    const HandleSort =useCallback(
        (e)=>{
            setSort(e.target.value)
        },[])

    const HandleCat =useCallback(
        (e)=>{
            setCat(e.target.value)
        },[]
    )

    const vari = useMemo(()=>{
        const gg = detail (search,fdata,sort,cat);
        return gg 
    },[search,fdata,sort,cat])


  return (
  <div className="min-h-screen bg-gray-100 py-8 px-6">
    <div className="max-w-7xl mx-auto">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-10">
        Product Listing
      </h1>

      {/* Filters */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-8 flex flex-col md:flex-row gap-4">

        {/* Search */}
        <input
          type="text"
          placeholder="Search Products..."
          value={search}
          onChange={HandleSearch}
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {/* Sort */}
        <select
          value={sort}
          onChange={HandleSort}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Sort By Price</option>
          <option value="asc">Low → High</option>
          <option value="dsc">High → Low</option>
        </select>

        {/* Category */}
        <select
          value={cat}
          onChange={HandleCat}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">All Categories</option>

          {unic.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>

      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

        {vari.map((e) => (
          <div
            key={e.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >

            <img
              src={e.thumbnail}
              alt={e.title}
              className="w-full h-52 object-cover"
            />

            <div className="p-5">

              <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
                {e.title}
              </h2>

              <p className="text-sm text-gray-500 capitalize mt-2">
                {e.category}
              </p>

              <div className="flex justify-between items-center mt-5">

                <span className="text-2xl font-bold text-green-600">
                  ${e.price}
                </span>

                <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium">
                  #{e.id}
                </span>

              </div>

            </div>

          </div>
        ))}

      </div>

      {/* No Products */}
      {vari.length === 0 && (
        <div className="text-center mt-10 text-gray-500 text-lg">
          No products found.
        </div>
      )}

    </div>
  </div>
);
}

export default FetchingData