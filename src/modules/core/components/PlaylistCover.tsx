// Expo

// React

// React Native
import { Dimensions, Text, View, Image, StyleSheet } from "react-native";
import { DataPlaylistCarousel } from "../lib/types";
import { LinearGradient } from "expo-linear-gradient";
import { colors, fontSizes } from "../../../constants/tokens";
import { Link } from "expo-router";

// Hooks

// Definitions

// Components

// Props
interface Props {
  item: DataPlaylistCarousel;
  index: number;
}

export const PlaylistCover = ({ item, index }: Props) => {
  const width_d = Dimensions.get("window").width;
  const width = width_d / 2.5;
  return (
    <View key={item.id} style={[styles.container, { width: width }]}>
      {/* <Link href={`/playlist/${item.id}`} style={styles.link} /> */}
      <Image
        source={{ uri: item.image }}
        width={width}
        height={170}
        borderRadius={10}
        resizeMode="cover"
        style={{ position: "relative" }}
      />
      <LinearGradient
        colors={["transparent", "black"]}
        style={styles.gradiente}
      />
      <Text style={styles.text}>{item.title}</Text>
    </View>
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
  },
  link: {
    backgroundColor: "transparent",
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 1,
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
