"use client";

import AnimeBox from "@/components/widget/animebox/AnimeBox";
import InfiniteScroll from "@/components/widget/infinite-scroll/InfiniteScroll";
import AnimeAPI from "@repo/api/anime";

export default function InfiniteAnimeList() {
  const fetchAnime = async (page: number) => {
    const anime = await AnimeAPI.getTop({
      type: "tv",
      page: page + 1,
      limit: 5,
    });
    return anime.data;
  }

  return <InfiniteScroll className="grid grid-cols-5 gap-4" fetchData={fetchAnime} itemRender={(item, index) => <AnimeBox anime={item} key={index} />} />;
}

