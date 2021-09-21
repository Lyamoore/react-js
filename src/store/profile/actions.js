import { TOGGLE_SHOW_USER_NAME_ACTION, CHANGE_NAME_ACTION } from "./constants"

export const toggleUserNameAction = (payload) => ({
    type: TOGGLE_SHOW_USER_NAME_ACTION,
    payload,
})

export const changeNameAction = (payload) => ({
    type: CHANGE_NAME_ACTION,
    payload,
})