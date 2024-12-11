// Expo

// React

// React Native
import { themesText } from "@/constants/themes";
import { ThemeText } from "@/constants/themesTypes";
import { colors, fontSizes } from "@/constants/tokens";
import { useTheme } from "@/modules/core/hooks/useTheme";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import HeaderImageTitle from "../components/HeaderImageTitle";
import SearchBar from "../components/SearchBar";
import GenresList from "../components/GenresList";
import TracksList from "@/modules/main/components/TracksList";
import { generateTrackListId } from "@/modules/core/utils/miscellaneous";
import UserSearchList from "../components/UserSearchList";
import { useSearch } from "../hooks/useSearch";
import PlaylistCarousel from "@/modules/core/components/PlaylistCarousel";
import AlbumCarousel from "@/modules/album/components/AlbumCarousel";
import { useTranslation } from "react-i18next";

// Hooks

// Definitions

// Components

// Props

// Api
export default function Search() {
  const { theme } = useTheme();
  const styles = createStyles(themesText[theme]);
  const { search, handleSearch, loading, results } = useSearch();
  const { t } = useTranslation();


  return (
    <View style={styles.container}>
      <HeaderImageTitle>
        <Text style={styles.title}>{t("search.title")}</Text>
      </HeaderImageTitle>
      <View style={{ paddingHorizontal: 10 }}>
        <SearchBar search={search} handleSearch={handleSearch} />
      </View>
      {search === "" && (
        <View style={{ paddingHorizontal: 10, gap: 20 }}>
          <Text style={styles.text_title}>{t("search.gender")}</Text>
          <GenresList />
        </View>
      )}
      {loading && search !== "" && (
        <ActivityIndicator size="large" color={colors.extra_light_purple} />
      )}
      {results && (
        <View style={{ paddingHorizontal: 10, gap: 20 }}>
          <View style={{ gap: 10 }}>
            <Text style={styles.text_title}>{t("search.results.songs")}</Text>
            <TracksList
              data={results.songs}
              id={generateTrackListId("search", search)}
            />
          </View>
          <View style={{ gap: 10 }}>
            <Text style={styles.text_title}>{t("search.results.albums")}</Text>
            <AlbumCarousel data={results.albums} />
          </View>
          <View style={{ gap: 10 }}>
            <Text style={styles.text_title}>{t("search.results.playlist")}</Text>
            <PlaylistCarousel data={results.playlists} />
          </View>
          <View style={{ gap: 10 }}>
            <Text style={styles.text_title}>{t("search.results.artist")}</Text>
            <UserSearchList data={results.artists} />
          </View>
          <View style={{ gap: 10 }}>
            <Text style={styles.text_title}>{t("search.results.profile")}</Text>
            <UserSearchList data={results.users} />
          </View>
        </View>
      )}
    </View>
  );
}

const createStyles = (colorText: ThemeText) =>
  StyleSheet.create({
    container: {
      gap: 20,
    },
    text_title: {
      color: colorText.secondary,
      fontSize: fontSizes.xl2,
      fontFamily: "M-PLUS-2-ExtraBold",
    },
    title: {
      fontSize: fontSizes.xl2,
      color: colorText.secondary,
      fontFamily: "M-PLUS-2-ExtraBold"
    },
  });
