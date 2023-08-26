import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "./slices/gamesSlice";
import pagesReducer from "./slices/pagesSlice";

export const store = configureStore({
  reducer: { games: gamesReducer, pages: pagesReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
