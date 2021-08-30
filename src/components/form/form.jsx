import { useRef, useState } from "react";
import { TextField, Button } from '@material-ui/core';
import Icons from "../icons";
import "./form.css";

export const Form = ({ onSubmit, list }) => {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  const refAutoFocusInp = useRef(null);

  const handleButtonClick = () => {
    if (author.length) {
      onSubmit({ author, text });

      refAutoFocusInp.current?.focus();
  
      setAuthor("");
      setText("");
    }
  };

  const handleChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  return (
    
    <div className="Form">
        <TextField 
        id="text-field-author" 
        label="Your name" 
        className="Form-author" 
        onChange={handleChangeAuthor} 
        value={author} 
        autoFocus 
        inputRef={refAutoFocusInp}
        />
        <TextField 
        id="text-field-text" 
        label="Your message" 
        className="Form-text" 
        onChange={handleChangeText} 
        value={text}
        />
        <Button 
        variant="contained" 
        color="primary" 
        size="large" 
        className="Form-btn" 
        onClick={handleButtonClick}
        >
          <Icons 
          name='message-btn'
          color='#fff'
          size='30'
          className='message-btn'
          />
        </Button>
    </div>
  );
};