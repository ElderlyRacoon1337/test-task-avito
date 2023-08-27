import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  Game,
  GamesParams,
  GamesState,
  GetOneParams,
  Status,
} from "../types/types";

export const getData = createAsyncThunk<Game[], GamesParams>(
  "games/getGames",
  async (params) => {
    const { sortBy, platform, genre } = params;
    const { data } = await axios.get(
      `https://www.freetogame.com/api/games?platform=${platform}&${
        genre && `category=${genre}&`
      }sort-by=${sortBy}`
    );
    return data;
  }
);

export const getOneGame = createAsyncThunk<Game[], GetOneParams>(
  "games/getOneGame",
  async (params) => {
    const { id } = params;
    const { data } = await axios.get(
      `https://www.freetogame.com/api/game?id=${id}`
    );
    return data;
  }
);

const initialState: GamesState = {
  data: [],
  currentGameData: undefined,
  loadingStatus: Status.LOADING,
  gameLoadingStatus: Status.LOADING,
  platform: "all",
  genre: "shooter",
  sortBy: "relevance",
};

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    setLoadingStatus(state, action: PayloadAction<Status>) {
      state.loadingStatus = action.payload;
    },
    setGameLoadingStatus(state, action: PayloadAction<Status>) {
      state.gameLoadingStatus = action.payload;
    },
  },
  extraReducers: (builder) => {
    // getdata
    builder.addCase(getData.pending, (state) => {
      state.loadingStatus = Status.LOADING;
      state.data = [];
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      state.loadingStatus = Status.SUCCESS;
      state.data = action.payload;
    });
    builder.addCase(getData.rejected, (state) => {
      state.loadingStatus = Status.ERROR;
      state.data = [];
    });
    // getone
    builder.addCase(getOneGame.pending, (state) => {
      state.gameLoadingStatus = Status.LOADING;
      state.currentGameData = undefined;
    });
    builder.addCase(getOneGame.fulfilled, (state, action) => {
      state.gameLoadingStatus = Status.SUCCESS;
      state.currentGameData = action.payload as unknown as Game;
    });
    builder.addCase(getOneGame.rejected, (state) => {
      state.gameLoadingStatus = Status.ERROR;
      state.currentGameData = undefined;
    });
  },
});

export const { setLoadingStatus, setGameLoadingStatus } = gamesSlice.actions;

export default gamesSlice.reducer;
