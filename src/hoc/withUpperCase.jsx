const withUpperCase = (WrappedComponent) => (props) => {
  return (
    <WrappedComponent
      {...props}
      message={props.message.toUpperCase()}
    />
  );
};

export default withUpperCase;