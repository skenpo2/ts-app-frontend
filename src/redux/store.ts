import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authslice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// Types for dispatch and selector
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
