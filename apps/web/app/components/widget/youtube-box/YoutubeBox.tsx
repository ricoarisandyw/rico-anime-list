"use client";

import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { ModalKit } from "../modal-kit/ModalKit";

export default function YoutubeBox(props: {
  videoId: string;
}) {
  const handleClick = () => {
    ModalKit.show(
      <div className="w-[50vw] h-auto aspect-video p-8 bg-white rounded-lg">
        <iframe src={`https://www.youtube.com/embed/${props.videoId}`} className="w-full h-full" />
      </div>
    );
  }

  return <div className="w-full relative group cursor-pointer" onClick={handleClick}>
    <Image src={`https://img.youtube.com/vi/${props.videoId}/hqdefault.jpg`} alt="Youtube Thumbnail" width={500} height={500} />
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center" onClick={handleClick}>
      <FaPlay size={32} className="text-white group-hover:text-yellow-500" />
    </div>
  </div>
}