import { useState } from "react";
import Iteration from "../../Day9/Iteration";
import withIteration from "../../hoc/withIteration";

const IterationP = withIteration(Iteration);

const Task5Connect = () => {
  const [value, setValue] = useState("");
  const [num, setNum] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-[450px]">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Iteration Generator
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block mb-2 font-medium">
              Enter Number
            </label>

            <input
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Enter Color
            </label>

            <input
              type="text"
              value={num}
              onChange={(e) => setNum(e.target.value)}
              placeholder="green, red, blue..."
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>

        <div className="border rounded-md bg-gray-50 p-4 mt-6 min-h-[150px]">
          <IterationP number={value} color={num} />
        </div>
      </div>
    </div>
  );
};

export default Task5Connect;