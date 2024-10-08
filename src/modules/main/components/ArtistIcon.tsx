// Expo

// React

// React Native
import { Dimensions, Image, StyleSheet } from "react-native";
import { DataArtistCarousel } from "../lib/types";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "@/constants/tokens";
import { Link } from "expo-router";

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
  const width = width_d / 4;
  const styles = createStyles(width);

  return (
    <LinearGradient
      key={item.id}
      style={styles.container}
      colors={[colors.black, colors.pink]}
    >
      <Link href={`/artistPublicProfile/${item.id}`} style={styles.link} />
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

const createStyles = (width: number) =>
  StyleSheet.create({
    container: {
      backgroundColor: "red",
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: 10,
      borderRadius: 100,
      width: width + 5,
      height: width + 5,
      position: "relative",
    },
    link: {
      backgroundColor: "transparent",
      width: width + 5,
      height: width + 5,
      position: "absolute",
      borderRadius: 100,
      zIndex: 1,
    },
  });
