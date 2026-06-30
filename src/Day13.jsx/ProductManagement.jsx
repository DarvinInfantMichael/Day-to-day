import { useState } from "react"


const ProductManagement = () => {

    const[data,setData]=useState({pName:"", pPrice:"",pCato:"",pBrand:""});
    const[saved,setSaved]=useState(()=>{
        return JSON.parse(localStorage.getItem("Items"))||[]
    });

    const [edit,setEdit]=useState(null);

    const handleChange=(e)=>{
        
        setData({...data,[e.target.name]:e.target.value});

    }

    const HandleClick=(e)=>{

        e.preventDefault();

        const res=JSON.parse(localStorage.getItem("Items"))||[];

        if(edit !== null){
            res[edit]=data;
            setEdit(null);
        }else{
            res.push(data);
        }

        localStorage.setItem("Items",JSON.stringify(res));

        setSaved(res);

        setData({pName:"", pPrice:"",pCato:"",pBrand:""});
        
    }

    const HandleEdit=(e,i)=>{

        setData(e);
        setEdit(i);

    }

    const HandleDelete =(id)=>{

        const dee=saved.filter((_,i)=>i!==id);
        setSaved(dee);
        localStorage.setItem("Items",JSON.stringify(dee));


    }

  return (
    <div>
        <div>
            <form>
                <label>Product Name:</label>
                <input type="text"
                onChange={handleChange}
                name="pName"
                value={data.pName}
                placeholder="Enter Porduct Name..."
                />
                <br>
                </br>

                <label>Product Price:</label>
                <input type="number"
                onChange={handleChange}
                name="pPrice"
                value={data.pPrice}
                placeholder="Enter Price Amount..."
                />
                <br>
                </br>

                <label>Product Category:</label>
                <select
                name="pCato"
                value={data.pCato}
                onChange={handleChange}
>
                <option value="">Select Category</option>
                <option value="Electronics">Electronics</option>
                <option value="Clothing">Clothing</option>
                <option value="Footwear">Footwear</option>
                <option value="Home Appliances">Home Appliances</option>
                <option value="Audio">Audio</option>
                <option value="Wearables">Wearables</option>
                <option value="Books">Books</option>
                <option value="Sports">Sports</option>
                </select>
  
                <br>
                </br>

                <label>Product Brand:</label>
                <input type="text"
                onChange={handleChange}
                name="pBrand"
                value={data.pBrand}
                placeholder="Enter Brand Name..."
                />
                <br>
                </br>

                <button type="submit" onClick={HandleClick}>
    {edit !== null ? "Update Product" : "Register"}
</button>
            </form>
            <div>
                {saved.map((e,i)=>(
                    
                    <div key={i}>
                        <h1>{e.pName}</h1>
                        <h1>{e.pPrice}</h1>
                        <h1>{e.pCato}</h1>
                        <h1>{e.pBrand}</h1>

                        <button type="button" onClick={()=>HandleEdit(e,i)}>Edit</button>
                        <button type="button"onClick={()=>HandleDelete(i)}>Delete</button>
                    </div>
                    
                ))}
            </div>
        </div>
    </div>
  )
}

export default ProductManagement