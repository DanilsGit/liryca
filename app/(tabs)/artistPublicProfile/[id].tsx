// Expo

import { StyleSheet, Text, View } from "react-native";
import Screen from "@m/core/components/Screen";
import { useLocalSearchParams } from "expo-router";
import { useTheme } from "@/modules/core/hooks/useTheme";
import { themesText } from "@/constants/themes";
import { ThemeText } from "@/constants/themesTypes";

// React

// React Native

// Hooks

// Definitions

// Components

// Props

// Api

export default function ArtistPublicProfileScreen() {
  const { id } = useLocalSearchParams();
  const { theme } = useTheme();
  const themeText = themesText[theme];
  const styles = createStyles(themeText);
  console.log(id);

  return (
    <Screen>
      <View>
        <Text style={styles.text}>Profile artist {id}</Text>
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
