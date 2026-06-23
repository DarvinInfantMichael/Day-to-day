import { useEffect, useState } from "react";

const withLoading = (WrappedComponent) => (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <WrappedComponent {...props} />
      )}
    </div>
  );
};

export default withLoading;