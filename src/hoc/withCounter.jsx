import { useEffect, useState } from "react";

const withCounter = (WrappedComponent) => (props) => {
  const [count, setCount] = useState(props.initialCount || 0);

  useEffect(() => {
    setCount(props.initialCount || 0);
  }, [props.initialCount]);

  return (
    <div>
      <WrappedComponent {...props} count={count} />

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default withCounter;