// Expo
import * as SecureStorage from "expo-secure-store";
// React

// React Native
import { themesText } from "@/constants/themes";
import { Themes, ThemeText } from "@/constants/themesTypes";
import { fontSizes } from "@/constants/tokens";
import Screen from "@/modules/core/components/Screen";
import { useTheme } from "@/modules/core/hooks/useTheme";
import { useRouter } from "expo-router";
import { useTranslation } from "react-i18next";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { SheetManager } from "react-native-actions-sheet";
import { useMyLikedTracks } from "@/modules/core/hooks/useMyLikedTracks";
import ScreenLoading from "@/modules/core/components/ScreenLoading";
import TrackIndexList from "@/modules/album/components/TrackIndexList";
import TracksList from "@/modules/main/components/TracksList";

// Hooks

// Definitions
// Components

// Props

// Api

export default function MyLikedTracks() {
  const { theme } = useTheme();
  const styles = createStyles(themesText[theme]);
  const { tracks, loading } = useMyLikedTracks();

  if (loading) return <ScreenLoading />;

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.text_title}>Canciones que te gustan</Text>
        <TracksList data={tracks} id="myLiked" />
      </View>
    </Screen>
  );
}

const createStyles = (colorText: ThemeText) =>
  StyleSheet.create({
    container: {
      flex: 1,
      margin: 10,
      gap: 20,
    },
    text_title: {
      fontSize: fontSizes.xl,
      color: colorText.primary,
      fontFamily: "M-PLUS-2-Bold",
    },
    button: {
      padding: 15,
      borderBottomWidth: 2,
      borderBottomColor: colorText.secondary,
    },
    text: {
      fontSize: fontSizes.md,
      color: colorText.secondary,
      fontFamily: "M-PLUS-1p-Regular",
    },
  });
