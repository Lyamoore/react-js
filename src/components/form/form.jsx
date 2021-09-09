import { TextField, Button } from "@material-ui/core";
import { useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addMessagesAction } from "../../store/messages/actions";

import Icons from "../icons";

import "./form.css";

export const Form = ({ chatId }) => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const inputRef = useRef(null);

  const handleButtonClick = useCallback(() => {
    dispatch(addMessagesAction({ chatId, text }));

    inputRef.current?.focus();

    setText("");
  });

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
