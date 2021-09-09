import { GetCounter, GetId } from "../../components/utils/utils";
import { DELETE_CHAT_ACTION, ADD_CHAT_ACTION } from "./constants"

const initialState = {
    chatList: [],
};

export const chatsReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_CHAT_ACTION:
            const counter = GetCounter();

            return {
                ...state,
                chatList: [
                    ...state.chatList,
                    {
                      id: `id${GetId}`,
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
}