import { useAuth } from "@/modules/auth/hooks/useAuth";
import { getLikedTracks } from "@/modules/listenerProfile/apis/user";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { Track } from "react-native-track-player";

export const useMyLikedTracks = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const getPlaylistAndTracks = useCallback(async () => {
    setLoading(true);
    try {
      const res_tracks = await getLikedTracks(user.token);
      const data_tracks = res_tracks.data.data.map((track) => ({
        id: track.song_id,
        title: track.song.title,
        time: track.song.time,
        url: track.song.url_song,
        image: track.album.icon,
        addBy: track.add_by,
        artist: track.artist.username,
        isLiked: track.song.is_liked,
      }));
      setTracks(data_tracks);
    } catch (error) {
      console.error(error.response.data);
      router.back();
    }
    setLoading(false);
  }, [user.token]);

  useFocusEffect(
    useCallback(() => {
      getPlaylistAndTracks();
    }, [getPlaylistAndTracks]),
  );

  return { tracks, loading };
};
