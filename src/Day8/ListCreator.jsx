import { useState } from "react";

const ListCreator = () => {
  // 16. User List Creator
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);

  // 17. Product List Creator
  const [product, setProduct] = useState("");
  const [products, setProducts] = useState([]);

  // 18. Employee List Creator
  const [empName, setEmpName] = useState("");
  const [empId, setEmpId] = useState("");
  const [empDept, setEmpDept] = useState("");
  const [employees, setEmployees] = useState([]);

  // 19. Todo Application
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // User
  const addUser = () => {
    if (username.trim() === "") return;

    setUsers([...users, username]);
    setUsername("");
  };

  // Product
  const addProduct = () => {
    if (product.trim() === "") return;

    setProducts([...products, product]);
    setProduct("");
  };

  // Employee
  const addEmployee = () => {
    if (
      empName.trim() === "" ||
      empId.trim() === "" ||
      empDept.trim() === ""
    )
      return;

    setEmployees([
      ...employees,
      {
        name: empName,
        id: empId,
        dept: empDept,
      },
    ]);

    setEmpName("");
    setEmpId("");
    setEmpDept("");
  };

  // Todo
  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-800 to-cyan-600 py-10 px-6">
      <h1 className="text-4xl font-bold text-center text-white mb-10">
        React useState + Array Practice
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {/* User List */}
        <div className="bg-white rounded-2xl shadow-2xl p-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-5">
            👤 User List Creator
          </h2>

          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={addUser}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
          >
            Add User
          </button>

          {users.length > 0 && (
            <div className="mt-5">
              <h3 className="font-bold text-lg mb-2">Users</h3>

              {users.map((user, index) => (
                <div
                  key={index}
                  className="bg-blue-50 p-3 rounded-lg mb-2"
                >
                  {index + 1}. {user}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Product List */}
        <div className="bg-white rounded-2xl shadow-2xl p-6">
          <h2 className="text-2xl font-bold text-green-700 mb-5">
            📦 Product List Creator
          </h2>

          <input
            type="text"
            placeholder="Enter Product Name"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button
            onClick={addProduct}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold"
          >
            Add Product
          </button>

          {products.length > 0 && (
            <div className="mt-5">
              <h3 className="font-bold text-lg mb-2">Products</h3>

              {products.map((item, index) => (
                <div
                  key={index}
                  className="bg-green-50 p-3 rounded-lg mb-2"
                >
                  {index + 1}. {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Employee List */}
        <div className="bg-white rounded-2xl shadow-2xl p-6">
          <h2 className="text-2xl font-bold text-purple-700 mb-5">
            👨‍💼 Employee List Creator
          </h2>

          <input
            type="text"
            placeholder="Employee Name"
            value={empName}
            onChange={(e) => setEmpName(e.target.value)}
            className="w-full border rounded-lg p-3 mb-4"
          />

          <input
            type="text"
            placeholder="Employee ID"
            value={empId}
            onChange={(e) => setEmpId(e.target.value)}
            className="w-full border rounded-lg p-3 mb-4"
          />

          <input
            type="text"
            placeholder="Department"
            value={empDept}
            onChange={(e) => setEmpDept(e.target.value)}
            className="w-full border rounded-lg p-3 mb-4"
          />

          <button
            onClick={addEmployee}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold"
          >
            Add Employee
          </button>

          {employees.length > 0 && (
            <div className="mt-5 space-y-3">
              <h3 className="font-bold text-lg">Employee List</h3>

              {employees.map((emp, index) => (
                <div
                  key={index}
                  className="bg-purple-50 border border-purple-200 rounded-xl p-4"
                >
                  <p><strong>Name:</strong> {emp.name}</p>
                  <p><strong>ID:</strong> {emp.id}</p>
                  <p><strong>Department:</strong> {emp.dept}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Todo */}
        <div className="bg-white rounded-2xl shadow-2xl p-6">
          <h2 className="text-2xl font-bold text-red-700 mb-5">
            ✅ Todo Application
          </h2>

          <input
            type="text"
            placeholder="Enter Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <button
            onClick={addTask}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold"
          >
            Add Task
          </button>

          {tasks.length > 0 && (
            <div className="mt-5">
              <h3 className="font-bold text-lg mb-2">Todo List</h3>

              {tasks.map((todo, index) => (
                <div
                  key={index}
                  className="bg-red-50 p-3 rounded-lg mb-2"
                >
                  {index + 1}. {todo}
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default ListCreator;