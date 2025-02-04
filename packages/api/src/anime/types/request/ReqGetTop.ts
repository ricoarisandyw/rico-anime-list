export type ReqGetTop = {
  type: "tv" | "movie" | "ova" | "special" | "ona" | "music";
  filter: "airing" | "upcoming" | "tv" | "movie" | "ova" | "special" | "by_popularity" | "favorite";
  rating: "g" | "pg" | "pg13" | "r17" | "r" | "rx";
  sfw: boolean;
  page: number;
  limit: number;
}