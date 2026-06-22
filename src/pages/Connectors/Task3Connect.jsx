import { useState } from "react";
import CounterDisplay from "../../Day9/CounterDisplay";
import withCounter from "../../hoc/withCounter";

const Counter = withCounter(CounterDisplay);

function Task3Connect() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <h2>Counter Processing</h2>

      <input
        type="number"
        value={value}
        placeholder="Enter Number"
        onChange={(e) => setValue(Number(e.target.value))}
      />

      <br />
      <br />

      <Counter initialCount={value} />
    </div>
  );
}

export default Task3Connect;