// Expo

// React

// React Native
import { FlatList } from "react-native";
import { DataPlaylistCarousel } from "../lib/types";
import { PlaylistCover } from "./PlaylistCover";
import NoListYet from "./NoListYet";
import { useRouter } from "expo-router";

// Hooks

// Definitions

// Components

// Props

interface Props {
  data: DataPlaylistCarousel[];
}

// Api

export default function PlaylistCarousel({ data }: Props) {
  const router = useRouter();
  const handlePress = (id: number) => {
    router.push(`/playlist/${id}`);
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <PlaylistCover item={item} handlePress={handlePress} />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      ListEmptyComponent={<NoListYet>Aún no tienes nada por aquí</NoListYet>}
    />
  );
}

// const styles = StyleSheet.create({

// });
