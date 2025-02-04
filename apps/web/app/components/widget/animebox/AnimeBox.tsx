import { TypeAnime } from '@repo/api/types';

import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';

export default function AnimeBox(props: { anime: TypeAnime }) {
  const aired = dayjs(props.anime.aired.from).format('MMMM YYYY');
  const scorePerFive = Math.round(props.anime.score / 2);

  return <Link href={`/anime/${props.anime.mal_id}`} className='group hover:scale-105 duration-300 cursor-pointer'>
    <Image className='duration-300 group-hover:rounded-none rounded-tr-[20%] rounded-bl-[20%] w-full h-[300px] object-cover object-top' src={props.anime.images.webp.image_url} alt={props.anime.title} width={500} height={500} />
    <div>
      <h2 className='cursor-pointer hover:text-[--primary-color] font-bold text-right text-xl mt-2 leading-5'>{props.anime.title}</h2>
    </div>
    <div>
      <p className='text-right'>{aired} | {props.anime.rating}</p>
      <p className='text-sm text-gray-500 text-right'>{props.anime.genres.map((genre) => genre.name).join(' | ')}</p>
      <p className='text-sm text-gray-500 text-right'>{Array.from({ length: 5 }, (_, index) => index < scorePerFive ? '★' : '☆').join('')}</p>
    </div>
  </Link>;
}
