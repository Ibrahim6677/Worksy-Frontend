// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import authApi from './features/auth/authSlice';
export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(authApi.middleware),
});