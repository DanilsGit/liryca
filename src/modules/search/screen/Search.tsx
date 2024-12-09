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

// Hooks

// Definitions

// Components

// Props

// Api
export default function Search() {
  const { theme } = useTheme();
  const styles = createStyles(themesText[theme]);
  const { search, handleSearch, loading, results } = useSearch();

  return (
    <View style={styles.container}>
      <HeaderImageTitle>
        <Text style={styles.title}>Descubre algo nuevo</Text>
      </HeaderImageTitle>
      <View style={{ paddingHorizontal: 10 }}>
        <SearchBar search={search} handleSearch={handleSearch} />
      </View>
      {search === "" && (
        <View style={{ paddingHorizontal: 10, gap: 20 }}>
          <Text style={styles.text_title}>Explora nuevos géneros</Text>
          <GenresList />
        </View>
      )}
      {loading && search !== "" && (
        <ActivityIndicator size="large" color={colors.extra_light_purple} />
      )}
      {results && (
        <View style={{ paddingHorizontal: 10, gap: 20 }}>
          <View style={{ gap: 10 }}>
            <Text style={styles.text_title}>Canciones</Text>
            <TracksList
              data={results.songs}
              id={generateTrackListId("search", search)}
            />
          </View>
          <View style={{ gap: 10 }}>
            <Text style={styles.text_title}>Albumes</Text>
            <AlbumCarousel data={results.albums} />
          </View>
          <View style={{ gap: 10 }}>
            <Text style={styles.text_title}>Playlists</Text>
            <PlaylistCarousel data={results.playlists} />
          </View>
          <View style={{ gap: 10 }}>
            <Text style={styles.text_title}>Artistas</Text>
            <UserSearchList data={results.artists} />
          </View>
          <View style={{ gap: 10 }}>
            <Text style={styles.text_title}>Perfiles</Text>
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
      fontFamily: "M-PLUS-2-ExtraBold",
    },
  });
