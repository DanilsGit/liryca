import { useAuth } from "@/modules/auth/hooks/useAuth";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { recentlyAlbumGetRequest, topArtistGetRequest } from "../api/main";
import { useMyArtist } from "./useTopArtist";

export const useMainScreen = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [topArtist, setTopArtist] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [tracks, setTracks] = useState([]);
  const { followedArtist } = useMyArtist();

  const getAlbums = useCallback(async () => {
    setLoading(true);
    try {
      const res = await recentlyAlbumGetRequest(user.token);
      const albums = res.data;
      setAlbums(albums);
    } catch (error) {
      console.log(error.response.message);
    }
    setLoading(false);
  }, [user.token]);

  const getArtists = useCallback(async () => {
    try {
      const resTop = await topArtistGetRequest(user.token);
      setTopArtist(resTop.data.data);
    } catch (error) {
      console.log(error.response.message);
    }
  }, [user.token]);

  useFocusEffect(
    useCallback(() => {
      getAlbums();
      getArtists();
    }, [getAlbums, getArtists]),
  );

  return { albums, topArtist, loading, followedArtist };
};
