"use client";

import { useContext, useEffect, useState } from "react";
import AnimeBoxSkeleton from "../animebox/AnimeBoxSkeleton";
import { InfiniteScrollContext } from "./InfiniteScroll.context";

function useInfiniteScrollContext<T>() {
  return useContext(InfiniteScrollContext)
}

export default function InfiniteScroll<T>(props: {
  fetchData: (page: number) => Promise<T[]>;
  itemRender: (item: T, index: number) => React.ReactNode;
  className?: string;
}) {
  const context = useInfiniteScrollContext<T>();

  const [loading, setLoading] = useState(context.loading);
  const [page, setPage] = useState(context.page);
  const [isFetching, setIsFetching] = useState(false); // New state to track fetching status

  const fetchItems = async () => {
    setLoading(true);
    setIsFetching(true); // Set fetching status to true
    const newItems = await props.fetchData(page);
    context.pushItems(newItems);
    setLoading(false);
    setIsFetching(false); // Reset fetching status after fetching
  };

  useEffect(() => {
    fetchItems();
  }, [page]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target as HTMLDivElement;
    if (scrollHeight - scrollTop <= clientHeight && !loading && !isFetching) { // Check if not currently fetching
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className={`${props.className}`} onScroll={handleScroll} style={{ overflowY: "auto"}}>
      {context.items.map((item, index) => (
        props.itemRender(item, index)
      ))}
      {loading && Array.from({ length: 5 }).map((_, index) => (
        <AnimeBoxSkeleton key={"skeleton-" + index} />
      ))}
    </div>
  );
}