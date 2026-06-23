import { useState } from "react";
import CounterDisplay from "../../Day9/CounterDisplay";
import withCounter from "../../hoc/withCounter";

const Counter = withCounter(CounterDisplay);

function Task3Connect() {
  const [value, setValue] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Counter Processing
        </h2>

        <input
          type="number"
          value={value}
          placeholder="Enter Number"
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full border border-gray-300 rounded-md p-2 mb-6 outline-none"
        />

        <Counter initialCount={value} />
      </div>
    </div>
  );
}

export default Task3Connect;