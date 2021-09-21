import { getCounter, getId } from "../../components/utils/utils";
import { DELETE_CHAT_ACTION, ADD_CHAT_ACTION } from "./constants"

const initialState = {
  chatList: [],
};

const counter = getCounter();

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT_ACTION:
      return {
        ...state,
        chatList: [
          ...state.chatList,
          {
            id: `${getId()}`,
            name: `Chat ${counter()}`,
          },
        ],
      };
    case DELETE_CHAT_ACTION:
      const newChatList = state.chatList.filter(
        (chat) => action.payload.id !== chat.id
      );
      return {
        ...state,
        chatList: [...newChatList],
      };
    default:
      return state;
  }
};