// Expo

// React

// React Native
import { FlatList } from "react-native";
import { DataPlaylistCarousel } from "../lib/types";
import { PlaylistCover } from "./PlaylistCover";
import NoListYet from "./NoListYet";

// Hooks

// Definitions

// Components

// Props

interface Props {
  data: DataPlaylistCarousel[];
}

// Api

export default function PlaylistCarousel({ data }: Props) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={PlaylistCover}
      horizontal
      showsHorizontalScrollIndicator={false}
      ListEmptyComponent={<NoListYet>Aún no tienes nada por aquí</NoListYet>}
    />
  );
}

// const styles = StyleSheet.create({

// });
