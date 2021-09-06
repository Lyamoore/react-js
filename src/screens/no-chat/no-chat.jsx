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
    <>
      <ChatList chats={chats} setChats={setChats} />
      <h3>Please select a chat or start a new chat!</h3>
      <IconButton aria-label="add" onClick={addChat}>
        <Icons name="add-btn" color="#fff" size="30" className="add-btn" />
      </IconButton>
    </>
  );
};
