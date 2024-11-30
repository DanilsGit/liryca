import { useAuth } from "@/modules/auth/hooks/useAuth";
import { useCallback, useEffect, useState } from "react";
import { allPlaylistGetRequest, playlistPostRequest } from "../api/playlist";

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
      await playlistPostRequest(user.token);
      await getPlaylists();
      setLoadingCreating(false);
    } catch (error) {
      setLoadingCreating(false);
      console.log(error.response.data);
    }
  };
  const getPlaylists = useCallback(async () => {
    try {
      setLoadingGetPlaylist(true);
      const res = await allPlaylistGetRequest(user.token);
      const playlists = res.data;
      setMyPlaylist(playlists.playlists.reverse());
      setSharedPlaylist(playlists.shared_playlists);
      setSavedPlaylist(playlists.followed_playlists);
      setLoadingGetPlaylist(false);
    } catch (error) {
      setLoadingGetPlaylist(false);
      console.log(error.response.data);
    }
  }, [user.token]);

  useEffect(() => {
    getPlaylists();
  }, [getPlaylists]);

  return {
    myPlaylist,
    savedPlaylist,
    sharedPlaylist,
    loadingGetPlaylist,
    loadingCreating,
    handleCreatePlaylist,
  };
};
