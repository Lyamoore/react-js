import { shallowEqual, useSelector } from "react-redux";

import { messageListSelector } from "../../store/messages/selectors";

import "./messageList.css";

export const MessageList = ({ chatId }) => {
  const messages = useSelector(messageListSelector, shallowEqual);

  if (!messages[chatId]) {
    return <div className="message-list"></div>;
  }

  return (
    <div className="message-list">
      {messages[chatId].map((message) => {
        return (
          <div className="message" key={message.id}>
            <span>{message.text}</span>
          </div>
        );
      })}
    </div>
  );
};
