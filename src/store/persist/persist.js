import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import { rootReducer } from '../root-reducer';

const persistConfig = {
    key: 'root',
    storage,
}

export  const persistedReducer = persistReducer(persistConfig, rootReducer);