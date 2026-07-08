import { useContext } from "react";
import BonusContext from "./context/BonusContext";

function Bonus() {
  const { data } = useContext(BonusContext);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Dashboard
        </h1>

        {data.map((e, i) => (
          <div
            key={i}
            className="space-y-4 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition duration-300"
          >
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">
                Total Students
              </span>
              <span className="text-blue-600 font-bold">
                {e.totalStudents}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">
                Total Courses
              </span>
              <span className="text-green-600 font-bold">
                {e.totalCourses}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">
                Total Placements
              </span>
              <span className="text-purple-600 font-bold">
                {e.totalPlacements}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bonus;