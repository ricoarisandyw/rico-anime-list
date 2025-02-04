"use client";

import { useEffect } from "react";

export default function useScrollY(fn: (scrollY: number) => void) {
  useEffect(() => {
    const handleScroll = () => fn(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fn]);
}
