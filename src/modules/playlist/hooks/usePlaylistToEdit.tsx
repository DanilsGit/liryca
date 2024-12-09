import { useAuth } from "@/modules/auth/hooks/useAuth";
import { useCallback, useEffect, useState } from "react";
import {
  showPlaylistGetRequest,
  updatePlaylistPutRequest,
} from "../api/playlist";
import * as SecureStorage from "expo-secure-store";
import DocumentPicker from "react-native-document-picker";
import {
  deleteFileFirebase,
  uploadMediaToFirebase,
} from "@/modules/core/utils/firebaseMedia";
import { useFocusEffect, useRouter } from "expo-router";

interface PlaylistEdit {
  id: string;
  name: string;
  description: string;
  image: string;
  privacy: boolean;
  file: any;
}

export const usePlaylistToEdit = () => {
  const [playlist, setPlaylist] = useState<PlaylistEdit>(null);
  const [loading, setLoading] = useState(true);
  const [isAI, setIsAI] = useState(false);
  const [error, setError] = useState("");
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 5000);
  }, [error]);

  const pickPlaylistCover = async () => {
    try {
      const file = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      const url = file[0].uri;
      setPlaylist({ ...playlist, image: url, file: file[0] });
      setIsAI(false);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log("Selección cancelada");
      } else {
        console.error(err);
      }
    }
  };

  const getData = async () => {
    setLoading(true);
    try {
      const myObjectString = await SecureStorage.getItemAsync("PlaylistToEdit");
      const id = JSON.parse(myObjectString);
      const res = await showPlaylistGetRequest(user.token, id);
      const playlist_data = res.data.playlist;

      setPlaylist({
        ...playlist_data,
        privacy: playlist_data.privacy === "public",
      });
    } catch (error) {
      console.log(error.response.message);
    }
    setLoading(false);
  };

  const editValue = (key: string, value: string | boolean) => {
    setPlaylist({ ...playlist, [key]: value });
  };

  const updatePlaylist = async () => {
    setLoading(true);
    try {
      let playlistUrl = playlist.image;

      if (!isAI) {
        if (playlist.file) {
          playlistUrl = await uploadMediaToFirebase(
            playlist.file,
            "playlistCover",
            playlist.id,
          );
          await deleteFileFirebase(`playlistCover/${playlist.id}_AI.png`);
        }
      }
      if (isAI) await deleteFileFirebase(`playlistCover/${playlist.id}.png`);

      // Update playlist
      await updatePlaylistPutRequest(user.token, playlist.id, {
        id: playlist.id,
        name: playlist.name,
        description: playlist.description,
        privacy: playlist.privacy ? "public" : "private",
        image: playlistUrl,
      });
      router.back();
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const changeImageAI = (url: string) => {
    setPlaylist({ ...playlist, image: url });
    setIsAI(true);
  };

  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );

  return {
    playlist,
    loading,
    editValue,
    pickPlaylistCover,
    updatePlaylist,
    changeImageAI,
  };
};
