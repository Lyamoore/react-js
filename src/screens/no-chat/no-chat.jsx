import IconButton from "@material-ui/core/IconButton";

import { ChatList } from "../../components/chat-list/chat-list.jsx";
import { GetId } from "../../components/utils/utils.jsx";
import { GetCounter } from "../../components/utils/utils.jsx";
import Icons from "../../components/icons/Icons.jsx";

const counter = GetCounter();

export const NoChat = ({ chats, setChats }) => {
  const addChat = () => {
    const id = GetId();
    setChats({
      ...chats,
      [id]: {
        name: `Chat ${counter()}`,
        messages: [],
      },
    });
  };

  return (
    <div className="App-main">
      <div className="App-left">
        <ChatList chats={chats} setChats={setChats} />
      </div>
      <div className="App-right">
        <IconButton aria-label="add" onClick={addChat}>
          <Icons name="add-btn" color="#fff" size="30" className="add-btn" />
        </IconButton>
      </div>
    </div>
  );
};
