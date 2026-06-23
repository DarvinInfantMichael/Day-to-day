const MessageCom = ({ message }) => {
  return (
    <div className="text-xl font-semibold text-center text-gray-800 break-words">
      {message || "OUTPUT MESSAGE"}
    </div>
  );
};

export default MessageCom;