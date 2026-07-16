import { useReducer, useState } from "react"

const odata =[];

const reduce=(data,action)=>{

    switch (action.type){
        case "Add":
            return [...data,action.payload];

        case "Dele":
            return data.filter((e)=>e.userId!==action.payload.userId);

        case "UP":
            return data.map((e)=>e.userId===action.payload.userID?{...e,userName:action.payload.userName}:e)

        default:
            return data
    }

}

const Todo = () => {

    const [data,dispatch] = useReducer(reduce,odata);

    const [userName ,setUserName] =useState("");
    const [edit , setEdit] = useState(null);

    const HandleName =(e)=>{
        setUserName(e.target.value);
    }

    const HandleClick =()=>{

        const newd = {
            userId :Date.now(),
            userName :userName
        }

        dispatch({
            type:"Add",
            payload:newd
           
        })
        setUserName("");

    }

    const HandleEdit =(e)=>{
        setUserName(e.userName)
        setEdit(e.userId)
    }

    const HandleDelete =(e)=>{

        dispatch({
            type:"Dele",
            payload:e
            
        })

    }

    const HandleUp =()=>{
        dispatch({
            type:"UP",
            payload:{userID:edit,userName:userName}
        })
        setUserName("");
        setEdit(null)
    }

    


 return (
  <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
    <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">

      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">
        Student Todo App
      </h1>

      {/* Input */}
      <div className="flex gap-4 mb-8">

        <input
          type="text"
          placeholder="Enter Student Name"
          onChange={HandleName}
          value={userName}
          className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {edit === null ? (
          <button
            onClick={HandleClick}
            className="bg-green-500 hover:bg-green-600 text-white px-6 rounded-lg"
          >
            Add
          </button>
        ) : (
          <button
            onClick={HandleUp}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 rounded-lg"
          >
            Update
          </button>
        )}

      </div>

      {/* Student List */}

      <div className="space-y-4">

        {data.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            No Students Added
          </div>
        ) : (
          data.map((e) => (
            <div
              key={e.userId}
              className="bg-gray-50 border rounded-xl p-5 flex justify-between items-center"
            >

              <div>
                <h2 className="text-lg font-semibold">
                  {e.userName}
                </h2>

                <p className="text-gray-500 text-sm">
                  ID : {e.userId}
                </p>
              </div>

              <div className="flex gap-3">

                <button
                  onClick={() => HandleEdit(e)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                  Edit
                </button>

                <button
                  onClick={() => HandleDelete(e)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                  Delete
                </button>

              </div>

            </div>
          ))
        )}

      </div>

    </div>
  </div>
);
}

export default Todo