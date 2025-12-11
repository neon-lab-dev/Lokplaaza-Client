/* eslint-disable @typescript-eslint/no-explicit-any */
import { configureStore } from '@reduxjs/toolkit'
import {persistReducer, persistStore, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  PersistConfig,} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer,{ AuthState } from './features/Auth/authSlice';
import customizationReducer from "./features/Customizations/customizationSlice";
import { baseApi } from './api/baseApi';
import cartReducer from './features/Cart/cartSlice';

const persistConfig: PersistConfig<AuthState> = {
  key: "auth",
  storage,
};

const persistedAuthReducer = persistReducer<AuthState>(
  persistConfig,
  authReducer
);
const persistedCartReducer = persistReducer<any>(
  persistConfig,
  cartReducer
);
export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,

    auth: persistedAuthReducer,
    customization: customizationReducer,

    cart: persistedCartReducer, // <-- THIS MUST BE INSIDE `reducer: {}`
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store);