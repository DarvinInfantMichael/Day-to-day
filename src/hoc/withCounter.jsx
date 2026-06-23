import { useEffect, useState } from "react";

const withCounter = (WrappedComponent) => (props) => {
  const [count, setCount] = useState(props.initialCount || 0);

  useEffect(() => {
    setCount(props.initialCount || 0);
  }, [props.initialCount]);

  return (
    <div className="flex flex-col items-center">
      <WrappedComponent {...props} count={count} />

      <div className="flex gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-600 text-white px-5 py-2 rounded-md"
        >
          Increment
        </button>

        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-600 text-white px-5 py-2 rounded-md"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default withCounter;