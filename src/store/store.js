import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import authReducer from './authSlice'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import sidebarColorReducer from './sidebarColorReducer'

import cartSlice from './cartSlice'

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    auth: persistedReducer,
    sidebarColor: sidebarColorReducer,
  },
  middleware: [thunk],
})

export const persistor = persistStore(store);

