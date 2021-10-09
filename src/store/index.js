import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

import { chatReducers } from './chats/reducer';
import { messageReducers } from './messages/reducer';
import { profileReducers } from './profile/reducer';
import { dogPictureReducers } from './dogs-pic/reducer';
import { authenticatedReducers } from './authenticated/reducer';
import { middleware } from "./middlewares/index";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: "root",
    storage,
    blacklist: ["chats", "messages"],
};

const rootReducer = combineReducers({
    profile: profileReducers,
    messages: messageReducers,
    chats: chatReducers,
    dogPicture: dogPictureReducers,
    authenticated: authenticatedReducers,
  });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(middleware, thunk)));

export let persistor = persistStore(store);