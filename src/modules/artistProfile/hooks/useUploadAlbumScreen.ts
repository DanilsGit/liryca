import { useAuth } from "@/modules/auth/hooks/useAuth";
import { useState } from "react";
import DocumentPicker from "react-native-document-picker";
import { uploadMediaToFirebase } from "@/modules/core/utils/firebaseMedia";
import {
  generateUniqueId,
  getAudioDuration,
  sameValueOfKeyInArrayElements,
} from "@/modules/core/utils/miscellaneous";
import {
  albumPatchRequest,
  albumRequest,
  trackPatchRequest,
  trackRequest,
} from "../api/artist";
import { useRouter } from "expo-router";
import { Alert } from "react-native";
import { AlbumCreating, Song } from "@/modules/core/lib/types";

export const useUploadAlbumScreen = () => {
  const { user, updateV } = useAuth();
  const router = useRouter();
  const [loadingPickSong, setLoadingPickSong] = useState(false);
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [album, setAlbum] = useState<AlbumCreating>({
    title: "",
    relase_date: new Date(),
    showDatePicker: false,
    description: "",
    icon: "",
    file: null,
  });

  const [songs, setSongs] = useState<Song[]>([]);

  const updateAlbum = (key: string, value: string | boolean) => {
    setAlbum({ ...album, [key]: value });
  };

  const pickAlbumCover = async () => {
    try {
      const file = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      const url = file[0].uri;
      setAlbum({ ...album, icon: url, file: file[0] });
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log("Selección cancelada");
      } else {
        console.error(err);
      }
    }
  };

  const addSong = () => {
    const emptyField = songs.some(
      (song) =>
        song.title === "" ||
        song.genre === "" ||
        song.song_uploaded === "" ||
        song.file === null ||
        song.time === "",
    );
    if (emptyField) {
      Alert.alert("Please fill all fields");
      return;
    }
    setSongs([
      ...songs,
      {
        id: generateUniqueId(),
        title: "",
        genre: "",
        song_uploaded: "",
        file: null,
        time: "",
      },
    ]);
  };

  const editSong = (id: string, key: string, value: string) => {
    if (!id) return;
    const index = songs.findIndex((song) => song.id === id);
    const newSongs = [...songs];
    newSongs[index] = { ...newSongs[index], [key]: value };
    setSongs(newSongs);
    console.log(songs);
  };

  const pickSong = async (id: string) => {
    if (!id) return;
    setLoadingPickSong(true);
    try {
      const file = await DocumentPicker.pick({
        type: [DocumentPicker.types.audio],
      });
      const song = file[0];
      const duration = await getAudioDuration(song.uri);
      const index = songs.findIndex((song) => song.id === id);
      const newSongs = [...songs];
      newSongs[index] = {
        ...newSongs[index],
        ["song_uploaded"]: song.name,
        ["time"]: duration,
        ["file"]: song,
      };
      setSongs(newSongs);
      setLoadingPickSong(false);
    } catch (err) {
      setLoadingPickSong(false);
      if (DocumentPicker.isCancel(err)) {
        console.log("Selección cancelada");
      } else {
        console.error(err);
      }
    }
  };

  const doneAndUpload = async () => {
    const sameTitle = sameValueOfKeyInArrayElements(songs, "title");
    if (sameTitle) {
      Alert.alert("Songs must have different titles");
      return;
    }
    const emptyField = songs.some(
      (song) =>
        song.title === "" ||
        song.genre === "" ||
        song.song_uploaded === "" ||
        song.file === null ||
        song.time === "",
    );
    if (emptyField) {
      Alert.alert("Please fill all fields");
      return;
    }
    setLoadingUpload(true);
    try {
      //Sube el album a la base de datos, sube la imágen en firebase con la id y en la base de datos actualiza la url
      //Sube el album a la base de datos
      const albumCreated = await albumRequest(user.token, {
        title: album.title,
        description: album.description,
        icon: "http://example.com/icon.png",
        release_date: String(album.relase_date).split("T")[0],
      });
      const album_id = albumCreated.data.data.id;
      //Renombra la imagen en firebase y en la base de datos
      const icon_url = await uploadMediaToFirebase(
        album.file,
        "albumCover",
        album_id,
      );
      await albumPatchRequest(user.token, album_id, { icon: icon_url });
      //Sube las canciones a la base de datos
      songs.forEach(async (song) => {
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
          song_id,
        );
        await trackPatchRequest(user.token, song_id, { url_song: songUrl });
      });
      updateV(user.version + 1);
      setLoadingUpload(false);
      router.back();
    } catch (error) {
      const errorMessage = error.response.data.message;
      Alert.alert(errorMessage);
      setLoadingUpload(false);
    }
  };

  const handleDateChange = (_, selectedDate) => {
    const currentDate = selectedDate || album.relase_date;
    setAlbum({ ...album, relase_date: currentDate, showDatePicker: false });
  };

  return {
    album,
    songs,
    updateAlbum,
    handleDateChange,
    addSong,
    editSong,
    pickSong,
    loadingPickSong,
    pickAlbumCover,
    doneAndUpload,
    loadingUpload,
  };
};
