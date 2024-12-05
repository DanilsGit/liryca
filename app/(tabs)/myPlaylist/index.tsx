// Expo

// React

// React Native
import { themesText } from "@/constants/themes";
import { ThemeText } from "@/constants/themesTypes";
import { fontSizes } from "@/constants/tokens";
import { AddSquareIcon } from "@/modules/core/components/Icons";
import LargeIconButton from "@/modules/core/components/LargeIconButton";
import PlaylistCarousel from "@/modules/core/components/PlaylistCarousel";
import Screen from "@/modules/core/components/Screen";
import ScreenLoading from "@/modules/core/components/ScreenLoading";
import { useTheme } from "@/modules/core/hooks/useTheme";
import LoadingPlaylist from "@/modules/playlist/components/LoadingPlaylist";
import { usePlaylistAndAlbums } from "@/modules/playlist/hooks/usePlaylistAndAlbum";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

// Hooks

// Definitions

// Components

// Props

// Api

export default function MyPlaylist() {
  const { theme } = useTheme();
  const styles = createStyles(themesText[theme]);

  const {
    myPlaylist,
    savedPlaylist,
    sharedPlaylist,
    loadingGetPlaylist,
    loadingCreating,
    handleCreatePlaylist,
  } = usePlaylistAndAlbums();

  if (loadingGetPlaylist) return <ScreenLoading />;

  return (
    <Screen>
      <View style={{ padding: 10, gap: 20 }}>
        <Text style={styles.text_title}>Your playlist and albums</Text>
        <View style={{ gap: 10 }}>
          <Text style={styles.text_subTitle}>Add a new creation</Text>
          <LargeIconButton
            icon={<AddSquareIcon width={20} height={20} stroke="#000" />}
            text="Create a new playlist"
            onPress={() => handleCreatePlaylist()}
          />
        </View>
        <View style={{ gap: 10 }}>
          <Text style={styles.text_subTitle}>Your creations</Text>
          <View style={{ flexDirection: "row" }}>
            {loadingCreating && <LoadingPlaylist />}
            <PlaylistCarousel data={myPlaylist} />
          </View>
        </View>
        <View style={{ gap: 10 }}>
          <Text style={styles.text_subTitle}>Playlist liked</Text>
          <PlaylistCarousel data={savedPlaylist} />
        </View>
        <View style={{ gap: 10 }}>
          <Text style={styles.text_subTitle}>Playlist in group</Text>
          <PlaylistCarousel data={sharedPlaylist} />
        </View>
      </View>
    </Screen>
  );
}

const createStyles = (text: ThemeText) =>
  StyleSheet.create({
    text_title: {
      color: text.primary,
      fontSize: fontSizes.xl2,
      fontFamily: "M-PLUS-2-Bold",
    },
    text_subTitle: {
      color: text.primary,
      fontSize: fontSizes.xl,
      fontFamily: "M-PLUS-2-Bold",
    },
  });
