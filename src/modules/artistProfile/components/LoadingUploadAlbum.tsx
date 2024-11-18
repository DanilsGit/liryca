// Expo

// React

// React Native
import { themesBackground, themesText } from "@/constants/themes";
import { ThemeBackground, ThemeText } from "@/constants/themesTypes";
import { colors, fontSizes } from "@/constants/tokens";
import { useTheme } from "@/modules/core/hooks/useTheme";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

// Hooks

// Definitions

// Components

// Props

// Api

export default function LoadingUploadAlbum() {
  const { theme } = useTheme();
  const styles = createStyles(themesText[theme], themesBackground[theme]);
  return (
    <View style={styles.container}>
      <Text style={styles.text_1}>Tu álbum se está subiendo</Text>
      <Text style={styles.text_2}>Por favor, espera</Text>
      <ActivityIndicator size="large" color={colors.purple} />
    </View>
  );
}

const createStyles = (colorText: ThemeText, colorBackground: ThemeBackground) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorBackground.top,
      justifyContent: "center",
      alignItems: "center",
      gap: 20,
    },
    text_1: {
      color: colorText.primary,
      fontSize: fontSizes.md,
      fontFamily: "M-PLUS-2-Regular",
    },
    text_2: {
      color: colorText.primary,
      fontSize: fontSizes.sm,
      fontFamily: "M-PLUS-2-Regular",
    },
  });
