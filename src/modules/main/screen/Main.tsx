// Expo

// React

// React Native
import { StyleSheet, Text, View } from "react-native";
// Hooks
import { useTheme } from "@m/core/hooks/useTheme";
import { useTranslation } from "react-i18next";

// Definitions
import { themesText } from "@/constants/themes";
import { fontSizes } from "@/constants/tokens";

// Components
import PlaylistCarousel from "@m/main/components/PlaylistCarousel";
import ArtistCarousel from "@m/main/components/ArtistCarousel";
import TopSongs from "@m/main/components/TopSongs";
import HiText from "@m/main/components/HiText";
import { Link } from "expo-router";

export default function Main() {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const themeText = themesText[theme];

  const dataPlaylist = [
    {
      id: 1,
      title: "For girls",
      image:
        "https://cdns-images.dzcdn.net/images/cover/967ac8605268db88a1e597394115365d/1900x1900-000000-80-0-0.jpg",
    },
    {
      id: 2,
      title: "Motivación extrema brutal",
      image:
        "https://imgs.search.brave.com/hUWULsSUWd_TKSEVBYTMGVDsSU218E8ssqvkkbS4Srs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9kb3dubG9h/ZHMvNTdmNTVkNjIt/ZDhmMC00MzE3LTlh/MDEtY2FlYzc0NGM1/YjdiXzQ1MC5qcGVn",
    },
    {
      id: 3,
      title: "Motivación",
      image:
        "https://imgs.search.brave.com/fZuAdK24eco_ewJDh8fdy81YkfAmc6U0zHp8FUWz7Jk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMWNz/YXJrejhvYmU5dS5j/bG91ZGZyb250Lm5l/dC9wb3N0ZXJwcmV2/aWV3cy9yZWQtJi1v/cmFuZ2UtYWxidW0t/Y292ZXItZGVzaWdu/LXRlbXBsYXRlLTIy/YTBkNWRlOTlkNjU5/MmFjMmM4YTdjOTgx/YzEyM2Y4LmpwZz90/cz0xNzI0OTk5NDI1",
    },
    {
      id: 4,
      title: "Motivación",
      image:
        "https://imgs.search.brave.com/fZuAdK24eco_ewJDh8fdy81YkfAmc6U0zHp8FUWz7Jk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMWNz/YXJrejhvYmU5dS5j/bG91ZGZyb250Lm5l/dC9wb3N0ZXJwcmV2/aWV3cy9yZWQtJi1v/cmFuZ2UtYWxidW0t/Y292ZXItZGVzaWdu/LXRlbXBsYXRlLTIy/YTBkNWRlOTlkNjU5/MmFjMmM4YTdjOTgx/YzEyM2Y4LmpwZz90/cz0xNzI0OTk5NDI1",
    },
    {
      id: 5,
      title: "Motivación",
      image:
        "https://imgs.search.brave.com/fZuAdK24eco_ewJDh8fdy81YkfAmc6U0zHp8FUWz7Jk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMWNz/YXJrejhvYmU5dS5j/bG91ZGZyb250Lm5l/dC9wb3N0ZXJwcmV2/aWV3cy9yZWQtJi1v/cmFuZ2UtYWxidW0t/Y292ZXItZGVzaWdu/LXRlbXBsYXRlLTIy/YTBkNWRlOTlkNjU5/MmFjMmM4YTdjOTgx/YzEyM2Y4LmpwZz90/cz0xNzI0OTk5NDI1",
    },
    {
      id: 6,
      title: "Motivación",
      image:
        "https://imgs.search.brave.com/fZuAdK24eco_ewJDh8fdy81YkfAmc6U0zHp8FUWz7Jk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMWNz/YXJrejhvYmU5dS5j/bG91ZGZyb250Lm5l/dC9wb3N0ZXJwcmV2/aWV3cy9yZWQtJi1v/cmFuZ2UtYWxidW0t/Y292ZXItZGVzaWdu/LXRlbXBsYXRlLTIy/YTBkNWRlOTlkNjU5/MmFjMmM4YTdjOTgx/YzEyM2Y4LmpwZz90/cz0xNzI0OTk5NDI1",
    },
  ];

  const dataArtist = [
    {
      id: 1,
      image:
        "https://imgs.search.brave.com/UHHkHar9E432pXtQXSpKmTMjZDl0dU7lLAzhrwqbsxY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sYXN0/Zm0uZnJlZXRscy5m/YXN0bHkubmV0L2kv/dS9hdmF0YXIxNzBz/LzIyNTkyMWY5ZTY4/NGI0ODA0YjQ3ZGJm/MjdkM2MzZmZh",
    },
    {
      id: 2,
      image:
        "https://imgs.search.brave.com/w-WKBymTu-iwhTTBj2JOewo5WznKjkuqEz5JoT7YfBU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jaGFy/dHMtc3RhdGljLmJp/bGxib2FyZC5jb20v/aW1nLzE5OTgvMTAv/YnJpdG5leS1zcGVh/cnMtOG5sLTM0NHgz/NDQuanBn",
    },
    {
      id: 3,
      image:
        "https://imgs.search.brave.com/7_aEuQ-uq6zJCt9k8j_TKUYiA-bVT0aQSufk40vHDaY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sYXN0/Zm0uZnJlZXRscy5m/YXN0bHkubmV0L2kv/dS9hdmF0YXIxNzBz/LzJmNTg4OTAyYWY1/OTg5ZmE5NDk4YmNj/MzkwNTY1YzFk",
    },
    {
      id: 4,
      image:
        "https://imgs.search.brave.com/MjPoLKFq7of6lFg_atPpxPY3xCGLb0tk5B85yRRBKqE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzhlL2Zj/L2Q3LzhlZmNkNzMw/MmU0MWE2MjZiYmNj/YzZmZmE0MWE1MmNk/LmpwZw",
    },
    {
      id: 5,
      image:
        "https://imgs.search.brave.com/OiCkBUVt1zO9jzLVN7wGpt3kZXp2y3P1v9pAhWh1jPk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sYXN0/Zm0uZnJlZXRscy5m/YXN0bHkubmV0L2kv/dS8zMDB4MzAwLzgy/ZmI2YWM4NTQ5N2Mz/ZThjYTlkODRjY2My/Y2I0Y2MxLmpwZw",
    },
  ];

  return (
    <View style={{ gap: 10 }}>
      <HiText
        style={[
          { color: themeText.secondary, fontSize: fontSizes.xl2 },
          styles.title_text,
        ]}
      />
      <Link href={"/listenerProfile"}>Search</Link>
      <Text
        style={[
          styles.title_text,
          { color: themeText.secondary, fontSize: fontSizes.xl },
        ]}
      >
        {t("main.playlist")}
      </Text>
      <PlaylistCarousel data={dataPlaylist} />
      <Text
        style={[
          styles.title_text,
          { color: themeText.secondary, fontSize: fontSizes.xl },
        ]}
      >
        {t("main.artist")}
      </Text>
      <ArtistCarousel data={dataArtist} />
      <Text
        style={[
          styles.title_text,
          { color: themeText.secondary, fontSize: fontSizes.xl },
        ]}
      >
        {t("main.top_songs")}
      </Text>
      <TopSongs />
    </View>
  );
}

const styles = StyleSheet.create({
  title_text: {
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
});
