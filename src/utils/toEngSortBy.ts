export function toEngSortBy(sortBy: string) {
  switch (sortBy) {
    case "Релевантности":
      return "relevance";

    case "По алфавиту":
      return "alphabetical";

    case "Дате релиза":
      return "release-date";

    case "Популярности":
      return "popularity";

    default:
      return "relevance";
  }
}
