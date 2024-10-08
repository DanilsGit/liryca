// Expo

// React

// React Native
import { colors, fontSizes } from "@/constants/tokens";
import { StyleSheet, Text, View } from "react-native";

// Hooks

// Definitions

// Components

// Props

// Api

export default function DotsButtom() {
  const styles = createStyles();
  return (
    <View>
      <Text style={styles.text}>...</Text>
    </View>
  );
}

const createStyles = () =>
  StyleSheet.create({
    text: {
      color: colors.light_purple,
      fontSize: fontSizes.xl3,
      fontWeight: "bold",
    },
  });
