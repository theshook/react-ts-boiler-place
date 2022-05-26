import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "slice";
import { TodoSlice } from 'services'


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [TodoSlice.reducerPath]: TodoSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(TodoSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
