import { useAuth } from "@/modules/auth/hooks/useAuth";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { recentlyAlbumGetRequest } from "../api/main";

export const useMainScreen = () => {
  const { user } = useAuth();
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [tracks, setTracks] = useState([]);

  const getAlbums = async () => {
    try {
      const res = await recentlyAlbumGetRequest(user.token);
      const albums = res.data;
      setAlbums(albums);
    } catch (error) {
      console.log(error.response.message);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getAlbums();
    }, [])
  );

  return { albums };
};
