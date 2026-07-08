import { useContext } from "react";
import StudentContext from "./context/StudentContext";

function Student() {
  const { data } = useContext(StudentContext);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Student List
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="px-6 py-3 text-left">ID</th>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Course</th>
              </tr>
            </thead>

            <tbody>
              {data.map((e) => (
                <tr
                  key={e.id}
                  className="border-b hover:bg-gray-100 transition"
                >
                  <td className="px-6 py-4">{e.id}</td>
                  <td className="px-6 py-4 font-medium">{e.name}</td>
                  <td className="px-6 py-4">{e.course}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Student;