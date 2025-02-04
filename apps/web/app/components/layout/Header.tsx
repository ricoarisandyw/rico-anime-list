"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useScrollY from "utils/hooks/useScrollY";
import SearchBox from "../widget/search-box/SearchBox";

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useScrollY((scrollY) => {
    if (scrollY && scrollY > 60) {
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
    }
  });



  return (
    <div className={`gap-4 duration-300 sticky top-0 left-0 w-full flex items-center py-2 px-4 h-[60px] z-50 ${isMenuOpen ? "bg-gradient-to-b from-purple-700/80 via-purple-500/30" : ""}`}>
      <div className="flex gap-4 items-center">
        <Link href="/" className="text-xl font-black">
          RICO ANIME LIST
        </Link>
      </div>
      <div className="ml-auto flex gap-4 items-center">
        {
          isMenuOpen &&
          <div className="ml-auto flex gap-4 items-center">
            <Link href="/" className="text-white text-xl font-black hover:underline">
              Home
            </Link>
            <Link href="/search" className="text-white text-xl font-black hover:underline">
              Search
            </Link>
            <Link href="/bookmarks" className="text-white text-xl font-black hover:underline">
              Bookmarks
            </Link>
          </div>
        }
        <SearchBox onEnter={(value) => {
          router.push(`/search?q=${value}`);
        }} />
      </div>
    </div>
  );
}