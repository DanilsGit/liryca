import { useAuth } from "@/modules/auth/hooks/useAuth";
import { useCallback, useState } from "react";
import { allPlaylistGetRequest, playlistPostRequest } from "../api/playlist";
import { useFocusEffect } from "expo-router";

export const usePlaylistAndAlbums = () => {
  const { user } = useAuth();
  const [myPlaylist, setMyPlaylist] = useState([]);
  const [savedPlaylist, setSavedPlaylist] = useState([]);
  const [sharedPlaylist, setSharedPlaylist] = useState([]);
  const [loadingCreating, setLoadingCreating] = useState(false);
  const [loadingGetPlaylist, setLoadingGetPlaylist] = useState(false);

  const handleCreatePlaylist = async () => {
    try {
      setLoadingCreating(true);
      const res = await playlistPostRequest(user.token);
      const data = res.data.playlist;
      const playlist = {
        id: data.id,
        name: data.name,
        image: data.image,
      };
      setMyPlaylist([playlist, ...myPlaylist]);
      setLoadingCreating(false);
    } catch (error) {
      setLoadingCreating(false);
      console.log(error.response.data);
    }
  };

  const getPlaylists = async () => {
    try {
      setLoadingGetPlaylist(true);
      const res = await allPlaylistGetRequest(user.token);
      const playlists = res.data;
      const myPlaylist = playlists.playlists.map((playlist) => ({
        id: playlist.id,
        title: playlist.name,
        icon: playlist.image,
      }));
      setMyPlaylist(myPlaylist.reverse());
      setSharedPlaylist(playlists.shared_playlists);
      setSavedPlaylist(playlists.followed_playlists);
      setLoadingGetPlaylist(false);
    } catch (error) {
      setLoadingGetPlaylist(false);
      console.log(error.response.data);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getPlaylists();
    }, [])
  );

  return {
    myPlaylist,
    savedPlaylist,
    sharedPlaylist,
    loadingGetPlaylist,
    loadingCreating,
    handleCreatePlaylist,
  };
};
