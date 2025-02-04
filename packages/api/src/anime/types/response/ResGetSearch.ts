import { Pagination } from "../shared/Pagination"
import { TypeAnime } from "../shared/TypeAnime"

export interface ResGetSearch {
  data: TypeAnime[]
  pagination: Pagination
}