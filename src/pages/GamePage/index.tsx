import styles from "./GamePage.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect } from "react";
import {
  Status,
  getOneGame,
  setGameLoadingStatus,
} from "../../redux/slices/gamesSlice";
import { useNavigate, useParams } from "react-router-dom";
import { FullGameLeft } from "../../components/FullGameLeft";
import { FullGameRight } from "../../components/FullGameRight";
import { Button, Icon, Loader } from "cutie-ui";

export const GamePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate(-1);
  };

  const data = useAppSelector((state) => state.games.currentGameData);
  const loadingStatus = useAppSelector(
    (state) => state.games.gameLoadingStatus
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      const _id = +id;
      dispatch(getOneGame({ id: _id }));
    }

    return () => {
      dispatch(setGameLoadingStatus(Status.LOADING));
    };
  }, []);

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
              <FullGameLeft data={data} />
              <FullGameRight data={data} />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
