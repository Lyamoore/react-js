import { useRef, useState } from "react";
import { TextField, Button } from "@material-ui/core";

import Icons from "../icons";

import "./form.css";

export const Form = ({ onSubmit }) => {
  const [text, setText] = useState("");

  const inputRef = useRef(null);

  const handleButtonClick = () => {
    onSubmit({ text });

    inputRef.current?.focus();

    setText("");
  };

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="Form">
      <TextField
        className="Form-text"
        id="text-field-text"
        label="Your message"
        value={text}
        onChange={handleChangeText}
        inputRef={inputRef}
        autoFocus
      />
      <Button
        className="Form-btn"
        variant="contained"
        onClick={handleButtonClick}
        style={{
          backgroundColor: "rgba(33, 71, 197, 0.178)",
        }}
      >
        <Icons
          name="message-btn"
          color="#fff"
          size="30"
          className="message-btn"
        />
      </Button>
    </div>
  );
};
