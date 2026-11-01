"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { getSongsByIds } from "@/lib/songs";

import { useUser } from "@/hooks/useUser";
import { useLikes } from "@/hooks/useLikes";
import useLibrary from "@/hooks/useLibrary";
import useOnPlay from "@/hooks/useOnPlay";

import MediaItem from "@/components/MediaItem";
import LikeButton from "@/components/LikeButton";

const LikedContent = () => {
  const router = useRouter();
  const { user } = useUser();
  const likedIds = useLikes((state) => state.likedIds);
  const uploaded = useLibrary((state) => state.uploaded);

  const uploadedById = new Map(uploaded.map((song) => [song.id, song]));
  const songs = likedIds
    .map((id) => uploadedById.get(id) || getSongsByIds([id])[0])
    .filter(Boolean);

  const onPlay = useOnPlay(songs);

  if (!user)
    return (
      <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
        Log in to see your liked songs.
      </div>
    );

  if (songs.length === 0)
    return (
      <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
        No Liked Songs.
      </div>
    );

  return (
    <div className="flex flex-col gap-y-2 w-full p-6">
      {songs.map((song) => (
        <div key={song!.id} className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <MediaItem onClick={(id: string) => onPlay(id)} data={song!} />
          </div>
          <LikeButton songId={song!.id} />
        </div>
      ))}
    </div>
  );
};

export default LikedContent;
