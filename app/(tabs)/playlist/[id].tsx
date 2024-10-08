// Expo

// React

// React Native
import { themesText } from "@/constants/themes";
import { ThemeText } from "@/constants/themesTypes";
import Screen from "@/modules/core/components/Screen";
import { useTheme } from "@/modules/core/hooks/useTheme";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

// Hooks

// Definitions

// Components

// Props

// Api

export default function PlaylistScreen() {
  const { id } = useLocalSearchParams();
  const { theme } = useTheme();
  const themeText = themesText[theme];
  const styles = createStyles(themeText);
  return (
    <Screen>
      <View>
        <Text style={styles.text}>Playlist {id}</Text>
      </View>
    </Screen>
  );
}

const createStyles = (colorText: ThemeText) =>
  StyleSheet.create({
    text: {
      color: colorText.primary,
    },
  });
