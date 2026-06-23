const CounterDisplay = ({ count }) => {
  return (
    <div className="mb-6">
      <h1 className="text-5xl font-bold text-gray-800 text-center">
        {count}
      </h1>
    </div>
  );
};

export default CounterDisplay;