"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LikesStore {
  likedIds: string[];
  toggle: (id: string) => boolean;
  isLiked: (id: string) => boolean;
}

export const useLikes = create<LikesStore>()(
  persist(
    (set, get) => ({
      likedIds: [],
      isLiked: (id) => get().likedIds.includes(id),
      toggle: (id) => {
        const liked = get().likedIds.includes(id);

        set({
          likedIds: liked
            ? get().likedIds.filter((likedId) => likedId !== id)
            : [...get().likedIds, id]
        });

        return !liked;
      }
    }),
    { name: "smicastars-likes" }
  )
);
