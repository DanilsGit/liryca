// Expo

// React

// React Native
import { Dimensions, Text, View, Image, StyleSheet } from "react-native";
import { Data } from "../lib/types";
import { LinearGradient } from "expo-linear-gradient";
import { fontSizes } from "../../../constants/tokens";

// Hooks

// Definitions

// Components

// Props
interface Props {
  item: Data;
  index: number;
}

export const PlaylistCover = ({ item, index }: Props) => {
  const width_d = Dimensions.get("window").width;
  const width = width_d / 2.5;
  return (
    <View key={item.id} style={[styles.container, { width: width }]}>
      <Image
        source={{ uri: item.image }}
        width={width}
        height={200}
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
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: fontSizes.md,
  },
  container: {
    borderRadius: 10,
    height: 200,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  gradiente: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,
    borderRadius: 10,
  },
});
