"use client";

import AnimeBox from "@/components/widget/animebox/AnimeBox";
import AnimeBoxSkeleton from "@/components/widget/animebox/AnimeBoxSkeleton";
import { useBookmark } from "@/components/widget/bookmark/Bookmark.store";
import AnimeAPI from "@repo/api/anime";
import { TypeAnime } from "@repo/api/types";
import { useEffect, useState } from "react";

export default function BookmarksPage() {
  const bookmarks = useBookmark(s => s.bookmarks);
  const [animes, setAnimes] = useState<TypeAnime[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await AnimeAPI.getByIds(bookmarks.map(b => b));
      setAnimes(response.map(r => r.data));
      setLoading(false);
    }
    fetchData();
  }, [bookmarks]);

  return <div>
    <div className="text-2xl font-bold">Bookmarks</div>
    <div>You have {bookmarks.length} bookmarks</div>
    {loading && Array.from({ length: 5 }).map((_, index) => <AnimeBoxSkeleton key={`skeleton-${index}`} />)}
    <div className="grid grid-cols-5 gap-4">
      {animes.map(anime => <AnimeBox key={anime.mal_id} anime={anime} />)}
    </div>
  </div>;
}
