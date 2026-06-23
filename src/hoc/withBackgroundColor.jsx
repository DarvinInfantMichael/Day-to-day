const withBackgroundColor = (WrappedComponent) => (props) => {
  return (
    <div
      style={{
        backgroundColor: props.color || "#4B5563",
      }}
      className="p-6 rounded-lg text-white w-80 text-center shadow-lg"
    >
      <WrappedComponent {...props} />
    </div>
  );
};

export default withBackgroundColor;