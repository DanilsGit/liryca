// Expo
import { Link } from "expo-router";

// React

// React Native
import { StyleSheet, Text, View } from "react-native";
// Hooks
import { useTheme } from "@m/core/hooks/useTheme";
import { useTranslation } from "react-i18next";

// Definitions
import { themesText } from "@/constants/themes";
import { colors, fontSizes } from "@/constants/tokens";

// Components
import Header from "@m/main/components/Header";
import PlaylistCarousel from "@m/core/components/PlaylistCarousel";
import ArtistCarousel from "@m/main/components/ArtistCarousel";
import TopSongs from "@m/main/components/TopSongs";
import HiText from "@m/main/components/HiText";
import { ThemeText } from "@/constants/themesTypes";

export default function Main() {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const styles = createStyles(themesText[theme]);

  const dataPlaylist = [
    {
      id: 1,
      title: "For girls",
      image:
        "https://cdns-images.dzcdn.net/images/cover/967ac8605268db88a1e597394115365d/1900x1900-000000-80-0-0.jpg",
    },
    {
      id: 2,
      title: "Motivación extrema",
      image:
        "https://imgs.search.brave.com/hUWULsSUWd_TKSEVBYTMGVDsSU218E8ssqvkkbS4Srs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9kb3dubG9h/ZHMvNTdmNTVkNjIt/ZDhmMC00MzE3LTlh/MDEtY2FlYzc0NGM1/YjdiXzQ1MC5qcGVn",
    },
    {
      id: 3,
      title: "Motivación",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNGVofFKvHcFkiM16u-Gu2gYLJAi_dHZkCAQ&s",
    },
    {
      id: 4,
      title: "Clásicos",
      image:
        "https://img.apmcdn.org/d7541cad306c0066445ba32c484471f299122ca6/uncropped/7a648c-20200911-top-89-cover-songs-03.jpg",
    },
    {
      id: 5,
      title: "Depresión",
      image: "https://i.redd.it/w86hly5tslx71.jpg",
    },
    {
      id: 6,
      title: "Chill",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f7d49262051957.5b11743c7cf40.jpg",
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

  const dataSongs = [
    {
      id: 1,
      title: "I love lt guy",
      album: "Tyler the creator",
      image:
        "https://www.billboard.com/wp-content/uploads/media/tyler-the-creator-igor-album-art-2019-billboard-embed.jpg?w=600",
    },
    {
      id: 2,
      title: "Just white and curly girls",
      album: "Nirvana",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhF3_2_mVdY5B9Tgh96dj3iJ_r66xhP0di7g&s",
    },
    {
      id: 3,
      title: "Fearless",
      album: "Taylor swift",
      image:
        "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/04/18/USAT/73369581007-001-taylor-swift-2006.jpeg?width=700&height=700&fit=crop&format=pjpg&auto=webp",
    },
    {
      id: 4,
      title: "Time is running out",
      album: "Muse",
      image: "https://i.scdn.co/image/ab67616d0000b273b6d4566db0d12894a1a3b7a2",
    },
    {
      id: 5,
      title: "Juno",
      album: "Sabrina Carpenter",
      image:
        "https://images.genius.com/6ecbc2e64e62b35ee2fadf8532056f72.1000x1000x1.png",
    },
    {
      id: 6,
      title: "Joyride",
      album: "Kesha",
      image:
        "https://upload.wikimedia.org/wikipedia/en/9/98/Kesha_%E2%80%93_Joyride_%28official_single_cover%29.png",
    },
  ];

  return (
    <View style={{ gap: 30 }}>
      <Header />
      <View style={{ gap: 10 }}>
        <HiText style={styles.title_text_xl2} />
      </View>
      <View style={{ gap: 15 }}>
        {/*<Text style={styles.title_text}>{t("main.artist")}</Text>*/}
        <ArtistCarousel data={dataArtist} />
      </View>
      <View style={{ gap: 15 }}>
        <Text style={styles.title_text}>{t("main.playlist")}</Text>
        <PlaylistCarousel data={dataPlaylist} />
      </View>
      <View style={{ gap: 15 }}>
        <Text style={styles.title_text}>{t("main.top_songs")}</Text>
        <TopSongs data={dataSongs} />
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
