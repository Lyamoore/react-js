import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

export const Form = () => {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  useEffect(()=>{
  
    
  },[])

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {console.log(text)};

  return (
    <>
      <input variant='outlined' placeholder='author name' />
      <input variant='outlined' color='primary' id="standard-basic" label="text" placeholder='some text' value={text} onChange={handleTextChange}/>
      <button onClick={handleClick}>Go!</button>
    </>
  );
};

Form.propTypes = {
  name: PropTypes.string.isRequired,
  notExistingProp: PropTypes.func
}

Form.defaultProps={
  notExistingProp:()=>{console.log('notExistingProp is called')} 
}