"use client";

import useDebounce from "@/hooks/useDebounce";
import Input from "./Input";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import qs from "query-string";

const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState<string>(searchParams.get("title") || "");
  const debounceValue = useDebounce<string>(value, 500);

  useEffect(() => {
    const query = {
      title: debounceValue
    };

    const url = qs.stringifyUrl({
      url: "/search",
      query: query
    });

    router.push(url);
  }, [debounceValue, router]);

  return (
    <Input
      placeholder="What do you want to listen to?"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default SearchInput;
