"use client";

import { LucideBookmark } from "lucide-react";
import { Bookmark, useBookmark } from "./Bookmark.store";

export default function BookmarkComponent(props: {
  id: string;
}) {
  const bookmarks = useBookmark(s => s.bookmarks)
  const isBookmarked = bookmarks.includes(props.id);

  const handleClick = () => {
    Bookmark.toggle(props.id);
  }
  
  return <div className="cursor-pointer" onClick={handleClick}>
    {isBookmarked ? <LucideBookmark fill="white" size={32} /> : <LucideBookmark size={32} />}
  </div>
}