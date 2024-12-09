// Expo
import * as SecureStorage from "expo-secure-store";
import DocumentPicker from "react-native-document-picker";
// React

// React Native

// Hooks

// Definitions

// Components
import { Alert, View } from "react-native";
import { useCallback, useState } from "react";
import { useFocusEffect, useRouter } from "expo-router";
import Screen from "@/modules/core/components/Screen";
import InformationAndCover from "@/modules/artistProfile/components/InformationAndCover";
import LargeIconButton from "@/modules/core/components/LargeIconButton";
import { SheetManager } from "react-native-actions-sheet";
import { UploadIcon } from "@/modules/core/components/Icons";
import { albumPutRequest } from "@/modules/artistProfile/api/artist";
import { useAuth } from "@/modules/auth/hooks/useAuth";
import ScreenLoading from "@/modules/core/components/ScreenLoading";
import {
  deleteFileFirebase,
  uploadMediaToFirebase,
} from "@/modules/core/utils/firebaseMedia";

// Props

// Api

const useGetAlbumToEdit = () => {
  const [album, setAlbum] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isAI, setIsAI] = useState(false);
  const { user } = useAuth();
  const router = useRouter();

  const getData = useCallback(async () => {
    setLoading(true);
    const myObjectString = await SecureStorage.getItemAsync("AlbumToEdit");
    const data = JSON.parse(myObjectString);
    const data_formatted = {
      ...data,
      release_date: new Date(data.release_date),
    };
    console.log(data_formatted);

    setAlbum(data_formatted);
    setLoading(false);
  }, []);

  const pickAlbumCover = async () => {
    try {
      const file = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      const url = file[0].uri;
      setAlbum({ ...album, icon: url, file: file[0] });
      setIsAI(false);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log("Selección cancelada");
      } else {
        console.error(err);
      }
    }
  };

  const updateAlbum = (key: string, value: string | boolean) => {
    setAlbum({ ...album, [key]: value });
  };

  const handleDateChange = (_, selectedDate) => {
    const currentDate = selectedDate || album.release_date;
    setAlbum({ ...album, release_date: currentDate, showDatePicker: false });
  };

  const changeImageAI = (url) => {
    setAlbum({ ...album, icon: url });
    setIsAI(true);
  };

  const doneAndUpload = async () => {
    setLoading(true);
    try {
      if (!album.title) {
        Alert.alert("Album title is required");
        return;
      }
      const date = album.release_date.toISOString().split("T")[0];

      let icon_url = album.icon;

      if (!isAI) {
        if (album.file) {
          icon_url = await uploadMediaToFirebase(
            album.file,
            "albumCover",
            album.id,
          );
          await deleteFileFirebase(`albumCover/${album.id}_AI.png`);
        }
      }
      if (isAI) await deleteFileFirebase(`albumCover/${album.id}.png`);

      const dataToSend = {
        title: album.title,
        description: album.description,
        release_date: date,
        icon: icon_url,
      };
      const res = await albumPutRequest(user.token, album.id, dataToSend);
      console.log(res.data);

      router.back();
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useFocusEffect(
    useCallback(() => {
      getData();
    }, [getData]),
  );

  return {
    album,
    pickAlbumCover,
    updateAlbum,
    handleDateChange,
    changeImageAI,
    loading,
    doneAndUpload,
  };
};

export default function EditAlbumScreen() {
  SheetManager.hide("album-options-sheet");

  const {
    album,
    pickAlbumCover,
    updateAlbum,
    handleDateChange,
    changeImageAI,
    doneAndUpload,
    loading,
  } = useGetAlbumToEdit();

  if (loading) {
    return <ScreenLoading />;
  }

  return (
    <Screen>
      <View style={{ padding: 10, gap: 20 }}>
        <InformationAndCover
          album={album}
          updateAlbum={updateAlbum}
          pickAlbumCover={pickAlbumCover}
          handleDatePicker={handleDateChange}
          changeImageAI={changeImageAI}
        />

        <LargeIconButton
          onPress={() => doneAndUpload()}
          icon={<UploadIcon width={20} height={20} stroke="#000" />}
          text="Done"
        />
      </View>
    </Screen>
  );
}
