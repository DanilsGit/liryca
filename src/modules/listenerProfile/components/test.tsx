// Expo

import { themesText } from "@/constants/themes";
import { fontSizes } from "@/constants/tokens";
import { useTheme } from "@/modules/core/hooks/useTheme";
import { StyleSheet, Text, View } from "react-native";

// React

// React Native

// Hooks

// Definitions

// Components

// Props

// Api

export default function Name() {
  const { theme } = useTheme();
  const themeText = themesText[theme];
  const styles = createStyles(themeText.primary);
  return (
    <View>
      <Text style={styles.text}>Hola</Text>
    </View>
  );
}

const createStyles = (textColor: string) =>
  StyleSheet.create({
    text: {
      fontSize: fontSizes.md,
      color: textColor,
    },
  });
