// Expo
import * as SecureStorage from "expo-secure-store";
// React

// React Native
import { DotsIcon } from "@/modules/core/components/Icons";
import { Pressable, View } from "react-native";
import { SheetManager } from "react-native-actions-sheet";
import { useRouter } from "expo-router";
import { Playlist } from "@/modules/core/lib/types_tracks";

// Hooks

// Definitions

// Components

// Props
interface Props {
  owner: string;
  playlist: Playlist;
}
// Api

export default function PlaylistOptiosAction({ owner, playlist }: Props) {
  const router = useRouter();

  const handleEditPlaylist = async () => {
    await SecureStorage.setItemAsync(
      "PlaylistToEdit",
      JSON.stringify(playlist.id)
    );
    router.navigate("/editPlaylist");
  };

  const handlePostPlaylist = async () => {
    await SecureStorage.setItemAsync(
      "post_attachment",
      JSON.stringify({
        id: playlist.id,
        name: playlist.name,
        image: playlist.image,
        owner: "Playlist",
        type: "playlist",
      }),
    );
    router.navigate("/writeAPost");
  };

  const showPlaylistOptions = () => {
    SheetManager.show("playlist-options-sheet", {
      payload: {
        editPlaylist: () => handleEditPlaylist(),
        sharePlaylist: () => console.log("Compartir playlist"),
        postPlaylist: () => handlePostPlaylist(),
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
