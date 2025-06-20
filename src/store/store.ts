import { configureStore } from '@reduxjs/toolkit';
import formReducer from './slices/formSlice';
import jobReducer from './slices/jobSlice';

export const store = configureStore({
  reducer: {
    form: formReducer,
    jobs:jobReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
