import BookmarkComponent from "@/components/widget/bookmark/Bookmark";
import YoutubeBox from "@/components/widget/youtube-box/YoutubeBox";
import AnimeAPI from "@repo/api/anime";
import Image from "next/image";
import { FaChevronDown, FaStar } from "react-icons/fa";

export default async function AnimePage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;

  const [
    anime,
    images
  ] = await Promise.all([
    AnimeAPI.getById(params.id),
    AnimeAPI.getPictures(params.id)
  ]);

  return <div className="min-h-[700px] h-[80vh]" style={{
    backgroundImage: `url(${anime.data.images.webp.large_image_url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}>
    <div className="grid grid-cols-3 gap-4 h-full">
      <div className="col-span-2 flex flex-col gap-4 bg-gradient-to-r from-black/80 via-black/60 to-transparent p-8 text-white h-full">
        <div>
          <h1 className="text-2xl font-bold">{anime.data.title}</h1>
        </div>
        <div className="flex gap-2">
          <BookmarkComponent id={anime.data.mal_id.toString()} />
        </div>
        <div className="flex gap-2">
          {anime.data.genres.map((genre) => <div className="text-white bg-black/50 backdrop-blur-sm rounded-full border border-white text-sm px-2 py-1" key={genre.mal_id + "-" + genre.name}>{genre.name}</div>)}
        </div>
        <div className="mt-4 w-1/2 overflow-y-scroll max-h-[300px] flex-1">
          <p>{anime.data.synopsis}</p>
        </div>
        <div className="mt-4">
          <div className="flex gap-2">
            <div>
              <FaStar size={32} className="fill-yellow-500 h-full" />
            </div>
            <div className="font-bold">
              <h2>Rating</h2>
              <p>{anime.data.score}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full overflow-hidden p-8">
        <div className="ml-auto relative flex flex-col gap-4 overflow-y-scroll h-full w-full">
          <YoutubeBox videoId={anime.data.trailer.youtube_id} />
          {images.data.map((image, index) => <Image key={anime.data.mal_id + "-" + index} src={image.jpg.image_url} alt="Anime Image" width={300} height={200} className="w-full" />)}
          <div className="sticky bottom-0 left-0 w-full h-[100px] bg-gradient-to-t from-black/80 to-black/40">
            <div className="flex justify-center items-center h-full">
              <FaChevronDown size={32} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>;
}
