// Expo

import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

// React

// React Native

// Hooks
import { useAuth } from "@/modules/auth/hooks/useAuth";
import { useTheme } from "@/modules/core/hooks/useTheme";
import { themesLine, themesText } from "@/constants/themes";
import { fontSizes } from "@/constants/tokens";
import { useTranslation } from "react-i18next";
import { colors } from "@/constants/tokens";
import { ThemeText } from "@/constants/themesTypes";
import PlaylistCarousel from "@/modules/core/components/PlaylistCarousel";
import TracksList from "@/modules/main/components/TracksList";
import { SheetManager } from "react-native-actions-sheet";
import DotsButtom from "@/modules/core/components/DotsButtom";

// Definitions

// Components

// Props

// Api

export default function ListenerProfile() {
  const { user, logout } = useAuth();
  const { theme } = useTheme();
  const { t } = useTranslation();
  const width = Dimensions.get("window").width;
  const styles = createStyles(themesText[theme], themesLine[theme]);

  const dataPlaylist = [
    {
      id: 1,
      title: "Top Lana del Rey",
      image:
        "https://cdns-images.dzcdn.net/images/cover/967ac8605268db88a1e597394115365d/1900x1900-000000-80-0-0.jpg",
    },
    {
      id: 2,
      title: "Motivación extrema brutal",
      image:
        "https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/22.jpg",
    },
    {
      id: 3,
      title: "Tristeza absoluta",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrewB8Ywe7R2rqWM88ZN-e42mtqjwwZdursw&s",
    },
    {
      id: 4,
      title: "Para el gym",
      image:
        "https://www.premadepixels.com/wp-content/uploads/2022/03/Anterior-Album-Cover-PP1.jpg",
    },
    {
      id: 5,
      title: "study",
      image:
        "https://cdn8.openculture.com/2020/01/13215036/ju-art_record_covers-cover_03430-e1578983028736.jpg",
    },
    {
      id: 6,
      title: "Taylor Swift",
      image:
        "https://people.com/thmb/_6-x9pNd5xMw3WJ6luN9YIdNmwg=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/taylor-swift-albums-3-5831d0787fb94e94b56b89cd1d203689.jpg",
    },
  ];

  const dataSongs = [
    {
      id: 1,
      title: "I love lt guy",
      album: "Tyler the creator",
      image:
        "https://www.billboard.com/wp-content/uploads/media/tyler-the-creator-igor-album-art-2019-billboard-embed.jpg?w=600",
      url: "https://example.com/igor",
    },
    {
      id: 2,
      title: "Just white and curly girls",
      album: "Nirvana",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhF3_2_mVdY5B9Tgh96dj3iJ_r66xhP0di7g&s",
      url: "https://example.com/nirvana",
    },
    {
      id: 3,
      title: "Fearless",
      album: "Taylor swift",
      image:
        "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/04/18/USAT/73369581007-001-taylor-swift-2006.jpeg?width=700&height=700&fit=crop&format=pjpg&auto=webp",
      url: "https://example.com/fearless",
    },
    {
      id: 4,
      title: "Time is running out",
      album: "Muse",
      image: "https://i.scdn.co/image/ab67616d0000b273b6d4566db0d12894a1a3b7a2",
      url: "https://example.com/muse",
    },
    {
      id: 5,
      title: "Juno",
      album: "Sabrina Carpenter",
      image:
        "https://images.genius.com/6ecbc2e64e62b35ee2fadf8532056f72.1000x1000x1.png",
      url: "https://example.com/juno",
    },
    {
      id: 6,
      title: "Joyride",
      album: "Kesha",
      image:
        "https://upload.wikimedia.org/wikipedia/en/9/98/Kesha_%E2%80%93_Joyride_%28official_single_cover%29.png",
      url: "https://example.com/joyride",
    },
  ];

  return (
    <View>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: user?.banner }}
          style={{ width: width, height: "100%" }}
        />

        <View style={[styles.header_icon, { left: width / 2 - 66 }]}>
          <Image source={{ uri: user?.icon }} style={styles.header_icon_img} />
        </View>

        {/* Options */}
        <Pressable
          onPress={() =>
            SheetManager.show("listener-options-sheet", {
              payload: { action: () => alert("Hello World") },
            })
          }
          style={{ position: "absolute", bottom: 10, right: 10 }}
        >
          <DotsButtom />
        </Pressable>
      </View>

      {/* Actions */}

      {/* Stats and Name */}
      <View style={{ alignItems: "center" }}>
        <View style={styles.starts}>
          <Text style={styles.text_xl}>{user?.name}</Text>
          {/* Stats */}
          <View style={styles.starts_stats}>
            {/* Followers */}
            <View style={styles.stats_number_container}>
              <Text style={styles.text_xl}>{user?.followers}</Text>
              <Text style={styles.text}>{t("profile.followers")}</Text>
            </View>
            {/* Likes */}
            <View style={styles.stats_number_container}>
              <Text style={styles.text_xl}>{user?.liked}</Text>
              <Text style={styles.text}>{t("profile.likes")}</Text>
            </View>
            {/* Playlist */}
            <View style={styles.stats_number_container}>
              <Text style={styles.text_xl}>{user?.playlist}</Text>
              <Text style={styles.text}>{t("profile.playlists")}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Playlists */}
      <View style={{ marginVertical: 30 }}>
        <PlaylistCarousel data={dataPlaylist} />
      </View>

      {/* Top Songs */}
      <Text style={styles.text_xl_margin}>{t("profile.top_songs")}</Text>
      <TracksList data={dataSongs} />

      {/* logout */}
      <Pressable onPress={logout}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
}

const createStyles = (colorText: ThemeText, colorLine: string) =>
  StyleSheet.create({
    header: {
      position: "relative",
      marginBottom: 75,
      height: 150,
    },
    header_icon: {
      position: "absolute",
      backgroundColor: colors.light_pink,
      width: 135,
      height: 135,
      borderRadius: 100,
      top: 80,
      justifyContent: "center",
      alignItems: "center",
      shadowColor: colors.purple,
      shadowRadius: 30,
      shadowOpacity: 0.1,
      shadowOffset: { width: 5, height: 5 },
      elevation: 10,
    },
    header_icon_img: {
      width: 130,
      height: 130,
      borderRadius: 100,
    },
    starts: {
      width: "80%",
      alignItems: "center",
      gap: 10,
    },
    starts_stats: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-around",
      paddingTop: 10,
      borderColor: colorLine,
      borderTopWidth: 1,
    },
    stats_number_container: {
      alignItems: "center",
    },
    text_xl: {
      color: colorText.primary,
      fontSize: fontSizes.xl,
      fontWeight: "bold",
    },
    text_xl_margin: {
      color: colorText.secondary,
      fontSize: fontSizes.xl,
      fontWeight: "bold",
      marginHorizontal: 20,
      marginBottom: 10,
    },
    text: {
      color: colorText.secondary,
      fontSize: fontSizes.sm,
      fontFamily: "M-PLUS-2-Regular",
    },
  });
