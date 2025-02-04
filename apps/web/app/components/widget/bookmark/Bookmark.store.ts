import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface BookmarkState {
  bookmarks: string[];
  toggle: (id: string) => void;
}

export const useBookmark = create<BookmarkState>()(persist(
  (set) => ({
    bookmarks: [],
    toggle: (id: string) => set(state => {
      if(state.bookmarks.includes(id)) {
        const newBookmarks = state.bookmarks.filter(bookmark => bookmark !== id).filter(Boolean);
        return { bookmarks: newBookmarks };
      } else {
        const newBookmarks = [...state.bookmarks, id];
        return { bookmarks: newBookmarks };
      }
    }),
  }),
  {
    name: "bookmark-storage", // unique name for the storage
    storage: createJSONStorage(() => localStorage),
  }
));

export const Bookmark = {
  toggle: (id: string) => useBookmark.getState().toggle(id),
  get: () => useBookmark.getState().bookmarks,
}