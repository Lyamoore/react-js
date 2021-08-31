import { useCallback, useState } from "react";

import { MessageList } from "./components/message-list";
import { Form } from "./components/form";
import { ChatList } from "./components/chat-list";
import { Tabss } from "./components/tabs";

import "./App.css";

const App = () => {
  const [list, setList] = useState([]);

  const getId = () => {
    return Math.random();
  };

  const onSubmit = useCallback(
    ({ author, text }) => {
      let message = {
        id: getId(),
        author,
        text,
      };

      setList([...list, message]);
    },
    [list]
  );  

  return (
    <div className="App">
      <Tabss />
      <div className="Content-сhat">
        <ChatList list={list} />
        <div className="Chat">
          <MessageList list={list} />
          <Form onSubmit={onSubmit} />
      </div>
      </div>
    </div>
  );
};

export default App;