import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { playbackGetRequest } from "../apis/user";
import { useAuth } from "@/modules/auth/hooks/useAuth";
import { Track } from "react-native-track-player";

export const usePlayback = () => {
  const { user } = useAuth();
  const [playback, setPlayback] = useState([]);

  const getPlayback = async () => {
    const res = await playbackGetRequest(user.token);
    const toArray = Object.values(res.data);
    const playback = toArray.map((item: Track) => {
      return {
        id: item.song_id,
        title: item.song_name,
        artist: item.artist_name,
        image: item.album_image,
        url: item.song_url,
        artist_id: item.artist_id,
      };
    });
    setPlayback(playback);
  };

  useFocusEffect(
    useCallback(() => {
      getPlayback();
    }, [])
  );

  return { playback };
};
