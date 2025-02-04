"use client";

import { Button } from "@/components/ui/button";
import AnimeBox from "@/components/widget/animebox/AnimeBox";
import AnimeBoxSkeleton from "@/components/widget/animebox/AnimeBoxSkeleton";
import SearchBox from "@/components/widget/search-box/SearchBox";
import AnimeAPI from "@repo/api/anime";
import { TypeAnime } from "@repo/api/types";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import usePaginationFetch from "utils/hooks/usePaginationFetch";

function SearchPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const q = searchParams.get("q");

  const fetchAnime = async (page: number) => {
    const { data } = await AnimeAPI.search({
      q: q || "",
      limit: 5,
      page,
    });
    return data;
  };

  const { data, loadNextPage, loading, reset } = usePaginationFetch<TypeAnime>(fetchAnime, {
    pageSize: 5,
  });

  const setQ = (q: string) => {
    router.push(`/search?q=${q}`);
  }

  useEffect(() => {
    reset();
  }, [q]);

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="justify-between items-center flex flex-col gap-2">
        <SearchBox alwaysOpen onDebounceChange={setQ} onEnter={setQ} />
      </div>
      <div className="text-2xl font-bold">
        {data.length} results for "{q}"
      </div>
      <div className="grid grid-cols-5 gap-4">
        {data.map((anime) => <AnimeBox key={anime.mal_id} anime={anime as TypeAnime} />)}
        {loading && Array.from({ length: 5 }).map((_, index) => <AnimeBoxSkeleton key={index} />)}
      </div>
      <div className="flex justify-center">
        <Button onClick={loadNextPage} disabled={loading}>
          Load More
        </Button>
      </div>
    </div>
  );
}

export default function Search() {
  return <Suspense fallback={<div>Loading...</div>}>
    <SearchPage />
  </Suspense>;
}