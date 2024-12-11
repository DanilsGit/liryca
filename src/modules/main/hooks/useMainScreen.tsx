import { useAuth } from "@/modules/auth/hooks/useAuth";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import {
  getAlbumInMyCountryRequest,
  getTopTracksTodayInMyCountryRequest,
  getTopTracksTodayRequest,
  recentlyAlbumGetRequest,
  topArtistGetRequest,
} from "../api/main";
import { useMyArtist } from "./useTopArtist";
import { Album } from "@/modules/core/lib/types";

export const useMainScreen = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [topArtist, setTopArtist] = useState([]);
  const [albumsTrending, setAlbumsTrending] = useState<Album[]>([]);
  const [albumCountry, setAlbumCountry] = useState<Album[]>([]);
  const [tracksTrending, setTracksTrending] = useState([]);
  const [tracksCountry, setTracksCountry] = useState([]);
  const { followedArtist } = useMyArtist();

  const getTracksTrending = useCallback(async () => {
    if (!user.token) return;
    setLoading(true);
    try {
      const res = await getTopTracksTodayRequest(user.token);
      const tracks = res.data.data.map((item: any) => {
        return {
          id: item.song_id,
          title: item.song_name,
          artist: item.artist_name,
          image: item.album_icon,
          url: item.song_url,
          artist_id: item.artist_id,
          isLiked: item.is_liked,
        };
      });
      setTracksTrending(tracks);
    } catch (error) {
      console.log(error.response.message);
    }
    setLoading(false);
  }, [user.token]);

  const getTracksCountry = useCallback(async () => {
    if (!user.token) return;
    setLoading(true);
    try {
      const res = await getTopTracksTodayInMyCountryRequest(user.token);
      const tracks = res.data.data.map((item: any) => {
        return {
          id: item.song_id,
          title: item.song_name,
          artist: item.artist_name,
          image: item.album_icon,
          url: item.song_url,
          artist_id: item.artist_id,
          isLiked: item.is_liked,
        };
      });
      setTracksCountry(tracks);
    } catch (error) {
      console.log(error.response.message);
    }
    setLoading(false);
  }, [user.token]);

  const getAlbumsTrending = useCallback(async () => {
    if (!user.token) return;
    setLoading(true);
    try {
      const res = await recentlyAlbumGetRequest(user.token);
      const albums = res.data;
      setAlbumsTrending(albums);
    } catch (error) {
      console.log(error.response.message);
    }
    setLoading(false);
  }, [user?.token]);

  const getAlbumsCountry = useCallback(async () => {
    if (!user.token) return;
    setLoading(true);
    try {
      const res = await getAlbumInMyCountryRequest(user.token);
      setAlbumCountry(res.data.data);
    } catch (error) {
      console.log(error.response.message);
    }
    setLoading(false);
  }, [user.token]);

  const getArtists = useCallback(async () => {
    if (!user.token) return;
    setLoading(true);
    try {
      const resTop = await topArtistGetRequest(user.token);
      setTopArtist(resTop.data.data);
    } catch (error) {
      console.log(error.response.message);
    }
    setLoading(false);
  }, [user?.token]);

  useFocusEffect(
    useCallback(() => {
      getAlbumsTrending();
      getArtists();
      getAlbumsCountry();
      getTracksTrending();
      getTracksCountry();
    }, [
      getAlbumsCountry,
      getAlbumsTrending,
      getArtists,
      getTracksCountry,
      getTracksTrending,
    ])
  );

  return {
    albumsTrending,
    topArtist,
    loading,
    followedArtist,
    albumCountry,
    tracksTrending,
    tracksCountry,
  };
};
