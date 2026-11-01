"use client";

import { useEffect, useState } from "react";

import { Song } from "@/types";
import { songs as demoSongs } from "@/lib/songs";
import useLibrary from "./useLibrary";

const useGetSongById = (id?: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [song, setSong] = useState<Song | undefined>(undefined);
  const uploaded = useLibrary((state) => state.uploaded);

  useEffect(() => {
    if (!id) return;

    setIsLoading(true);

    const found =
      demoSongs.find((item) => item.id === id) ||
      uploaded.find((item) => item.id === id);

    setSong(found);
    setIsLoading(false);
  }, [id, uploaded]);

  return { isLoading, song };
};

export default useGetSongById;
