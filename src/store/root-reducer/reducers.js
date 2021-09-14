import { combineReducers } from 'redux';

import { chatsReducer } from '../components-store/chats/reducer'; 
import { messagesReducer } from '../components-store/messages/reducer';
import { profileReducer } from '../components-store/profile/reducer';

export const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
});