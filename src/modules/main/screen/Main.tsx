// Expo

// React

// React Native
import { StyleSheet, Text, View } from "react-native";
// Hooks
import { useTheme } from "@/modules/core/hooks/useTheme";
import { useTranslation } from "react-i18next";

// Definitions
import { themesText } from "@/constants/themes";
import { colors, fontSizes } from "@/constants/tokens";

// Components
import Header from "@m/main/components/Header";
import PlaylistCarousel from "@m/core/components/PlaylistCarousel";
import ArtistCarousel from "@m/main/components/ArtistCarousel";
import HiText from "@m/main/components/HiText";
import { ThemeText } from "@/constants/themesTypes";
import TracksList from "@/modules/main/components/TracksList";
import { dataArtist, dataSongs } from "@/constants/data";
import { generateTrackListId } from "@/modules/core/utils/miscellaneous";
import { useAuth } from "@/modules/auth/hooks/useAuth";
import { Redirect } from "expo-router";
import { useMainScreen } from "@/modules/main/hooks/useMainScreen";

export default function Main() {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const styles = createStyles(themesText[theme]);
  const { user } = useAuth();
  const { albums } = useMainScreen();

  if (user?.role === "artist") return <Redirect href="/artistProfile" />;

  return (
    <View style={{ gap: 30 }}>
      <Header />
      <View style={{ gap: 10 }}>
        <HiText style={styles.title_text_xl2} />
      </View>
      <View style={{ gap: 15 }}>
        <ArtistCarousel data={dataArtist} />
      </View>
      <View style={{ gap: 15 }}>
        <Text style={styles.title_text}>Albumes populares</Text>
        <PlaylistCarousel data={albums} />
      </View>
      <View style={{ gap: 15 }}>
        <Text style={styles.title_text}>{t("main.top_songs")}</Text>
        <TracksList id={generateTrackListId("main_list")} data={dataSongs} />
      </View>
    </View>
  );
}

const createStyles = (colorText: ThemeText) =>
  StyleSheet.create({
    title_text: {
      paddingHorizontal: 10,
      fontFamily: "M-PLUS-2-Bold",
      color: colorText.primary,
      fontSize: fontSizes.xl,
    },
    title_text_xl2: {
      paddingHorizontal: 10,
      fontFamily: "M-PLUS-2-Bold",
      color: colors.light_pink,
      fontSize: fontSizes.xl2,
      letterSpacing: 0,
    },
  });
