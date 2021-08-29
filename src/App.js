import { useCallback, useEffect, useState } from "react";
import { MessageList } from "./components/message-list";
import { Form } from "./components/form";
import { ChatList } from "./components/chat-list";
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

  // useEffect(() => {
  //   if (list.length) {
  //     const lastMesAuthor = list[list.length - 1].author;
      // const timer = setTimeout(
      //   () => alert(`${lastMesAuthor}, your message has been sent!`),
      //   1500
      // );

      // return () => {
      //   clearTimeout(timer);
      // };
  //   }
  // }, [list]); 

  return (
    <div className="App">
          <header className="App-header">
            <h1 className="App-title"> Chatex </h1>
          </header>
      <div className="Content">
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