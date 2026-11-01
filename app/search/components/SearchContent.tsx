"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

import { getSongsByTitle } from "@/lib/songs";

import MediaItem from "@/components/MediaItem";
import LikeButton from "@/components/LikeButton";

import useOnPlay from "@/hooks/useOnPlay";
import useLibrary from "@/hooks/useLibrary";

const SearchContent = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "";
  const uploaded = useLibrary((state) => state.uploaded);

  const songs = [...uploaded, ...getSongsByTitle(title)].filter((song) => {
    if (!title) return true;

    const query = title.toLowerCase();

    return (
      song.title.toLowerCase().includes(query) ||
      song.author.toLowerCase().includes(query)
    );
  });

  const onPlay = useOnPlay(songs);

  if (songs.length === 0)
    return (
      <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
        No Song Found.
      </div>
    );

  return (
    <div className="flex flex-col gap-y-2 w-full px-6">
      {songs.map((song) => (
        <div key={song.id} className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <MediaItem data={song} onClick={(id: string) => onPlay(id)} />
          </div>
          <LikeButton songId={song.id} />
        </div>
      ))}
    </div>
  );
};

export default SearchContent;
