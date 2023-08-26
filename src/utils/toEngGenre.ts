export function toEngGenre(genre: string) {
  switch (genre) {
    case "Все":
      return "";

    case "ММОРПГ":
      return "mmorpg";

    case "Шутеры":
      return "shooter";

    case "Стратегии":
      return "strategy";

    case "МОБА":
      return "moba";

    case "Гонки":
      return "racing";

    case "Спортивные":
      return "sports";

    case "Социальные":
      return "social";

    case "Песочница":
      return "sandbox";

    case "Открытый мир":
      return "open-world";

    case "Выживание":
      return "survival";

    case "ПВП":
      return "pvp";

    case "ПВЕ":
      return "pve";

    case "Пиксельные":
      return "pixel";

    case "Воксели":
      return "voxel";

    case "Зомби":
      return "zombie";

    case "Пошаговые":
      return "turn-based";

    case "От первого лица":
      return "first-person";

    case "От третьего лица":
      return "third-Person";

    case "Вид сверху":
      return "top-down";

    case "Танки":
      return "tank";

    case "Космос":
      return "space";

    case "Корабли":
      return "sailing";

    case "Платформеры":
      return "side-scroller";

    case "Супергерои":
      return "superhero";

    case "Одна жизнь":
      return "permadeath";

    case "Карточные":
      return "card";

    case "Баттл-рояль":
      return "battle-royale";

    case "ММО":
      return "mmo";

    case "ММОФПС":
      return "mmofps";

    case "ММОТПС":
      return "mmotps";

    case "3Д":
      return "3d";

    case "2Д":
      return "2d";

    case "Аниме":
      return "anime";

    case "Фэнтези":
      return "fantasy";

    case "Научная фантастика":
      return "sci-fi";

    case "Драки":
      return "fighting";

    case "Экшен РПГ":
      return "action-rpg";

    case "Экшен":
      return "action";

    case "Военные":
      return "military";

    case "Боевые искусства":
      return "martial-arts";

    case "Полет":
      return "flight";

    case "Нетребовательные":
      return "low-spec";

    case "Защита башни":
      return "tower-defense";

    case "Хоррор":
      return "horror";

    case "ММОРТС":
      return "mmorts";

    default:
      return "";
  }
}
