// src/redux/store.ts
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // ✅ uses localStorage for web

import authReducer from "./features/Auth/authSlice";
import { baseApi } from "./api/baseApi";

// 1. persist configuration
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // only persist 'auth' slice
};

// 2. combine reducers
const rootReducer = combineReducers({
  auth: authReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

// 3. wrap reducers with persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 4. configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

// 5. create persistor
export const persistor = persistStore(store);

// 6. export types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
