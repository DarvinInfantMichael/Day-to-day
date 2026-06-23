const Iteration = ({ number, color }) => {
  return (
    <div className="mt-4">
      {number.map((value) => (
        <h3
          key={value}
          style={{ color }}
          className="text-lg font-medium text-center py-1"
        >
          Number {value}
        </h3>
      ))}
    </div>
  );
};

export default Iteration;