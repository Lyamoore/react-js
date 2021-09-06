import { List, ListItem, ListItemText, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";

import Icons from "../icons";

import "./chat-list.css";

export const ChatList = ({ chats, chatId, setChats }) => {
  const deleteChat = (id) => {
    setChats((prevChats) => {
      const newChats = { ...prevChats };
      delete newChats[id];
      return newChats;
    });
  };

  return (
    <List className="chat-list">
      {Object.keys(chats).map((id) => {
        return (
          <React.Fragment key={id}>
            <ListItem className="Chat">
              <Link to={`/chats/${id}`} className="ChatLink">
                <ListItemText
                  style={{ color: id === chatId ? "#000" : "#aaa" }}
                  primary={chats[id].name}
                />
              </Link>
              <IconButton aria-label="delete" onClick={() => deleteChat(id)}>
                <Icons
                  name="delete-btn"
                  color="#000"
                  size="15"
                  className="delete-btn"
                />
              </IconButton>
            </ListItem>
          </React.Fragment>
        );
      })}
    </List>
  );
};
