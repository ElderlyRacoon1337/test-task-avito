import styles from "./GamePage.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect, useRef, useState } from "react";
import {
  getOneGame,
  setGameLoadingStatus,
} from "../../redux/slices/gamesSlice";
import { useNavigate, useParams } from "react-router-dom";
import { FullGameLeft } from "../../components/FullGameLeft";
import { FullGameRight } from "../../components/FullGameRight";
import { Button, Icon, Loader } from "cutie-ui";
import { Game, Status } from "../../redux/types/types";

export const GamePage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.games.currentGameData);
  const { id } = useParams();

  const handleClickBack = () => {
    navigate(-1);
  };

  const [gameData, setGameData] = useState<Game | undefined>(undefined);
  const loadingStatus = useAppSelector(
    (state) => state.games.gameLoadingStatus
  );

  // ================ Реализация сохранения данных игры в Localstorage на 5 минут ===================
  const currentTime: number = new Date().getTime();
  const FIVE_MINUTES: number = 5 * 60 * 1000;

  function isCardAvailable(gameId: string) {
    const localStorageData: string | null = localStorage.getItem(
      `game_${gameId}`
    );
    const storedTime = localStorageData
      ? JSON.parse(localStorageData).currentTime
      : null;
    if (storedTime) {
      const currentTime: number = new Date().getTime();
      return currentTime - parseInt(storedTime) <= FIVE_MINUTES;
    }
    return false;
  }

  function addCardToLS(data?: Game) {
    localStorage.removeItem(`game_${data?.id}`);
    if (data) {
      localStorage.setItem(
        `game_${data.id}`,
        JSON.stringify({ data, currentTime })
      );
    }
  }

  useEffect(() => {
    if (id) {
      const cardAvailable = isCardAvailable(id);
      if (cardAvailable) {
        // @ts-ignore
        const localStorageData = JSON.parse(localStorage.getItem(`game_${id}`));
        setGameData(localStorageData.data);
        dispatch(setGameLoadingStatus(Status.SUCCESS));
      } else {
        const _id = +id;
        dispatch(getOneGame({ id: _id }));
        if (loadingStatus === "success") {
          addCardToLS(data);
          setGameData(data);
        } else if (loadingStatus == "error") {
          dispatch(setGameLoadingStatus(Status.ERROR));
        }
      }
    }

    return () => {
      dispatch(setGameLoadingStatus(Status.LOADING));
    };
  }, [loadingStatus]);
  // ==================================================================================================

  return (
    <>
      {loadingStatus == "loading" ? (
        <Loader className={styles.loader} />
      ) : loadingStatus == "error" ? (
        <div className={styles.error}>
          <p>Не удалось загрузить игру 😢</p>

          <Button
            color="var(--textPrimary)"
            onClick={handleClickBack}
            variant="text2"
            className={styles.buttonBack}
            size="large"
            startIcon={
              <Icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </Icon>
            }
          >
            Назад
          </Button>
        </div>
      ) : loadingStatus == "success" ? (
        <div className={styles.root}>
          <div className="container">
            <div className={styles.gamepage}>
              <FullGameLeft data={gameData} />
              <FullGameRight data={gameData} />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
