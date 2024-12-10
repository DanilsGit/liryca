// Expo
import * as SecureStorage from "expo-secure-store";
// React

// React Native
import { DotsIcon } from "@/modules/core/components/Icons";
import { Pressable, View } from "react-native";
import { SheetManager } from "react-native-actions-sheet";
import { useRouter } from "expo-router";
import { Playlist } from "@/modules/core/lib/types_tracks";
import { PublicArtist } from "@/modules/core/lib/types";

// Hooks

// Definitions

// Components

// Props
interface Props {
  artist: PublicArtist;
}
// Api

export default function PublicArtistOptiosAction({ artist }: Props) {
  const router = useRouter();

  const handlePostArtist = async () => {
    await SecureStorage.setItemAsync(
      "post_attachment",
      JSON.stringify({
        id: artist.user_id,
        name: artist.username,
        image: artist.profile_picture,
        owner: "Artista",
        type: "artist",
      }),
    );
    router.navigate("/writeAPost");
  };

  const showPublicArtistOptions = () => {
    SheetManager.show("publicArtist-options-sheet", {
      payload: {
        postPublicArtist: () => handlePostArtist(),
        sharePublicArtist: () => console.log("Compartir artista"),
        followPublicArtist: () => console.log("Seguir artista"),
      },
    });
  };

  return (
    <Pressable onPress={showPublicArtistOptions}>
      <View>
        <DotsIcon width={25} height={25} />
      </View>
    </Pressable>
  );
}
