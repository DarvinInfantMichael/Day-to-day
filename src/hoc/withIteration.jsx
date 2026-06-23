const withIteration = (WrappedComponent) => (props) => {
  let n = [];

  for (let i = 1; i <= props.number; i++) {
    n = [...n, i];
  }

  return (
    <WrappedComponent
      {...props}
      number={n}
      color={props.color}
    />
  );
};

export default withIteration;