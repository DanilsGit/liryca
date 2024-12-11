import {
  publicListAlbumGetRequest,
  topTracksArtist,
} from "app/(tabs)/artistPublicProfile/api/publicArtist";
import { useCallback, useState } from "react";
import { useAuth } from "@/modules/auth/hooks/useAuth";
import { Album } from "@/modules/core/lib/types";
import { useFocusEffect } from "expo-router";

export const usePublicAlbums = (id: string) => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [topTracks, setTopTracks] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useAuth();

  const getAlbums = async (id: string) => {
    setLoading(true);
    try {
      const res = await publicListAlbumGetRequest(user.token, id);
      const data = res.data.data;
      setAlbums(data);
    } catch (error) {
      console.log(error.response.data);
    }
    setLoading(false);
  };

  const getTopTracks = async (id: string) => {
    setLoading(true);
    try {
      const res = await topTracksArtist(user.token, id);
      const data = res.data.data.map((item: any) => {
        return {
          id: item.song_id,
          title: item.song_name,
          genre: item.genre,
          image: item.album_image,
          artist: item.artist_name,
          url: item.song_url,
          artist_id: item.artist_id,
          isLiked: item.is_liked,
        };
      });
      setTopTracks(data);
    } catch (error) {
      console.log(error.response.data);
    }
    setLoading(false);
  };

  useFocusEffect(
    useCallback(() => {
      getAlbums(id);
      getTopTracks(id);
    }, [])
  );

  return { albums, loading, topTracks };
};
