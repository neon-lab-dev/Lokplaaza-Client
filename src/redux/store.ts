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

const persistConfig: PersistConfig<AuthState> = {
  key: "auth",
  storage,
};

const persistedAuthReducer = persistReducer<AuthState>(
  persistConfig,
  authReducer
);

export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        [baseApi.reducerPath]: baseApi.reducer,
        auth : persistedAuthReducer,
         customization: customizationReducer,
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