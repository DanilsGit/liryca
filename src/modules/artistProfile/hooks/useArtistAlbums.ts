import { useAuth } from "@/modules/auth/hooks/useAuth";
import { useCallback, useState } from "react";
import { albumRequest, allAlbumsGetRequest } from "../api/artist";
import { Album } from "@/modules/core/lib/types";
import { useFocusEffect } from "expo-router";

// Api
export const useArtistAlbums = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const { user } = useAuth();
  const { token } = user;

  const getAlbums = async () => {
    try {
      const res = await allAlbumsGetRequest(token);
      setAlbums(res.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  // TODO, REFACTORIZARLO TODO Y CAMBIARLO TODO

  const handleAddAlbum = async () => {
    try {
      const res = await albumRequest(token, {
        title: `Album ${albums.length + 1}`,
        description: "Example description",
        release_date: "2024-12-01",
        icon: "https://firebasestorage.googleapis.com/v0/b/liryca-c9f2e.appspot.com/o/playlistCover%2FdefaultCover.jpg?alt=media&token=c199cc9f-afca-460b-8b70-3d45eaf39e80",
      });
      const data_album = res.data.data;
      const newAlbum = {
        id: data_album.id,
        title: data_album.title,
        artist_id: data_album.artist_id,
        release_date: data_album.release_date,
        description: data_album.description,
        icon: data_album.icon,
        is_active: data_album.is_active,
        created_at: data_album.created_at,
        updated_at: data_album.updated_at,
      };
      setAlbums([...albums, newAlbum]);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getAlbums();
    }, [])
  );

  return { albums, handleAddAlbum };
};
