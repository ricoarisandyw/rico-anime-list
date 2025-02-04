import Image from "next/image";
import Link from "next/link";

export default function SectionHero() {
  return (
    <div className="lg:h-[600px] bg-gray-300 overflow-hidden relative mt-[-60px]">
      <div className="mt-[60px] p-4 absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-gray-200 to-gray-100">
        <div className="flex gap-4 flex-col w-fit z-30 absolute top-0 left-0 p-8">
          <Link href="/#top-anime">
            <div className="text-2xl w-fit min-w-[300px] text-center px-4 py-2 font-bold rounded-tl-[30px] rounded-br-[30px] bg-purple-400/50 backdrop-blur-sm text-white">
              TOP ANIME
            </div>
          </Link>
          <Link href="/search">
            <div className="text-2xl w-fit min-w-[300px] text-center px-4 py-2 font-bold rounded-tl-[30px] rounded-br-[30px] bg-purple-400/50 backdrop-blur-sm text-white">
              SEARCH
            </div>
          </Link>
          <Link href="/bookmarks">
            <div className="text-2xl w-fit min-w-[300px] text-center px-4 py-2 font-bold rounded-tl-[30px] rounded-br-[30px] bg-purple-300/50 backdrop-blur-sm text-white">
              BOOKMARKS
            </div>
          </Link>
        </div>
      </div>
      <div className="flex gap-4 h-full w-fit relative mx-auto">
        <Image className="z-30 h-full w-auto object-contain" src="/images/character/cover-character.png" alt="Hero" width={1000} height={1000} />
        <div className="z-50 absolute top-0 right-0 h-[495px] w-[115px] overflow-hidden">
          <Image src="/images/character/cover-character.png" alt="Hero" width={1000} height={1000} className="object-cover object-right-top w-full h-[600px]" />
        </div>

        <div className="z-10 absolute top-[5%] right-0 mr-[-50px] text-white text-[150px] leading-[100px] font-bold w-[1ch] whitespace-pre-line text-right">
          RICO ANIME <span className="ml-[30px]">LIST</span>
        </div>
      </div>
      <div className="absolute top-[115px] left-0 bg-gradient-to-r from-[#BD67D2] to-purple-900 -skew-y-[10deg] h-1/2 w-full" />
      <div className="z-40 absolute top-[415px] left-0 bg-gray-300 -skew-y-[10deg] h-1/2 w-full" />
    </div>
  );
}