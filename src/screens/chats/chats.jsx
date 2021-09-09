import { useParams, Redirect } from "react-router-dom";
import { useCallback } from "react";

import { GetId } from "../../components/utils/utils";
import { ChatList } from "../../components/chat-list";
import { MessageList } from "../../components/message-list";
import { Form } from "../../components/form";
import { ROUTES } from "../../routing/constants";

import "./chats.css";

export const Chats = ({ chats, setChats }) => {
  const { chatId } = useParams();

  const onSubmit = useCallback(
    ({ text }) => {
      const message = {
        id: GetId(),
        text,
      };

      setChats((prevChats) => {
        const messages = [...prevChats[chatId].messages, message];
        const newChats = { ...prevChats };
        newChats[chatId].messages = messages;
        return newChats;
      });
    },
    [chats]
  );

  if (!chatId || !chats[chatId]) {
    return <Redirect to={ROUTES.NO_CHAT} />;
  }

  return (
    <div className="App-main">
      <div className="App-left">
        <ChatList chats={chats} chatId={chatId} setChats={setChats} />
      </div>
      <div className="App-right">
        <MessageList messages={chats[chatId].messages} />
        <Form onSubmit={onSubmit} />
      </div>
    </div>
  );
};
