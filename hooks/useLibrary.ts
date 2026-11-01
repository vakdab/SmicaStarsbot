"use client";

import { create } from "zustand";

import { Song } from "@/types";

interface LibraryStore {
  uploaded: Song[];
  addSong: (song: Song) => void;
}

const useLibrary = create<LibraryStore>((set, get) => ({
  uploaded: [],
  addSong: (song) => set({ uploaded: [song, ...get().uploaded] })
}));

export default useLibrary;
