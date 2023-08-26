import { Filter } from "./Filter";
import styles from "./Filters.module.scss";

const platforms = ["Все платформы", "Windows", "Браузерные"];

const sorts = ["Релевантности", "Популярности", "Дате релиза", "По алфавиту"];

const genres = [
  "Все",
  "ММОРПГ",
  "Шутеры",
  "Стратегии",
  "МОБА",
  "Гонки",
  "Спортивные",
  "Социальные",
  "Песочница",
  "Открытый мир",
  "Выживание",
  "ПВП",
  "ПВЕ",
  "Пиксельные",
  "Воксели",
  "Зомби",
  "Пошаговые",
  "От первого лица",
  "От третьего лица",
  "Вид сверху",
  "Танки",
  "Космос",
  "Корабли",
  "Платформеры",
  "Супергерои",
  "Одна жизнь",
  "Карточные",
  "Баттл-рояль",
  "ММО",
  "ММОФПС",
  "ММОТПС",
  "3Д",
  "2Д",
  "Аниме",
  "Фэнтези",
  "Научная фантастика",
  "Драки",
  "Экшен РПГ",
  "Экшен",
  "Военные",
  "Боевые искусства",
  "Полет",
  "Нетребовательные",
  "Защита башни",
  "Хоррор",
  "ММОРТС",
];

export const Filters = ({
  platform,
  setPlatform,
  genre,
  setGenre,
  sortBy,
  setSortBy,
}: any) => {
  return (
    <div className={styles.root}>
      <Filter
        label="Платформа:"
        setValue={setPlatform}
        menuItems={platforms}
        currentValue={platform}
      />
      <Filter
        label="Жанр:"
        setValue={setGenre}
        menuItems={genres}
        currentValue={genre}
      />
      <Filter
        label="Сортировка по:"
        setValue={setSortBy}
        menuItems={sorts}
        currentValue={sortBy}
      />
    </div>
  );
};
