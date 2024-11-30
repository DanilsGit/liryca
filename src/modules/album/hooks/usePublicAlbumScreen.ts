import { useAuth } from "@/modules/auth/hooks/useAuth";
import { Album } from "@/modules/core/lib/types";
import { useCallback, useEffect, useState } from "react";
import {
  albumInformationGetRequest,
  albumTracksGetRequest,
} from "../api/album";
import { onlyMinutes } from "@/modules/core/utils/miscellaneous";
import { Track } from "react-native-track-player";

export const usePublicAlbumScreen = ({ id }: { id: string }) => {
  const [album, setAlbum] = useState<Album>(null);
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  const getAlbumAndTracks = useCallback(async () => {
    setLoading(true);
    try {
      const resAlbum = await albumInformationGetRequest(user.token, id);
      const album = resAlbum.data.data;
      setAlbum(album);
      const resTracks = await albumTracksGetRequest(user.token, album.id);
      const tracks = resTracks.data.data;
      tracks.forEach((track) => {
        track.url = track.url_song;
        track.image = track.album_icon;
        track.artist = track.artist_username;
        track.duration = onlyMinutes(track.time);
      });
      setTracks(tracks);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }, [id, user.token]);

  useEffect(() => {
    getAlbumAndTracks();
  }, [getAlbumAndTracks, id]);

  return { album, tracks, loading };
};
