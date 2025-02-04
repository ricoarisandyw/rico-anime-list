import { Pagination } from "../shared/Pagination"
import { TypeAnime } from "../shared/TypeAnime"

export interface ResGetTop {
  data: TypeAnime[]
  pagination: Pagination
}