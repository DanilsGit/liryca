// Expo
import * as SecureStorage from "expo-secure-store";
// React

// React Native

// Hooks

// Definitions

// Components
import { View } from "react-native";
import { useCallback, useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";

// Props

// Api

const useGetAlbumToEdit = () => {
  const [albumToEdit, setAlbumToEdit] = useState(null);

  const getData = useCallback(async () => {
    const myObjectString = await SecureStorage.getItemAsync("albumToEdit");
    const data = JSON.parse(myObjectString);
    setAlbumToEdit(data);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return albumToEdit;
};

export default function EditAlbumScreen() {
  const albumToEdit = useGetAlbumToEdit();

  console.log(albumToEdit);
  return <View />;
}
