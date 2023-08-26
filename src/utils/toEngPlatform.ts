export function toEngPlatform(platform: string) {
  switch (platform) {
    case "Все платформы":
      return "all";

    case "Windows":
      return "pc";

    case "Браузерные":
      return "browser";

    default:
      return "all";
  }
}
