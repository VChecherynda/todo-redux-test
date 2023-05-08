import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import { 
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import issueReducer  from '../../entities/issue/model/slice';

import storage from 'redux-persist/lib/storage'; 

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, issueReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
            FLUSH,
            REHYDRATE,
            PAUSE,
            PERSIST,
            PURGE,
            REGISTER
        ],
      },
    }),
});

const persistor = persistStore(store)

export {
    Provider,
    store,
    persistor
}