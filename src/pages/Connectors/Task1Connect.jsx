import { useState } from "react";
import UserCard from "../../Day9/UserCard";
import withBackgroundColor from "../../hoc/withBackgroundColor";

const ColorUserCard = withBackgroundColor(UserCard);

function Task1Connect() {
  const [color, setColor] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-[400px]">
        <h2 className="text-2xl font-semibold text-center mb-6">
          User Card Generator
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
          />

          <input
            type="text"
            placeholder="Enter Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
          />

          <input
            type="text"
            placeholder="Enter Color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mt-8 flex justify-center">
          <ColorUserCard
            name={name}
            role={role}
            color={color}
          />
        </div>
      </div>
    </div>
  );
}

export default Task1Connect;