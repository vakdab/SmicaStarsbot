"use client";

import React from "react";

import { Song } from "@/types";

import SongItem from "@/components/SongItem";
import useOnPlay from "@/hooks/useOnPlay";
import useLibrary from "@/hooks/useLibrary";

interface PageContentProps {
  songs: Song[];
}

const PageContent: React.FC<PageContentProps> = ({ songs }) => {
  const uploaded = useLibrary((state) => state.uploaded);
  const allSongs = [...uploaded, ...songs];
  const onPlay = useOnPlay(allSongs);

  if (allSongs.length === 0)
    return <div className="mt-4 text-neutral-400">No Songs Available.</div>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4">
      {allSongs.map((song) => (
        <SongItem
          key={song.id}
          onClick={(id: string) => {
            onPlay(id);
          }}
          data={song}
        />
      ))}
    </div>
  );
};

export default PageContent;
