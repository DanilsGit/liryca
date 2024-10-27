// Expo

// React

// React Native
import { dataAlbums, dataSongs } from "@/constants/data";
import { themesText } from "@/constants/themes";
import { ThemeText } from "@/constants/themesTypes";
import { fontSizes } from "@/constants/tokens";
import AlbumList from "@/modules/core/components/AlbumList";
import { useTheme } from "@/modules/core/hooks/useTheme";
import TracksList from "@/modules/main/components/TracksList";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";

// Hooks

// Definitions

// Components

// Props
interface Props {
  id: string;
}
// Api

export default function MusicArtistPublicProfile({ id }: Props) {
  const { theme } = useTheme();
  const styles = createStyles(themesText[theme]);
  const { t } = useTranslation();

  return (
    <View style={styles.music_section}>
      <View style={styles.top_songs_section}>
        <Text style={styles.top_songs_title}>
          {t("artist_public_profile.top_songs")}
        </Text>
        <TracksList data={dataSongs} />
      </View>
      <View style={styles.top_songs_section}>
        <Text style={styles.top_songs_title}>
          {t("artist_public_profile.albums")}
        </Text>
        <AlbumList data={dataAlbums} />
      </View>
    </View>
  );
}

const createStyles = (colorText: ThemeText) =>
  StyleSheet.create({
    music_section: {
      width: "100%",
    },
    top_songs_section: {
      width: "100%",
      marginTop: 20,
    },
    top_songs_title: {
      color: colorText.secondary,
      marginLeft: 20,
      fontSize: fontSizes.xl,
      fontFamily: "M-PLUS-2-Bold",
      marginBottom: 10,
    },
  });
