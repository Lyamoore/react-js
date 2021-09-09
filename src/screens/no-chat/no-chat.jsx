import { ChatList } from "../../components/chat-list/chat-list.jsx";

export const NoChat = () => {
  return (
    <div className="App-main">
      <div className="App-left">
        <ChatList />
      </div>
      <div className="App-right"></div>
    </div>
  );
};
