import { BaseApi } from "../../core/BaseApi";
import { UrlUtils } from "../../utils/UrlUtils";
import { ReqGetTop } from "./types/request/ReqGetTop";
import { ResGetTop } from "./types/response/ResGetTop";

const CONSTANT = {
  BASE_URL: "https://api.jikan.moe/v4",
}

const AnimeAPI = {
  getTop: async (filter: Partial<ReqGetTop>) => {
    const query = UrlUtils.buildQueryString(filter);
    const response = await BaseApi.GET<ResGetTop>(`${CONSTANT.BASE_URL}/top/anime?${query}`);
    return response;
  }
};

export default AnimeAPI;
