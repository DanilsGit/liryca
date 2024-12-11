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
import ArtistCarousel from "@m/main/components/ArtistCarousel";
import HiText from "@m/main/components/HiText";
import { ThemeText } from "@/constants/themesTypes";
import TracksList from "@/modules/main/components/TracksList";
import { generateTrackListId } from "@/modules/core/utils/miscellaneous";
import { useAuth } from "@/modules/auth/hooks/useAuth";
import { Redirect } from "expo-router";
import { useMainScreen } from "@/modules/main/hooks/useMainScreen";
import AlbumCarousel from "@/modules/album/components/AlbumCarousel";
import ScreenLoading from "@/modules/core/components/ScreenLoading";

export default function Main() {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const styles = createStyles(themesText[theme]);
  const { user } = useAuth();
  const {
    albumsTrending,
    loading,
    topArtist,
    followedArtist,
    albumCountry,
    tracksCountry,
    tracksTrending,
  } = useMainScreen();

  if (!user) return <Redirect href="(auth)" />;
  if (user?.role === "artist") return <Redirect href="/artistProfile" />;

  if (loading) return <ScreenLoading />;

  return (
    <View style={{ gap: 30 }}>
      <Header />
      <View style={{ gap: 10 }}>
        <HiText style={styles.title_text_xl2} />
      </View>
      {followedArtist.length > 0 && (
        <View style={{ gap: 15 }}>
          <Text style={styles.title_text}>{t("main.follow_artist")}</Text>
          <ArtistCarousel data={followedArtist} />
        </View>
      )}
      <View style={{ gap: 15 }}>
        <Text style={styles.title_text}>{t("main.trend")}</Text>
        <ArtistCarousel data={topArtist} />
      </View>
      <View style={{ gap: 15 }}>
        <Text style={styles.title_text}>{t("main.popular_albums")}</Text>
        <View style={{ marginHorizontal: 10 }}>
          <AlbumCarousel data={albumsTrending} />
        </View>
      </View>
      <View style={{ gap: 15 }}>
        <Text style={styles.title_text}>{t("main.country_albums")}</Text>
        <View style={{ marginHorizontal: 10 }}>
          <AlbumCarousel data={albumCountry} />
        </View>
      </View>
      <View style={{ gap: 15 }}>
        <Text style={styles.title_text}>{t("main.top_songs")}</Text>
        <View style={{ marginHorizontal: 5 }}>
          <TracksList
            id={generateTrackListId(
              "main_trending",
              tracksTrending.length.toString(),
            )}
            data={tracksTrending}
          />
        </View>
      </View>

      <View style={{ gap: 15 }}>
        <Text style={styles.title_text}>{t("main.trend_zone")}</Text>
        <View style={{ marginHorizontal: 5 }}>
          <TracksList
            id={generateTrackListId(
              "main_country",
              tracksCountry.length.toString(),
            )}
            data={tracksCountry}
          />
        </View>
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
