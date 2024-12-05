import { useFocusEffect, useRouter } from "expo-router";
import * as SecureStorage from "expo-secure-store";
import { useCallback, useState } from "react";
import {
  playlistSongDeleteRequest,
  playlistSongGetRequest,
  playlistSongPostRequest,
} from "../api/playlist";
import { useAuth } from "@/modules/auth/hooks/useAuth";

export interface TrackInPlaylists {
  id: number;
  name: string;
  image: string;
  song_exists: boolean;
}

export const useAddToPlaylist = () => {
  const [playlist, setPlaylist] = useState<TrackInPlaylists[]>([]);
  const [playlistPrev, setPlaylistPrev] = useState<TrackInPlaylists[]>([]);
  const [loading, setloading] = useState(false);
  const { user } = useAuth();
  const router = useRouter();

  const getData = async () => {
    setloading(true);
    try {
      const trackToPlaylist = await SecureStorage.getItemAsync("trackToAdd");
      const data = JSON.parse(trackToPlaylist);
      const res = await playlistSongGetRequest(user.token, data.id);
      const playlists = res.data.data;
      setPlaylist(playlists.reverse());
      setPlaylistPrev(playlists);
    } catch (error) {
      console.log(error.response.data);
    }
    setloading(false);
  };

  const handleAdd = (id: number) => {
    const newPlaylist = playlist.map((item) => {
      if (item.id === id) {
        return { ...item, song_exists: !item.song_exists };
      }
      return item;
    });
    setPlaylist(newPlaylist);
  };

  const handleSubmit = async () => {
    setloading(true);
    try {
      const trackToPlaylist = await SecureStorage.getItemAsync("trackToAdd");
      const track = JSON.parse(trackToPlaylist);
      playlist.forEach(async (plst) => {
        const plstPrev = playlistPrev.find((prev) => prev.id === plst.id);
        if (plstPrev.song_exists !== plst.song_exists) {
          if (plst.song_exists)
            await playlistSongPostRequest(user.token, {
              playlist_id: plst.id,
              song_id: track.id,
            });
          else await playlistSongDeleteRequest(user.token, plst.id, track.id);
        }
      });
      router.back();
    } catch (error) {
      console.log(error.response.data);
    }
    setloading(false);
  };

  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );

  return { playlist, loading, handleAdd, handleSubmit };
};
