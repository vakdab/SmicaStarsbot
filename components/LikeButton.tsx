"use client";

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import { useLikes } from "@/hooks/useLikes";

import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-hot-toast";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface LikeButtonProps {
  songId: string;
}

const LikeButton: React.FC<LikeButtonProps> = ({ songId }) => {
  const router = useRouter();
  const authModal = useAuthModal();
  const { user } = useUser();
  const { isLiked, toggle } = useLikes();

  const liked = isLiked(songId);
  const Icon = liked ? AiFillHeart : AiOutlineHeart;

  const handleLike = () => {
    if (!user) return authModal.onOpen();

    const nowLiked = toggle(songId);

    if (nowLiked) toast.success("Liked Song!");

    router.refresh();
  };

  return (
    <button className="hover:opacity-75 transition" onClick={handleLike}>
      <Icon color={liked ? "#22c55e" : "white"} size={25} />
    </button>
  );
};

export default LikeButton;
