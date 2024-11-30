// Expo

// React

// React Native
import { Text, View, StyleSheet, Pressable } from "react-native";
import { DataPlaylistCarousel } from "../lib/types";
import { LinearGradient } from "expo-linear-gradient";
import { colors, fontSizes } from "../../../constants/tokens";
import { Image } from "expo-image";

// Hooks

// Definitions

// Components

// Props
interface Props {
  item: DataPlaylistCarousel;
  index: number;
}

export const PlaylistCover = ({ item, index }: Props) => {
  return (
    <Pressable onPress={() => console.log(item.id)}>
      <View key={item.id} style={styles.container}>
        <Image
          source={{ uri: item.image }}
          contentFit="cover"
          style={styles.image}
        />
        <LinearGradient
          colors={["transparent", "black"]}
          style={styles.gradiente}
        />
        <Text style={styles.text}>{item.name}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    position: "absolute",
    bottom: 10,
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: fontSizes.md,
  },
  container: {
    borderRadius: 10,
    height: 170,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    width: 160,
  },
  image: {
    position: "relative",
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  gradiente: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 100,
    borderRadius: 10,
  },
});
