import { useState } from "react";

import "./form.css";

export const Form = ({ onSubmit }) => {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  const handleButtonClick = () => {
    onSubmit({ author, text });

    setAuthor("");
    setText("");
  };

  const handleChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="Form">
      <input className="Form-author" type="text" value={author} placeholder="Enter your name" onChange={handleChangeAuthor} />
      <input className="Form-text" type="text" value={text} placeholder="Write your message" onChange={handleChangeText} />
      <button className="Form-btn" onClick={handleButtonClick}>
        Send message
      </button>
    </div>
  );
};