import { useRef } from "react";

export default function useDebounce(fn: (value: string) => void, delay: number) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const debounce = (value: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => fn(value), delay);
  };

  return debounce;
}
