import { List, ListItem, ListItemText, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import React, { useCallback } from "react";

import { addChatAction, deleteChatAction } from "../../store/chats/actions";
import { chatListSelector } from "../../store/chats/selectors";
import Icons from "../icons/Icons";

import "./chat-list.css";

export const ChatList = ({ chatId }) => {
  const chats = useSelector(chatListSelector, shallowEqual);

  const dispatch = useDispatch();

  const addChat = useCallback(() => {
    dispatch(addChatAction());
  }, [dispatch]);

  const deleteChat = useCallback(
    (id) => {
      dispatch(deleteChatAction({ id }));
    },
    [dispatch]
  );

  return (
    <List className="ChatList">
      <IconButton className="add-chat-btn" aria-label="add" onClick={addChat}>
        <Icons name="add-btn" color="#000" size="15" className="add-btn" />
      </IconButton>
      {chats.map((chat) => {
        return (
          <React.Fragment key={chat.id}>
            <Link className="ChatLink" to={`/chats/${chat.id}`}>
              <ListItem className="Chat">
                <ListItemText
                  style={{ color: chat.id === chatId ? "#000" : "#aaa" }}
                  primary={chat.name}
                />
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
            </Link>
          </React.Fragment>
        );
      })}
    </List>
  );
};
