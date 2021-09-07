import { TOGGLE_SHOW_USER_NAME_ACTION } from "./constants"

const initialState = {
    userName: 'Artem',
    showUserName: false,
};

export const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case TOGGLE_SHOW_USER_NAME_ACTION:
            return {
                ...state,
                showUserName: !state.showUserName
            };
            default:
                return state;
    }
}