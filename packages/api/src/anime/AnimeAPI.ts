import { BaseApi } from "../../core/BaseApi";
import { UrlUtils } from "../../utils/UrlUtils";
import { ReqGetSearch } from "./types/request/ReqGetSearch";
import { ReqGetTop } from "./types/request/ReqGetTop";
import { ResGetById } from "./types/response/ResGetById";
import { ResGetGenres } from "./types/response/ResGetGenre";
import { ResGetPictures } from "./types/response/ResGetPictures";
import { ResGetSearch } from "./types/response/ResGetSearch";
import { ResGetTop } from "./types/response/ResGetTop";

const CONSTANT = {
  BASE_URL: "https://api.jikan.moe/v4",
}

const AnimeAPI = {
  getTop: async (filter: Partial<ReqGetTop>) => {
    const query = UrlUtils.buildQueryString(filter);
    const response = await BaseApi.GET<ResGetTop>(`${CONSTANT.BASE_URL}/top/anime?${query}`);
    return response;
  },
  getById: async (id: string) => {
    const response = await BaseApi.GET<ResGetById>(`${CONSTANT.BASE_URL}/anime/${id}`);
    return response;
  },
  getPictures: async (id: string) => {
    const response = await BaseApi.GET<ResGetPictures>(`${CONSTANT.BASE_URL}/anime/${id}/pictures`);
    return response;
  },
  getGenres: async () => {
    const response = await BaseApi.GET<ResGetGenres>(`${CONSTANT.BASE_URL}/genres/anime`);
    return response;
  },
  search: async (filter: Partial<ReqGetSearch>) => {
    const query = UrlUtils.buildQueryString(filter);
    const response = await BaseApi.GET<ResGetSearch>(`${CONSTANT.BASE_URL}/anime?${query}`);
    // handle duplicate id
    const uniqueAnime = response.data.filter((anime, index, self) =>
      index === self.findIndex((t) => t.mal_id === anime.mal_id)
    );
    return {
      ...response,
      data: uniqueAnime,
    };
  },
  getByIds: async (ids: string[]) => {
    const response = await Promise.all(ids.map(id => AnimeAPI.getById(id)));
    return response;
  },
};

export default AnimeAPI;
