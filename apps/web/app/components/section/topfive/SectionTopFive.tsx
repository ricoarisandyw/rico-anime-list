import { InfiniteScrollProvider } from "@/components/widget/infinite-scroll/InfiniteScroll.context";
import AnimeAPI from "@repo/api/anime";
import { Suspense } from "react";
import InfiniteAnimeList from "./InfiniteAnimeList";

export default async function SectionTopFive() {
  const anime = await AnimeAPI.getTop({
    page: 1,
    limit: 5,
  });

  return <div className="h-[1000px] flex flex-col gap-4 items-center justify-center bg-gray-100 p-8">
    <div className="text-2xl font-bold">
      TOP ANIME
    </div>
    <InfiniteScrollProvider items={anime.data}>
      <Suspense fallback={<div>Loading...</div>}>
        <InfiniteAnimeList />
      </Suspense>
    </InfiniteScrollProvider>
  </div>
}

