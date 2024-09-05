// Expo

// React

// React Native
import { Dimensions, View, Image, StyleSheet } from "react-native";
import { DataArtistCarousel } from "../lib/types";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "@/constants/tokens";

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
    <LinearGradient
      key={item.id}
      style={[styles.container, { width: width + 5, height: width + 5 }]}
      colors={[colors.light_blue, colors.purple]}
    >
      <Image
        source={{ uri: item.image }}
        borderRadius={100}
        width={width}
        height={width}
        resizeMode="cover"
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    borderRadius: 100,
  },
});
