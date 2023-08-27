export type ScreenshotType = { id: number; image: string };

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

export type SystemReqsType = {
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

export type GetOneParams = {
  id: number;
};

export interface GamesState {
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

export interface GamesParams {
  platform: "pc" | "browser" | "all";
  genre: GenreType;
  sortBy: "release-date" | "popularity" | "alphabetical" | "relevance";
}

export interface PagesState {
  data: Game[];
  currentPage: number;
  perPage: number;
}
