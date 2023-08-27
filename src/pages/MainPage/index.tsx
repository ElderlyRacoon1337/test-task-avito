import { useContext, useEffect, useState } from "react";
import { Filters } from "../../components/FIlters";
import { ThemeContext } from "cutie-ui";
import { Items } from "../../components/Items";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setCurrentPage, setGamesData } from "../../redux/slices/pagesSlice";
import { getData, setLoadingStatus } from "../../redux/slices/gamesSlice";
import { Pagination } from "../../components/Pagination";
import { createPages } from "../../utils/createPages";
import { toEngGenre } from "../../utils/toEngGenre";
import { toEngPlatform } from "../../utils/toEngPlatform";
import { toEngSortBy } from "../../utils/toEngSortBy";
import { Status } from "../../redux/types/types";

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.games.data);

  // ========================== Theme change =============================
  // const [theme, setTheme] = useState<"dark" | "light" | "system">("system");
  const theme = "system";
  const { changeTheme } = useContext(ThemeContext);
  useEffect(() => {
    changeTheme(theme);
  }, [theme]);
  // =================================================================

  const [platform, setPlatform] = useState("Все платформы");

  const [genre, setGenre] = useState("Все");

  const [sortBy, setSortBy] = useState("Релевантности");

  useEffect(() => {
    const enSortBy = toEngSortBy(sortBy);
    const enPlatform = toEngPlatform(platform);
    const enGenre = toEngGenre(genre);

    dispatch(
      getData({ sortBy: enSortBy, genre: enGenre, platform: enPlatform })
    );

    dispatch(setGamesData(data));
    dispatch(setCurrentPage(1));

    return () => {
      dispatch(setLoadingStatus(Status.LOADING));
    };
  }, [platform, genre, sortBy]);

  // ========================== Pagination =============================
  const { currentPage, perPage } = useAppSelector((state) => state.pages);
  const totalCount = data.length;
  const pagesCount = Math.ceil(totalCount / perPage);
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;
  const currentGames = data.slice(startIndex, endIndex);

  const pages: number[] = [];
  createPages(pages, pagesCount, currentPage);
  // =================================================================

  return (
    <div className="container">
      <Filters
        platform={platform}
        setPlatform={setPlatform}
        genre={genre}
        setGenre={setGenre}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <Items currentGames={currentGames} />
      {data[0]?.title ? (
        <Pagination
          currentPage={currentPage}
          pages={pages}
          pagesCount={pagesCount}
        />
      ) : (
        ""
      )}
    </div>
  );
};
