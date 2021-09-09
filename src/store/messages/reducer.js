import { GetId } from "../../components/utils/utils";
import { ADD_MESSAGES_ACTION } from "./constants"

const initialState = {
    messagesList: [],
};

export const messagesReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGES_ACTION:
            const selectedtList = state.messagesList[action.payload.chatId] || [];
            
            return {
                ...state,
                messagesList: {
                  ...state.messagesList,
                  [action.payload.chatId]: [
                    ...selectedtList,
                    {
                      id: `id-${GetId}`,
                      text: action.payload.text,
                    },
                  ],
                },
            };

        default:
            return state;
    }
}