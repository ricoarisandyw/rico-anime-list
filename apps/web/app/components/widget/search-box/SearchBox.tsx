"use client";

import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import useDebounce from "utils/hooks/useDebounce";
import useOnClickOutside from "utils/hooks/useOnClickOutside";

export default function SearchBox(props: {
  onDebounceChange?: (value: string) => void;
  onEnter?: (value: string) => void;
  alwaysOpen?: boolean;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleClickSearchIcon = () => {
    setIsSearchBoxOpen(true);
  };

  const handleDebounceChange = useDebounce(props.onDebounceChange || (() => { }), 1000);

  const handleChangeSearchValue = (value: string) => {
    setSearchValue(value);
    handleDebounceChange(value);
  }

  const refEl = useOnClickOutside<HTMLDivElement>(() => {
    setIsSearchBoxOpen(false);
  });

  useEffect(() => {
    if (inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isSearchBoxOpen]);

  const isOpen = props.alwaysOpen || isSearchBoxOpen;

  return (
    <div
      data-cy="search-box"
      ref={refEl}
      onClick={handleClickSearchIcon}
      className="w-fit flex items-center justify-center bg-white rounded-full p-2 px-3 shadow-md group cursor-pointer"
    >
      <FaSearch className="cursor-pointer" />
      <input
        data-cy="search-box-input"
        value={searchValue}
        ref={inputRef}
        type="text"
        placeholder="Search"
        className={`${isOpen ? "w-[200px] ml-2" : "w-[0px]"} bg-transparent transition-all duration-300 outline-none`}
        onChange={(e) => handleChangeSearchValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            props.onEnter?.(searchValue);
          }
        }}
      />
    </div>
  );
}
