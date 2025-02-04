import { useEffect, useState } from "react";

export default function usePaginationFetch<T>(fetchFn: (page: number) => Promise<T[]>, options: {
  initialPage?: number;
  pageSize?: number;
}) {
  const [page, setPage] = useState(options.initialPage || 1);
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);

  const loadNextPage = () => {
    setPage(page + 1);
  };

  const reset = async () => {
    setLoading(true);
    setPage(options.initialPage || 1);
    setData([]);
    const response = await fetchFn(options.initialPage || 1);
    setData(response);
    setLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetchFn(page);
      setData((prev) => [...prev, ...response]);
      setLoading(false);
    };
    fetchData();
  }, [page]);

  return {
    page,
    data,
    setPage,
    loadNextPage,
    loading,
    reset,
  };
}
