import React from "react";
import styles from "./FullGameRight.module.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Game } from "../../redux/types/types";

interface FullGameRightProps {
  data?: Game;
}

export const FullGameRight: React.FC<FullGameRightProps> = ({ data }) => {
  if (!data) return <></>;

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{data.title}</h2>
      <div className={styles.carousel}>
        {data.screenshots ? (
          <Carousel infiniteLoop showStatus={false} showThumbs={false}>
            {data.screenshots.map((el, i) => (
              <div>
                <img
                  className={styles.carousel__image}
                  key={i}
                  src={el.image}
                />
              </div>
            ))}
          </Carousel>
        ) : (
          ""
        )}
      </div>
      <p className={styles.subtitle}>Об игре {data.title}</p>
      <p className={styles.description}>{data.description}</p>
      <p className={styles.subtitle}>Дополнительная информация</p>
      <div className={styles.info}>
        <div className={styles.info__item}>
          <p className={styles.info__title}>Название</p>
          <p className={styles.info__value}>{data.title}</p>
        </div>
        <div className={styles.info__item}>
          <p className={styles.info__title}>Разработчик</p>
          <p className={styles.info__value}>{data.developer}</p>
        </div>
        <div className={styles.info__item}>
          <p className={styles.info__title}>Издатель</p>
          <p className={styles.info__value}>{data.publisher}</p>
        </div>
        <div className={styles.info__item}>
          <p className={styles.info__title}>Дата релиза</p>
          <p className={styles.info__value}>
            {new Date(data.release_date).toLocaleString("ru", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        </div>
        <div className={styles.info__item}>
          <p className={styles.info__title}>Жанр</p>
          <p className={styles.info__value}>{data.genre}</p>
        </div>
        <div className={styles.info__item}>
          <p className={styles.info__title}>Платформа</p>
          <p className={styles.info__value}>{data.platform}</p>
        </div>
      </div>
      <p className={styles.subtitle}>Системные требования</p>
      <div className={styles.systemreqs}>
        <div className={styles.systemreqs__column}>
          <div className={styles.info__item}>
            <p className={styles.info__title}>ОС</p>
            <p className={styles.info__value}>
              {data.minimum_system_requirements?.os
                ? data.minimum_system_requirements.os
                : "Нет данных"}
            </p>
          </div>
          <div className={styles.info__item}>
            <p className={styles.info__title}>Оперативная память</p>
            <p className={styles.info__value}>
              {data.minimum_system_requirements?.memory
                ? data.minimum_system_requirements.memory
                : "Нет данных"}
            </p>
          </div>
          <div className={styles.info__item}>
            <p className={styles.info__title}>Место на жестком диске</p>
            <p className={styles.info__value}>
              {data.minimum_system_requirements?.storage
                ? data.minimum_system_requirements.storage
                : "Нет данных"}
            </p>
          </div>
        </div>
        <div className={styles.systemreqs__column}>
          <div className={styles.info__item}>
            <p className={styles.info__title}>Процессор</p>
            <p className={styles.info__value}>
              {data.minimum_system_requirements?.processor
                ? data.minimum_system_requirements.processor
                : "Нет данных"}
            </p>
          </div>
          <div className={styles.info__item}>
            <p className={styles.info__title}>Видеокарта</p>
            <p className={styles.info__value}>
              {data.minimum_system_requirements?.graphics
                ? data.minimum_system_requirements.graphics
                : "Нет данных"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
