import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type ScreenshotType = { id: number; image: string };

export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
  screenshots: ScreenshotType[];
  minimum_system_requirements: SystemReqsType;
}

type SystemReqsType = {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
};

export type GenreType =
  | ""
  | "mmorpg"
  | "shooter"
  | "strategy"
  | "moba"
  | "racing"
  | "sports"
  | "social"
  | "sandbox"
  | "open-world"
  | "survival"
  | "pvp"
  | "pve"
  | "pixel"
  | "voxel"
  | "zombie"
  | "turn-based"
  | "first-person"
  | "third-Person"
  | "top-down"
  | "tank"
  | "space"
  | "sailing"
  | "side-scroller"
  | "superhero"
  | "permadeath"
  | "card"
  | "battle-royale"
  | "mmo"
  | "mmofps"
  | "mmotps"
  | "3d"
  | "2d"
  | "anime"
  | "fantasy"
  | "sci-fi"
  | "fighting"
  | "action-rpg"
  | "action"
  | "military"
  | "martial-arts"
  | "flight"
  | "low-spec"
  | "tower-defense"
  | "horror"
  | "mmorts";

interface GamesParams {
  platform: "pc" | "browser" | "all";
  genre: GenreType;
  sortBy: "release-date" | "popularity" | "alphabetical" | "relevance";
}

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

type GetOneParams = {
  id: number;
};

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

interface GamesState {
  data: Game[];
  currentGameData: Game | undefined;
  loadingStatus: "loading" | "success" | "error";
  gameLoadingStatus: "loading" | "success" | "error";
  platform: "pc" | "browser" | "all";
  genre: GenreType;
  sortBy: "release-date" | "popularity" | "alphabetical" | "relevance";
}

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

interface GamesState {
  data: Game[];
  loadingStatus: "loading" | "success" | "error";
}

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
