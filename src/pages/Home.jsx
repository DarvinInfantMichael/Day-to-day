import { useNavigate } from "react-router-dom"
const Home = () => {
  const nav = useNavigate();
  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-800 to-cyan-600 min-h-screen flex justify-center items-center flex-col">
        <h1>Home</h1>
        <button onClick={()=>nav("/tasks")}className="bg-amber-100 p-5 rounded-2xl ">Navigate Task</button>
    </div>
  )
}

export default Home