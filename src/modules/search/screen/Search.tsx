// Expo

// React

// React Native
import { themesText } from "@/constants/themes";
import { ThemeText } from "@/constants/themesTypes";
import { fontSizes } from "@/constants/tokens";
import { useTheme } from "@/modules/core/hooks/useTheme";
import { StyleSheet, Text, View } from "react-native";
import HeaderImageTitle from "../components/HeaderImageTitle";
import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import GenresList from "../components/GenresList";
import TracksList from "@/modules/main/components/TracksList";
import { dataArtistSearch, dataSongs } from "@/constants/data";
import { generateTrackListId } from "@/modules/core/utils/miscellaneous";
import UserSearchList from "../components/UserSearchList";

// Hooks

// Definitions

// Components

// Props

// Api

const useSearch = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (text: string) => {
    setSearch(text);
  };

  useEffect(() => {
    console.log(search);
  }, [search]);

  return { search, handleSearch };
};

export default function Search() {
  const { theme } = useTheme();
  const styles = createStyles(themesText[theme]);
  const { search, handleSearch } = useSearch();
  return (
    <View style={styles.container}>
      <HeaderImageTitle />
      <View style={{ paddingHorizontal: 10 }}>
        <SearchBar search={search} handleSearch={handleSearch} />
      </View>
      {search === "" && (
        <View style={{ paddingHorizontal: 10, gap: 20 }}>
          <Text style={styles.text_title}>Explora nuevos géneros</Text>
          <GenresList />
        </View>
      )}
      {search !== "" && (
        <View style={{ paddingHorizontal: 10, gap: 20 }}>
          <View style={{ gap: 10 }}>
            <Text style={styles.text_title}>Canciones</Text>
            <TracksList
              data={dataSongs}
              id={generateTrackListId("search", search)}
            />
          </View>
          <View style={{ gap: 10 }}>
            <Text style={styles.text_title}>Artistas</Text>
            <UserSearchList data={dataArtistSearch} />
          </View>
          <View style={{ gap: 10 }}>
            <Text style={styles.text_title}>Perfiles</Text>
            <UserSearchList data={dataArtistSearch} />
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
  });
