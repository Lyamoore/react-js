import { useSelector } from "react-redux";

import { messagesListSelector } from "../../store/messages/selectors";
import { userNameSelector } from "../../store/profile/selectors";

import "./messageList.css";

export const MessageList = ({ chatId }) => {
  const userName = useSelector(userNameSelector);

  const messages = useSelector(messagesListSelector);

  if (!messages[chatId]) {
    return <div className="message-list"></div>;
  }

  return (
    <div className="message-list">
      {messages[chatId].map((message) => {
        return (
          <div className="message" key={message.id}>
            <span>
              {userName}: {message.text}
            </span>
          </div>
        );
      })}
    </div>
  );
};
