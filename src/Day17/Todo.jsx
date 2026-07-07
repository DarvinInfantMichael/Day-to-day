// import { useState } from "react"

import { useState } from "react"


// const Todo = () => {



//     const [data,setData]=useState("");
//     const [todo,setTodo]=useState(()=>{
//          return JSON.parse(localStorage.getItem("Items")) || [];
//     })

//     const[edit,setEdit]=useState(null)

//     const HandleChange =(e)=>{

//         e.preventDefault();

//         setData(e.target.value);

//     }

//     const HandleAdd=(e)=>{
//         e.preventDefault();

//         if(data.trim()===""){
//             return
//         };
        
//         const newtodo=[...todo];

//         if(edit!==null){
//             newtodo[edit]=data;
//             setEdit(null)
//         }else{
//             newtodo.push(data);
//         }
    

//         setTodo(newtodo);
//         localStorage.setItem("TodosList",JSON.stringify(newtodo));
//         setData("");
//     }
    
//     const HandleEdit=(e,i)=>{

//         setData(e);
//         setEdit(i);

//     }

//     const handleDelete = (index) => {
//     const newTodos = todo.filter((_, i) => i !== index);

//     setTodo(newTodos);
//     localStorage.setItem("Todos", JSON.stringify(newTodos));
//   };
      
//   return (
//     <div>
//         <div>
//             <h1>ToDo List</h1>
//         </div>

//         <div>
//             <form>

//                 <input type="text"
//                 onChange={HandleChange}
//                 value={data}
//                 placeholder="Enter task"/>

//                 <button onClick={HandleAdd}>Add</button>

//             </form>
//             <div>
//                 {todo.map((e,i)=>(
//                     <diV key={i}>
//                         <h1>{e}</h1>
//                         <button onClick={()=>HandleEdit(e,i)}>Edit</button>
//                         <button onClick={()=>handleDelete(i)}>Delete</button>
//                     </diV>
//                 ))}
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Todo










function Todo() {
  const [todo, setTodo] = useState("");

  const [todoData, setTodoData] = useState(() => {
    return JSON.parse(localStorage.getItem("Items")) || [];
  });

  const [edit, setEdit] = useState(null);

  const HandleChange = (e) => {
    setTodo(e.target.value);
  };

  const HandleAdd = (e) => {
    e.preventDefault();

    if (todo.trim() === "") return;

    const newTdata = [...todoData];

    if (edit !== null) {
      newTdata[edit] = todo;
      setEdit(null);
    } else {
      newTdata.push(todo);
    }

    setTodoData(newTdata);
    localStorage.setItem("Items", JSON.stringify(newTdata));
    setTodo("");
  };

  const HandleEdit = (value, index) => {
    setTodo(value);
    setEdit(index);
  };

  const HandleDelete = (index) => {
    const del = todoData.filter((_, i) => i !== index);

    setTodoData(del);
    localStorage.setItem("Items", JSON.stringify(del));
    setTodo("");
    setEdit(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex justify-center items-center p-6">
      <div className="w-full max-w-lg bg-white shadow-2xl rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Todo List
        </h1>

        <form
          onSubmit={HandleAdd}
          className="flex gap-3 mb-8"
        >
          <input
            type="text"
            placeholder="Enter your task..."
            value={todo}
            onChange={HandleChange}
            className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />

          <button
            type="submit"
            className={`px-6 py-3 rounded-lg text-white font-semibold transition duration-300 ${
              edit !== null
                ? "bg-green-500 hover:bg-green-600"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {edit !== null ? "Update" : "Add"}
          </button>
        </form>

        <div className="space-y-4">
          {todoData.length === 0 ? (
            <p className="text-center text-gray-500">
              No tasks available.
            </p>
          ) : (
            todoData.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-100 p-4 rounded-xl shadow hover:shadow-md transition"
              >
                <h3 className="text-lg font-medium text-gray-800 break-all">
                  {item}
                </h3>

                <div className="flex gap-2">
                  <button
                    onClick={() => HandleEdit(item, index)}
                    className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-white rounded-lg transition"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => HandleDelete(index)}
                    className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
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

export default Todo;