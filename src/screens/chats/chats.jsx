import { useParams, Redirect } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";

import { chatListSelector } from "../../store/chats/selectors";
import { ChatList } from "../../components/chat-list";
import { MessageList } from "../../components/message-list";
import { Form } from "../../components/form";
import { ROUTES } from "../../routing/constants";

import "./chats.css";

export const Chats = () => {
  const { chatId } = useParams();

  const chats = useSelector(chatListSelector, shallowEqual);

  const chat = chats.find((chat) => chat.id === chatId);

  if (!chatId || !chat) {
    return <Redirect to={ROUTES.NO_CHAT} />;
  }

  return (
    <div className="App-main">
      <div className="App-left">
        <ChatList chatId={chatId} />
      </div>
      <div className="App-right">
        <MessageList chatId={chatId} />
        <Form chatId={chatId} />
      </div>
    </div>
  );
};
