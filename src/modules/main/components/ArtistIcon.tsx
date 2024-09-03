// Expo

// React

// React Native
import { Dimensions, View, Image, StyleSheet } from "react-native";
import { DataArtistCarousel } from "../lib/types";

// Hooks

// Definitions

// Components

// Props
interface Props {
  item: DataArtistCarousel;
  index: number;
}

export const ArtistIcon = ({ item, index }: Props) => {
  const width_d = Dimensions.get("window").width;
  const width = width_d / 4.5;
  return (
    <View key={item.id} style={[styles.container]}>
      <Image
        source={{ uri: item.image }}
        borderRadius={100}
        width={width}
        height={width}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    borderRadius: 100,
  },
});
