import { useParams } from "react-router-dom"
import { ChatList } from "../../components/chat-list";
import { MessageList } from "../../components/message-list";
import { Form } from "../../components/form";

export const Chats = ({list, onSubmit}) => {
    const { chatId } = useParams();

    if (!chatId) {
        // спрятать чат
    }

    return (
        <div className="Content-сhat">
        <ChatList list={list} />
        <div className="Chat">
          <MessageList list={list} />
          <Form onSubmit={onSubmit} />
      </div>
      </div>
    )
}