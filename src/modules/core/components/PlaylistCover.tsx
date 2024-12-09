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
  handlePress: (id: number) => void;
}

export const PlaylistCover = ({ item, handlePress }: Props) => {
  return (
    <Pressable onPress={() => handlePress(item.id)}>
      <View key={item.id} style={styles.container}>
        <Image
          source={{ uri: item.icon }}
          contentFit="cover"
          style={styles.image}
        />
        <LinearGradient
          colors={["transparent", "black"]}
          style={styles.gradiente}
        />
        <Text style={styles.text}>{item.title}</Text>
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
    marginRight: 20,
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
