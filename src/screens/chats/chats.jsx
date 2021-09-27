import { List, ListSubheader } from "@material-ui/core";
import { useParams, Redirect, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";

import {
  addMessageThunkAction,
  addMessageWithFirebase,
  deleteMessageWithFirebase,
  initMessageTracking,
} from "../../store/messages/actions";
import {
  addChatWithFirebase,
  deleteChatWithFirebase,
  initChatTracking,
} from "../../store/chats/actions";
import { messagesSelector } from "../../store/messages/selectors";
import { chatsSelector } from "../../store/chats/selectors";
import { ROUTES } from "../../routing/constants";
import { ChatList } from "../../components/chat-list";
import { AddChatButton } from "../../components/add-chat-button";
import { SelectChat } from "../../components/select-chat";
import { Notice } from "../../components/notice";
import { ChatMessages } from "../../components/chat-messages/chat-messages";

import "./chats.css";

export const ChatsContainer = () => {
  const dispatch = useDispatch();

  const { chatId } = useParams();
  const { path } = useRouteMatch();

  const [message, setMessage] = useState("");
  const [notice, setNotice] = useState("");
  const { messageList } = useSelector(messagesSelector);

  const chatList = useSelector(chatsSelector);
  const [chatName, setChatName] = useState("");
  const [name, setName] = useState("");

  const [open, setOpen] = useState(false);
  const idMessage = `${chatId}-${messageList[chatId]?.length || 0}`;

  const handleMessageChange = useCallback(
    (e) => {
      setMessage(e.target.value);
    },
    [setMessage]
  );

  const handleClick = useCallback(() => {
    if (message.length !== 0) {
      dispatch(addMessageWithFirebase({ chatId, idMessage, message }));
      dispatch(addMessageThunkAction({ name, setNotice }));
      setMessage("");
    }
  }, [dispatch, message, chatId, name, setNotice, idMessage]);

  const mouseOver = useCallback(() => {
    setNotice("");
  }, [setNotice]);

  const handleChatNameChange = useCallback(
    (e) => {
      setChatName(e.target.value);
    },
    [setChatName]
  );

  const handleAddChat = useCallback(() => {
    if (chatName.length !== 0) {
      dispatch(addChatWithFirebase(chatName));
      setOpen(false);
      setChatName("");
    }
  }, [dispatch, chatName, setOpen, setChatName]);

  const handeleClickChatDelete = useCallback(
    (id) => {
      dispatch(deleteChatWithFirebase(id));
      dispatch(deleteMessageWithFirebase(id));
    },
    [dispatch]
  );

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  useEffect(() => {
    dispatch(initMessageTracking());
    dispatch(initChatTracking());
  }, [dispatch]);

  useEffect(() => {
    if (!chatId || !chatList.find((item) => item.id === chatId)) {
      setName("");
    } else {
      setName(chatList.find((item) => item.id === chatId).chatName);
    }
  }, [chatList, chatId, setName]);

  if (
    !chatList.find((item) => item.id === chatId) &&
    path === "/chats/:chatId?"
  ) {
    return <Redirect to={ROUTES.CHATS} />;
  }

  return (
    <div className="Chats">
      <Notice mouseOver={mouseOver} notice={notice} />
      <div>
        <List
          subheader={
            <ListSubheader
              component="div"
              color="primary"
              id="nested-list-subheader"
            >
              Сhat list
            </ListSubheader>
          }
        >
          <ChatList
            chatId={chatId}
            chatList={chatList}
            handeleClickChatDelete={handeleClickChatDelete}
            setName={setName}
          />
        </List>
        <div className="Chats__add-chat">
          <AddChatButton
            handleClickOpen={handleClickOpen}
            open={open}
            handleClose={handleClose}
            chatName={chatName}
            handleChatNameChange={handleChatNameChange}
            handleAddChat={handleAddChat}
          />
        </div>
      </div>
      {chatId && (
        <ChatMessages
          messageList={messageList}
          chatId={chatId}
          handleMessageChange={handleMessageChange}
          handleClick={handleClick}
          message={message}
          name={name}
        />
      )}
      {!chatId && <SelectChat />}
    </div>
  );
};
