import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Game, PagesState } from "../types/types";

const initialState: PagesState = {
  data: [],
  currentPage: 1,
  perPage: 12,
};

const pagesSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setGamesData(state, action: PayloadAction<Game[]>) {
      state.data = action.payload;
    },
  },
});

export const { setCurrentPage, setGamesData } = pagesSlice.actions;

export default pagesSlice.reducer;
