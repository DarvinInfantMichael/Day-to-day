const UserCard = ({ name, role }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">
        {name || "User Name"}
      </h1>

      <h3 className="text-lg">
        {role || "User Role"}
      </h3>
    </div>
  );
};

export default UserCard;