"use client";

import AnimeAPI from "@repo/api/anime";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ResGetGenres } from "../../../../../../packages/api/src/anime/types/response/ResGetGenre";

export default function FilterGenre() {
  const router = useRouter();
  const params = useSearchParams();
  const genresQuery = params.get("genres")?.split(",") || [];
  const [genres, setGenres] = useState<ResGetGenres['data']>([]);

  const handleChange = (key: string, value: string) => {
    const url = new URL(window.location.href);
    const current = url.searchParams.get(key);
    if (current) {
      const currentArray = current.split(",");
      const isExist = currentArray.includes(value);
      if (isExist) {
        url.searchParams.set(key, currentArray.filter((item) => item !== value).join(","));
      } else {
        url.searchParams.set(key, currentArray.concat(value).join(","));
      }
    } else {
      url.searchParams.set(key, value);
    }
    router.push(url.toString());
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await AnimeAPI.getGenres();
      setGenres(response.data);
    }
    fetchData();
  }, [])

  return <div className="flex gap-2 flex-wrap">
    {genres.map((genre) => (
      <div className={`cursor-pointer hover:bg-blue-500 hover:text-white border border-gray-300 rounded-md px-2 py-1 ${genresQuery.includes(genre.mal_id.toString()) ? "bg-blue-500 text-white" : ""}`} key={genre.mal_id} onClick={() => handleChange("genres", genre.mal_id.toString())}>{genre.name}</div>
    ))}
  </div>;
}
