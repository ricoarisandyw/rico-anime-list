import AnimeAPI from "@repo/api/anime";

export default function Home() {
  const res = AnimeAPI.getAnime();

  return (
    <div className="bg-green-500">
      <h1>{res}</h1>
    </div>
  );
}
