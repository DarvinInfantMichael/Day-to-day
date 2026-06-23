import { useState } from "react";
import withUpperCase from "../../hoc/withUpperCase";
import MessageCom from "../../Day9/MessageCom";

const UpperComponent = withUpperCase(MessageCom);

function Task2Connect() {
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-[450px]">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Upper Case Converter
        </h2>

        <input
          type="text"
          value={message}
          placeholder="Enter Message"
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-3 mb-6"
        />

        <div className="border rounded-md p-5 bg-gray-50">
          <UpperComponent message={message} />
        </div>
      </div>
    </div>
  );
}

export default Task2Connect;