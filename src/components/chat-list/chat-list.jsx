import { List, ListItem, ListItemText, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useCallback } from "react";

import { addChatAction, deleteChatAction } from "../../store/chats/actions";
import { chatListSelector } from "../../store/chats/selectors";
import Icons from "../icons";

import "./chat-list.css";

export const ChatList = ({ chatId }) => {
  const chats = useSelector(chatListSelector);

  const dispatch = useDispatch();

  const addChat = useCallback(() => {
    dispatch(addChatAction(), [dispatch]);
  }, [chats]);

  const deleteChat = useCallback(
    (id) => {
      dispatch(deleteChatAction({ id }), [dispatch, id]);
    },
    [chats]
  );

  return (
    <List className="chat-list">
      <IconButton className="add-chat-btn" aria-label="add" onClick={addChat}>
        <Icons name="add-btn" color="#000" size="15" className="add-btn" />
      </IconButton>
      {chats.map((chat) => {
        return (
          <React.Fragment key={chat.id}>
            <ListItem className="Chat">
              <Link to={`/chats/${chat.id}`} className="ChatLink">
                <ListItemText
                  style={{ color: chat.id === chatId ? "#000" : "#aaa" }}
                  primary={chat.name}
                />
              </Link>
              <IconButton
                aria-label="delete"
                onClick={() => deleteChat(chat.id)}
              >
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
