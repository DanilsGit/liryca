// Expo

// React

// React Native
import { FlatList } from "react-native";
import { DataArtistCarousel } from "../lib/types";
import { ArtistIcon } from "./ArtistIcon";
// Hooks

// Definitions

// Components

// Props

interface Props {
  data: DataArtistCarousel[];
}

// Api

export default function ArtistCarousel({ data }: Props) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={ArtistIcon}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
}

// const styles = StyleSheet.create({

// });
