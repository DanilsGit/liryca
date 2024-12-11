import { useAuth } from "@/modules/auth/hooks/useAuth";
import { useEffect, useState } from "react";
import { useActiveTrack } from "react-native-track-player";
import { postLikeTrackRequest } from "../api/core";

export const useTrackLike = () => {
  const activeTrack = useActiveTrack();
  const { user } = useAuth();
  const [like, setLike] = useState(activeTrack?.isLiked ?? false);

  useEffect(() => {
    setLike(activeTrack?.isLiked ?? false);
  }, [activeTrack]);

  const handleLike = async () => {
    try {
      await postLikeTrackRequest(user.token, activeTrack.id);
      setLike(!like);
      activeTrack.isLiked = !like;
    } catch (error) {
      console.log(error.response.data);
      setLike(like);
      activeTrack.isLiked = like;
    }
  };

  return { like, handleLike };
};
