import { getId } from "../../components/utils/utils";
import { ADD_MESSAGE_ACTION } from "./constants"

const initialState = {
  messageList: {},
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE_ACTION:
      const currentList = state.messageList[action.payload.chatId] || [];
      return {
        ...state,
        messageList: {
          ...state.messageList,
          [action.payload.chatId]: [
            ...currentList,
            {
              id: `id-${getId()}`,
              text: action.payload.text,
            },
          ],
        },
      };
    default:
      return state;
  }
};