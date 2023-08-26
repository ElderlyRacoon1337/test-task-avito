import styles from "./Items.module.scss";
import { Item } from "./item";
import { useAppSelector } from "../../hooks";
import { Game } from "../../redux/slices/gamesSlice";
import { Loader } from "cutie-ui";

interface ItemsProps {
  currentGames: Game[];
}

export const Items: React.FC<ItemsProps> = ({ currentGames }) => {
  const loadingStatus = useAppSelector((state) => state.games.loadingStatus);

  return (
    <div className={styles.root}>
      {loadingStatus == "loading" ? (
        <Loader className={styles.loader} />
      ) : loadingStatus == "error" ? (
        <p className={styles.error}>Не удалось загрузить игры 😢</p>
      ) : loadingStatus == "success" ? (
        currentGames.map((el, i) => {
          return (
            <Item
              key={i}
              id={el.id}
              image={el.thumbnail}
              title={el.title}
              date={el.release_date}
              creator={el.developer}
              genre={el.genre}
            />
          );
        })
      ) : (
        ""
      )}
    </div>
  );
};
