import { useReducer, useState } from "react"

const pani =[];

const reduce =(data,action)=>{

    switch (action.type){
        case "ADD":
    
            return[...data,action.payload];

        case "DELE":
            return data.filter((e)=>e.userID!==action.payload.userID)

        case "Up":
            return data.map((e)=>e.userID===action.payload.userID?{...e,userTask:action.payload.userTask}:e)
        
        case "do":
            return data.map((e)=>e.userID===action.payload?{...e,Complete:!e.Complete}:e)
        
            case "Reset":
            return []
            
        default:
            
        return data
    }


}

const TaskDo = () => {

    const [data,dispatch]=useReducer(reduce , pani);

    const [search,setSearch]=useState("");
    const [edit,setEdit]=useState(null);
    


    const HandleChange =(e)=>{
       setSearch( e.target.value);
    }

    const HandleAdd =()=>{

        const newD = {
            userID :Date.now(),
            userTask :search,
            Complete:false
        }

        dispatch (
            {
                type:"ADD",
                payload:newD
            }
        )
        setSearch("")
    }

    const HandleEdit =(uu)=>{
        setSearch(uu.userTask);
        setEdit(uu.userID);
    }

    const HandleDele =(vv)=>{
        dispatch({
            type:"DELE",
            payload:vv
        })
    }

    const HandeleUp =()=>{
        dispatch({
            type:"Up",
            payload:{userID:edit,userTask:search}
        })

    }
    const handleCom =(todoo)=>{
        dispatch(
            {
            type:"do",
            payload:todoo.userID
        }
        )
    }

    const Handleit = () => {
    dispatch({
        type: "Reset",
    });

    setSearch("");
    setEdit(null);
};

  return (
  <div className="min-h-screen bg-gray-100 py-10 px-4">
    <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-8">

      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">
        Todo Task Manager
      </h1>

      {/* Input Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">

        <input
          type="text"
          placeholder="Enter Task"
          onChange={HandleChange}
          value={search}
          className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {edit === null ? (
          <button
            onClick={HandleAdd}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Add
          </button>
        ) : (
          <button
            onClick={HandeleUp}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Update
          </button>
        )}

        <button
          onClick={Handleit}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition"
        >
          Reset All
        </button>

      </div>

      {/* Todo List */}
      <div className="space-y-4">

        {data.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            No Tasks Available
          </div>
        ) : (
          data.map((e) => (
            <div
              key={e.userID}
              className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div>

                <h2
                  className={`text-lg font-semibold ${
                    e.Complete
                      ? "line-through text-gray-400"
                      : "text-gray-800"
                  }`}
                >
                  {e.userTask}
                </h2>

                <p className="text-sm text-gray-500">
                  ID: {e.userID}
                </p>

              </div>

              <div className="flex flex-wrap gap-3">

                <button
                  onClick={() => HandleEdit(e)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
                >
                  Edit
                </button>

                <button
                  onClick={() => HandleDele(e)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                >
                  Delete
                </button>

                <button
                  onClick={() => handleCom(e)}
                  className={`px-4 py-2 rounded-lg text-white transition ${
                    e.Complete
                      ? "bg-orange-500 hover:bg-orange-600"
                      : "bg-green-500 hover:bg-green-600"
                  }`}
                >
                  {e.Complete ? "Undo" : "Complete"}
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

export default TaskDo