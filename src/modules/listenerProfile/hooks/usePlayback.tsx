import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { playbackGetRequest } from "../apis/user";
import { useAuth } from "@/modules/auth/hooks/useAuth";

export const usePlayback = () => {
  const { user } = useAuth();
  const [playback, setPlayback] = useState([]);

  const getPlayback = useCallback(async () => {
    const res = await playbackGetRequest(user.token);
    const toArray = Object.values(res.data);
    const playback = toArray.map((item: any) => {
      return {
        id: item.song_id,
        title: item.song_name,
        artist: item.artist_name,
        image: item.album_image,
        url: item.song_url,
        artist_id: item.artist_id,
        isLiked: item.is_liked,
      };
    });
    setPlayback(playback);
  }, [user.token]);

  useFocusEffect(
    useCallback(() => {
      getPlayback();
    }, [getPlayback]),
  );

  return { playback };
};
