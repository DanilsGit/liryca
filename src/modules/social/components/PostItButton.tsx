// Expo

// React

// React Native
import { colors, fontSizes } from "@/constants/tokens";
import { Pressable, StyleSheet, Text, View } from "react-native";

// Hooks

// Definitions

// Components

// Props
interface Props {
  onPress: () => void;
}
// Api

export default function PostItButton({ onPress }: Props) {
  const styles = createStyles();
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>Publicar</Text>
      </View>
    </Pressable>
  );
}

const createStyles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.purple,
      padding: 5,
      paddingHorizontal: 15,
      borderRadius: 20,
    },
    text: {
      color: colors.white,
      fontFamily: "M-PLUS-2-Bold",
      width: 80,
      textAlign: "center",
      fontSize: fontSizes.lg,
    },
  });
