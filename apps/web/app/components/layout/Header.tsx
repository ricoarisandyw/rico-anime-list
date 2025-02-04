"use client";

import Link from "next/link";
import { useState } from "react";
import useScrollY from "utils/hooks/useScrollY";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useScrollY((scrollY) => {
    if (scrollY && scrollY > 60) {
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
    }
  });

  return (
    <div className={`duration-300 sticky top-0 left-0 w-full flex justify-between items-center py-2 px-4 h-[60px] z-50 ${isMenuOpen ? "bg-gradient-to-b from-white to-transparent" : ""}`}>
      <div className="flex gap-4 items-center">
        <Link href="/" className="text-xl font-black">
          RICO ANIME LIST
        </Link>
      </div>
    </div>
  );
}