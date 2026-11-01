import { Song } from "@/types";

import usePlayer from "./usePlayer";
import useAuthModal from "./useAuthModal";
import { useUser } from "./useUser";
import useLibrary from "./useLibrary";

const useOnPlay = (songs: Song[]) => {
  const player = usePlayer();
  const authModal = useAuthModal();
  const { user } = useUser();
  const uploaded = useLibrary((state) => state.uploaded);

  const onPlay = (id: string) => {
    if (!user) return authModal.onOpen();

    player.setId(id);
    player.setIds(
      songs.length ? songs.map((song) => song.id) : uploaded.map((s) => s.id)
    );
  };

  return onPlay;
};

export default useOnPlay;
