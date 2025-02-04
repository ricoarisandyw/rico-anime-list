export type ReqGetSearch = {
  q: string;
  page: number;
  limit: number;
  type: string;
  score: number;
  min_score: number;
  max_score: number;
  status: string;
  rating: string;
  sfw: boolean;
  genres: string;
  /**
   * @description format: YYYY-MM-DD
   */
  start_date: string;
  /**
   * @description format: YYYY-MM-DD
   */
  end_date: string;
  order_by: string;
  /**
   * @description desc, asc
   */
  sort: string;
  letter: string;
  producers: string;
}
