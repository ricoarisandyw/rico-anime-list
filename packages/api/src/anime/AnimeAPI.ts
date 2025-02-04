import { BaseApi } from "../../core/BaseApi";
import { UrlUtils } from "../../utils/UrlUtils";
import { ReqGetTop } from "./types/request/ReqGetTop";
import { ResGetById } from "./types/response/ResGetById";
import { ResGetPictures } from "./types/response/ResGetPictures";
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
};

export default AnimeAPI;
