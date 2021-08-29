import "./messageList.css";

export const MessageList = ({ list }) => {
  return (
    <div className="message-list">
      {list.map((message) => {
        return (
          <div className="message" key={message.id}>
            {message.author}: {message.text}
          </div>
        );
      })}
    </div>
  );
};