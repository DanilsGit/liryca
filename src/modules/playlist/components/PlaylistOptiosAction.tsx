// Expo
import * as SecureStorage from "expo-secure-store";
// React

// React Native
import { DotsIcon } from "@/modules/core/components/Icons";
import { Pressable, View } from "react-native";
import { SheetManager } from "react-native-actions-sheet";
import { useRouter } from "expo-router";

// Hooks

// Definitions

// Components

// Props
interface Props {
  owner: string;
  id_playlist: number;
}
// Api

export default function PlaylistOptiosAction({ owner, id_playlist }: Props) {
  const router = useRouter();

  const handleEditPlaylist = async () => {
    await SecureStorage.setItemAsync(
      "PlaylistToEdit",
      JSON.stringify(id_playlist),
    );
    router.navigate("/editPlaylist");
  };

  const showPlaylistOptions = () => {
    SheetManager.show("playlist-options-sheet", {
      payload: {
        editPlaylist: () => handleEditPlaylist(),
        sharePlaylist: () => console.log("Compartir playlist"),
        invitePlaylist: () => console.log("Invitar a la playlist"),
        likePlaylist: () => console.log("Dar like"),
        owner: owner,
      },
    });
  };

  return (
    <Pressable onPress={showPlaylistOptions}>
      <View>
        <DotsIcon width={25} height={25} />
      </View>
    </Pressable>
  );
}
