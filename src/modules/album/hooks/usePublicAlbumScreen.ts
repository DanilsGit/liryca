import { useAuth } from "@/modules/auth/hooks/useAuth";
import { Album } from "@/modules/core/lib/types";
import { useCallback, useState } from "react";
import {
  albumInformationGetRequest,
  albumTracksGetRequest,
} from "../api/album";
import { onlyMinutes } from "@/modules/core/utils/miscellaneous";
import { Track } from "react-native-track-player";
import { useFocusEffect } from "expo-router";

export const usePublicAlbumScreen = ({ id }: { id: string }) => {
  const [album, setAlbum] = useState<Album>(null);
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  const getAlbumAndTracks = useCallback(async () => {
    setLoading(true);
    try {
      const resAlbum = await albumInformationGetRequest(user.token, id);
      const album = resAlbum.data;
      setAlbum(album);
      const resTracks = await albumTracksGetRequest(user.token, album.id);
      const tracks = resTracks.data.data;
      tracks.forEach((track) => {
        track.id = track.song_id;
        track.title = track.song_name;
        track.url = track.song_url;
        track.image = track.album_image;
        track.artist = track.artist_name;
        track.duration = onlyMinutes(track.time);
      });
      setTracks(tracks);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }, [id, user.token]);

  useFocusEffect(
    useCallback(() => {
      getAlbumAndTracks();
    }, [getAlbumAndTracks])
  );

  return { album, tracks, loading };
};
