import SetCounter from "../../Day9/SetCounter";
import withLoading from "../../hoc/withLoading";

const Load = withLoading(SetCounter);

function Task6Connect() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-[450px]">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Loading HOC Example
        </h2>

        <div className="border rounded-md bg-gray-50 p-6 min-h-[180px] flex items-center justify-center">
          <Load />
        </div>
      </div>
    </div>
  );
}

export default Task6Connect;