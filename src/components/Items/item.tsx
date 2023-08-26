import React from "react";
import styles from "./Items.module.scss";
import { useNavigate } from "react-router-dom";

interface ItemProps {
  image: string;
  title: string;
  date: string;
  creator: string;
  genre: string;
  id: number;
}

export const Item: React.FC<ItemProps> = ({
  image,
  title,
  date,
  creator,
  genre,
  id,
}) => {
  const navigate = useNavigate();

  return (
    <section onClick={() => navigate("/" + id)} className={styles.item}>
      <img className={styles.image} src={image} alt={`${title} picture`} />
      <div className={styles.text}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.genre}>{genre}</div>
        </div>
        <p className={styles.date}>
          {new Date(date).toLocaleString("ru", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
        <p className={styles.creator}>{creator}</p>
      </div>
    </section>
  );
};
