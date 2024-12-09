// Expo
import * as SecureStorage from "expo-secure-store";
// React

// React Native
import DocumentPicker from "react-native-document-picker";
import { themesText } from "@/constants/themes";
import { ThemeText } from "@/constants/themesTypes";
import Screen from "@/modules/core/components/Screen";
import { useTheme } from "@/modules/core/hooks/useTheme";
import { Alert, StyleSheet, Text, View } from "react-native";
import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { fontSizes } from "@/constants/tokens";
import ListAddSongs from "@/modules/artistProfile/components/ListAddSongs";
import {
  getAudioDuration,
  sameValueOfKeyInArrayElements,
} from "@/modules/core/utils/miscellaneous";
import LargeIconButton from "@/modules/core/components/LargeIconButton";
import { AddSquareIcon, UploadIcon } from "@/modules/core/components/Icons";
import { useAuth } from "@/modules/auth/hooks/useAuth";
import {
  trackPatchRequest,
  trackRequest,
} from "@/modules/artistProfile/api/artist";
import { uploadMediaToFirebase } from "@/modules/core/utils/firebaseMedia";
import LoadingUploadAlbum from "@/modules/artistProfile/components/LoadingUploadAlbum";

// Hooks

// Definitions

// Components

// Props

// Api

const useTracksToAlbumScreen = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [tracks, setTracks] = useState([
    {
      id: `new-${Date.now()}`,
      title: "",
      genre: "",
      song_uploaded: "",
      file: null,
      time: "",
    },
  ]);
  const [loadingPickTrack, setLoadingPickTrack] = useState(false);
  const [album_id, setAlbumId] = useState("");
  const [loading, setLoading] = useState(false);

  const emptyField = (tracks) => {
    return tracks.some(
      (song) =>
        song.title === "" ||
        song.genre === "" ||
        song.song_uploaded === "" ||
        song.file === null ||
        song.time === ""
    );
  };

  const addTrack = () => {
    if (emptyField(tracks)) {
      Alert.alert("Please fill all fields");
      return;
    }
    setTracks([
      ...tracks,
      {
        id: `new-${Date.now()}`,
        title: "",
        genre: "",
        song_uploaded: "",
        file: null,
        time: "",
      },
    ]);
  };

  const getTracks = useCallback(async () => {
    setLoading(true);
    const myObjectString = await SecureStorage.getItemAsync("TracksToAlbum");
    const data = JSON.parse(myObjectString);
    setAlbumId(data);
    setLoading(false);
  }, []);

  const editTrack = (id: string, key: string, value: string) => {
    if (!id) return;
    const index = tracks.findIndex((song) => song.id === id);
    const newtracks = [...tracks];
    newtracks[index] = { ...newtracks[index], [key]: value };
    setTracks(newtracks);
  };

  const pickTrack = async (id: string) => {
    if (!id) return;
    setLoadingPickTrack(true);
    try {
      const file = await DocumentPicker.pick({
        type: [DocumentPicker.types.audio],
      });
      const song = file[0];
      const duration = await getAudioDuration(song.uri);
      const index = tracks.findIndex((song) => song.id === id);
      const newSongs = [...tracks];
      newSongs[index] = {
        ...newSongs[index],
        ["song_uploaded"]: song.name,
        ["time"]: duration,
        ["file"]: song,
      };
      setTracks(newSongs);
      setLoadingPickTrack(false);
    } catch (err) {
      setLoadingPickTrack(false);
      if (DocumentPicker.isCancel(err)) {
        console.log("Selección cancelada");
      } else {
        console.error(err);
      }
    }
  };

  const doneAndUpload = async () => {
    if (emptyField(tracks)) {
      Alert.alert("Please fill all fields");
      return;
    }
    const sameTitle = sameValueOfKeyInArrayElements(tracks, "title");
    if (sameTitle) {
      Alert.alert("You have tracks with the same title");
      return;
    }

    try {
      setLoading(true);
      const reverse_tracks = [...tracks].reverse();
      reverse_tracks.forEach(async (song) => {
        const songCreated = await trackRequest(user.token, {
          title: song.title,
          album_id: album_id,
          time: song.time,
          genre: song.genre,
          url_song: "http://example.com/song.mp3",
        });
        const song_id = songCreated.data.data.id;
        const songUrl = await uploadMediaToFirebase(
          song.file,
          "songs",
          song_id
        );
        await trackPatchRequest(user.token, song_id, { url_song: songUrl });
      });
      setLoading(false);
      router.back();
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getTracks();
    }, [getTracks])
  );

  return {
    tracks,
    editTrack,
    pickTrack,
    loadingPickTrack,
    addTrack,
    loading,
    doneAndUpload,
  };
};

export default function TracksToAlbumScreen() {
  const { theme } = useTheme();
  const styles = createStyles(themesText[theme]);

  const {
    tracks,
    editTrack,
    pickTrack,
    loadingPickTrack,
    addTrack,
    loading,
    doneAndUpload,
  } = useTracksToAlbumScreen();

  if (loading) return <LoadingUploadAlbum />;

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.text}>Sube tus canciones</Text>
        <ListAddSongs
          songs={tracks}
          editSong={editTrack}
          pickSong={pickTrack}
          loadingPickSong={loadingPickTrack}
        />
        <LargeIconButton
          onPress={() => addTrack()}
          icon={<AddSquareIcon width={20} height={20} stroke="#000" />}
          text="Añadir otra canción"
        />
        <LargeIconButton
          onPress={() => doneAndUpload()}
          icon={<UploadIcon width={20} height={20} stroke="#000" />}
          text="Todo listo y subir"
        />
      </View>
    </Screen>
  );
}

const createStyles = (theme: ThemeText) =>
  StyleSheet.create({
    container: {
      gap: 20,
      padding: 10,
    },
    text: {
      color: theme.primary,
      fontFamily: "M-PLUS-2-Bold",
      fontSize: fontSizes.xl2,
    },
  });
