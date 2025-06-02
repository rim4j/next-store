"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "@heroui/input";
import { Kbd } from "@heroui/kbd";

import { SearchIcon } from "../icons";

const NavSearch = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [search, setSearch] = useState(
    searchParams.get("search")?.toString() || ""
  );

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    replace(`/products?${params.toString()}`);
  }, 500);

  useEffect(() => {
    if (!searchParams.get("search")) {
      setSearch("");
    }
  }, [searchParams.get("search")]);

  return (
    <div className='w-[340px] '>
      <Input
        aria-label='Search'
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm",
        }}
        endContent={
          <Kbd className='hidden lg:inline-block' keys={["command"]}>
            K
          </Kbd>
        }
        labelPlacement='outside'
        placeholder='Search...'
        startContent={
          <SearchIcon className='text-base text-default-400 pointer-events-none flex-shrink-0' />
        }
        type='search'
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default NavSearch;
