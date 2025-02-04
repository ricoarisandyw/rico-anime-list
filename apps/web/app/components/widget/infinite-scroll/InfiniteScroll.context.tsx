"use client";

import { createContext, useState } from "react";

type InfiniteScrollContextType<T> = {
  items: T[];
  loading: boolean;
  page: number;
  pushItems: (items: T[]) => void;
};

export const InfiniteScrollContext = createContext<InfiniteScrollContextType<any>>({
  items: [],
  loading: false,
  page: 1,
  pushItems: () => { },
});

export function InfiniteScrollProvider<T>(props: {
  items: T[];
  children: React.ReactNode;
}) {
  const [items, setItems] = useState<T[]>(props.items);

  const pushItems = (newItems: T[]) => {
    setItems((prevItems) => [...prevItems, ...newItems]);
  };

  return <InfiniteScrollContext.Provider value={{
    items,
    loading: false,
    page: 1,
    pushItems,
  }}>
    {props.children}
  </InfiniteScrollContext.Provider>;
};
