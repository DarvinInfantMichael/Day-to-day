import { useReducer } from "react";

const ini = 0;

const reduce = (state, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;

    case "DEC":
      return state - 1;

    case "RESET":
      return 0;

    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reduce, ini);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-96 text-center">

        <h1 className="text-3xl font-bold text-indigo-600 mb-6">
          Counter App
        </h1>

        <div className="bg-indigo-50 rounded-xl py-6 mb-8">
          <p className="text-gray-600 text-lg">Count</p>
          <h2 className="text-5xl font-bold text-indigo-600 mt-2">
            {state}
          </h2>
        </div>

        <div className="flex flex-col gap-4">

          <button
            onClick={() => dispatch({ type: "INC" })}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition"
          >
            Increment
          </button>

          <button
            onClick={() => dispatch({ type: "DEC" })}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition"
          >
            Decrement
          </button>

          <button
            onClick={() => dispatch({ type: "RESET" })}
            className="bg-gray-800 hover:bg-black text-white font-semibold py-3 rounded-lg transition"
          >
            Reset
          </button>

        </div>

      </div>
    </div>
  );
};

export default Counter;