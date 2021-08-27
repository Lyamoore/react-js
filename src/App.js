import { useCallback, useEffect, useState } from "react";
import { MessageList } from "./components/message-list";
import { Form } from "./components/form";
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
        author: author,
        text: text,
      };

      setList([...list, message]);
    },
    [list]
  );

  useEffect(() => {
    if (list.length) {
      const lastMesAuthor = list[list.length - 1].author;
      const timer = setTimeout(
        () => alert(`${lastMesAuthor}, your message has been sent!`),
        1500
      );

      return () => {
        clearTimeout(timer);
      };
    }
  }, [list]); 

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title"> Chat </h1>
      </header>
      <MessageList list={list} />
      <Form onSubmit={onSubmit} />
    </div>
  );
};

export default App;