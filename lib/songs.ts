import { asset } from "@/lib/paths";
import { Song } from "@/types";

export const DEMO_USER_ID = "demo-user";

/**
 * Demo catalogue.
 * Replace this array (or wire it to your API / database) and the whole
 * interface keeps working — every component only relies on the Song shape.
 */
export const songs: Song[] = [
  {
    id: "1",
    user_id: DEMO_USER_ID,
    author: "Smica Collective",
    title: "Neon Horizon",
    song_path: asset("/songs/neon-horizon.mp3"),
    image_path: asset("/images/cover-1.png")
  },
  {
    id: "2",
    user_id: DEMO_USER_ID,
    author: "Vyra",
    title: "Midnight Signal",
    song_path: asset("/songs/midnight-signal.mp3"),
    image_path: asset("/images/cover-2.png")
  },
  {
    id: "3",
    user_id: DEMO_USER_ID,
    author: "Kava Sound",
    title: "Slow Orbit",
    song_path: asset("/songs/slow-orbit.mp3"),
    image_path: asset("/images/cover-3.png")
  },
  {
    id: "4",
    user_id: DEMO_USER_ID,
    author: "Lowlight",
    title: "Glass Avenue",
    song_path: asset("/songs/glass-avenue.mp3"),
    image_path: asset("/images/cover-4.png")
  },
  {
    id: "5",
    user_id: DEMO_USER_ID,
    author: "Mira Falls",
    title: "Paper Skyline",
    song_path: asset("/songs/paper-skyline.mp3"),
    image_path: asset("/images/cover-5.png")
  },
  {
    id: "6",
    user_id: DEMO_USER_ID,
    author: "Nordan",
    title: "Quiet Static",
    song_path: asset("/songs/quiet-static.mp3"),
    image_path: asset("/images/cover-6.png")
  },
  {
    id: "7",
    user_id: DEMO_USER_ID,
    author: "Smica Collective",
    title: "After Rain",
    song_path: asset("/songs/after-rain.mp3"),
    image_path: asset("/images/cover-7.png")
  },
  {
    id: "8",
    user_id: DEMO_USER_ID,
    author: "Alva",
    title: "Starfall",
    song_path: asset("/songs/starfall.mp3"),
    image_path: asset("/images/cover-8.png")
  }
];

export const getSongs = (): Song[] => songs;

export const getSongsByUserId = (): Song[] =>
  songs.filter((song) => song.user_id === DEMO_USER_ID);

export const getSongsByTitle = (title?: string): Song[] => {
  if (!title) return songs;

  const query = title.toLowerCase();

  return songs.filter(
    (song) =>
      song.title.toLowerCase().includes(query) ||
      song.author.toLowerCase().includes(query)
  );
};

export const getSongsByIds = (ids: string[]): Song[] => {
  const byId = new Map(songs.map((song) => [song.id, song]));

  return ids
    .map((id) => byId.get(id))
    .filter((song): song is Song => Boolean(song));
};
