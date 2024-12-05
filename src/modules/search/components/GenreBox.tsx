// Expo

// React

// React Native
import { colors, fontSizes, genresColors } from "@/constants/tokens";
import { Dimensions, Pressable, StyleSheet, View, Text } from "react-native";

// Hooks

// Definitions

// Components

// Props
interface Props {
  text: string;
}
// Api

export default function GenreBox({ text }: Props) {
  const width = Dimensions.get("window").width;
  const genreColors = Object.values(genresColors);
  const randomColor =
    genreColors[Math.floor(Math.random() * genreColors.length)];
  const styles = createStyles(width, randomColor);
  return (
    <Pressable>
      <View style={styles.container}>
        <Text style={styles.texts}>{text}</Text>
      </View>
    </Pressable>
  );
}

const createStyles = (width: number, bgColor?: string) =>
  StyleSheet.create({
    container: {
      width: width / 2 - 20,
      height: 100,
      padding: 10,
      backgroundColor: bgColor || colors.purple,
      justifyContent: "flex-end",
      alignItems: "flex-start",
      borderRadius: 10,
    },
    texts: {
      color: colors.extra_light_purple,
      fontSize: fontSizes.xl,
      fontFamily: "M-PLUS-2-ExtraBold",
    },
  });
