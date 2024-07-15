import { configureStore } from "@reduxjs/toolkit";
import bookmarkReducer from "../slices/bookmark";

export const store = configureStore({
    reducer:{
        bookmark: bookmarkReducer
    }
});

export type AppDispatch= typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;