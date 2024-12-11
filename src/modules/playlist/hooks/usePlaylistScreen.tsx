import { useCallback, useEffect, useState } from "react";
import {
  showPlaylistGetRequest,
  showPlaylistSongGetRequest,
} from "../api/playlist";
import { useAuth } from "@/modules/auth/hooks/useAuth";
import { router, useFocusEffect } from "expo-router";

interface TrackPlaylistRequest {
  playlist_id: number;
  song_id: number;
  add_by: string;
  is_active: number;
  created_at: string;
  updated_at: string;
  song: {
    title: string;
    time: string;
    url_song: string;
    album_id: number;
    is_liked: boolean;
  };
  album: {
    title: string;
    icon: string;
    artist_id: number;
  };
  artist: {
    user_id: string;
    username: string;
  };
}

interface TrackPlaylist {
  id: number;
  title: string;
  time: string;
  url: string;
  image: string;
  addBy: string;
  artist: string;
  isLiked: boolean;
}

export const usePlaylistScreen = (id: string) => {
  const { user } = useAuth();
  const [playlist, setPlaylist] = useState(null);
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPlaylistAndTracks = useCallback(async () => {
    setLoading(true);
    try {
      const tracksInPlaylist: TrackPlaylist[] = [];
      const res_playlist = await showPlaylistGetRequest(user.token, id);
      const data_playlist = res_playlist.data;
      const playlist = {
        ...data_playlist.playlist,
        created_at: data_playlist.playlist.created_at.split("T")[0],
      };
      setPlaylist(playlist);
      const res_tracks = await showPlaylistSongGetRequest(user.token, id);
      const data_tracks = res_tracks.data.data;
      data_tracks.forEach((track: TrackPlaylistRequest) => {
        tracksInPlaylist.push({
          id: track.song_id,
          title: track.song.title,
          time: track.song.time,
          url: track.song.url_song,
          image: track.album.icon,
          addBy: track.add_by,
          artist: track.artist.username,
          isLiked: track.song.is_liked,
        });
      });
      setTracks(tracksInPlaylist);
    } catch (error) {
      console.error(error.response.data);
      router.back();
    }
    setLoading(false);
  }, [id, user.token]);

  useFocusEffect(
    useCallback(() => {
      getPlaylistAndTracks();
    }, [getPlaylistAndTracks]),
  );

  return { playlist, tracks, loading };
};
