import { useRef, useState } from "react";
import { TextField, Button } from "@material-ui/core";
import Icons from "../icons";
import "./form.css";

export const Form = ({ messages, onSubmit }) => {
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
      />
      <Button
        className="Form-btn"
        variant="contained"
        onClick={handleButtonClick}
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
