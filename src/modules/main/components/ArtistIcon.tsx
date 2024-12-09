// Expo

// React

// React Native
import { Dimensions, Image, Pressable, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "@/constants/tokens";
import { Link } from "expo-router";
import { PublicArtist } from "@/modules/core/lib/types";

// Hooks

// Definitions

// Components

// Props
interface Props {
  item: PublicArtist;
  index: number;
  handlePress: (id: string) => void;
}

export const ArtistIcon = ({ item, index, handlePress }: Props) => {
  const width_d = Dimensions.get("window").width;
  const width = width_d / 4;
  const styles = createStyles(width);

  return (
    <Pressable onPress={() => handlePress(item.user_id)}>
      <LinearGradient
        key={item.id}
        style={styles.container}
        colors={[colors.black, colors.pink]}
      >
        <Image
          source={{ uri: item.profile_picture }}
          borderRadius={100}
          width={width}
          height={width}
          resizeMode="cover"
        />
      </LinearGradient>
    </Pressable>
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
  });
