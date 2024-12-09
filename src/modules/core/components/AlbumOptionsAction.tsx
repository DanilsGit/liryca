// Expo
import * as SecureStorage from "expo-secure-store";
// React

// React Native
import { useRouter } from "expo-router";
import { Pressable, View } from "react-native";
import { SheetManager } from "react-native-actions-sheet";
import { DotsIcon } from "./Icons";
import { Album } from "../lib/types";

// Hooks

// Definitions

// Components

// Props
interface Props {
  owner: string;
  album: Album;
}
// Api

export const AlbumOptionsAction = ({ owner, album }: Props) => {
  const router = useRouter();

  const goToEditAlbum = async () => {
    await SecureStorage.setItemAsync("AlbumToEdit", JSON.stringify(album));
    router.navigate("/editAlbum");
  };

  const showAlbumOptions = () => {
    SheetManager.show("album-options-sheet", {
      payload: {
        editAlbum: () => goToEditAlbum(),
        inviteAlbum: () => console.log("invite"),
        shareAlbum: () => console.log("share"),
        likeAlbum: () => console.log(owner, album.id),
        owner: owner,
      },
    });
  };

  return (
    <Pressable onPress={showAlbumOptions}>
      <View>
        <DotsIcon width={25} height={25} />
      </View>
    </Pressable>
  );
};
