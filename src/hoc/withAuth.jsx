const withAuth = (WrappedComponent) => (props) => {
  if (!props.isLogin) {
    return (
      <h2 className="text-xl font-medium text-red-600 text-center">
        Please Login First
      </h2>
    );
  }

  return <WrappedComponent {...props} />;
};

export default withAuth;