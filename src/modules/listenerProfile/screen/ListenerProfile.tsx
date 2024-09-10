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
import { useAuth } from "@/modules/core/hooks/useAuth";
import { useTheme } from "@/modules/core/hooks/useTheme";
import { themesText } from "@/constants/themes";
import { fontSizes } from "@/constants/tokens";
import { useTranslation } from "react-i18next";
import { ThemeText } from "@/constants/themesTypes";
import PlaylistCarousel from "@/modules/core/components/PlaylistCarousel";
import TopSongs from "@/modules/main/components/TopSongs";

// Definitions

// Components

// Props

// Api

export default function ListenerProfile() {
  const { user } = useAuth();
  const { theme } = useTheme();
  const { t } = useTranslation();
  const styles = createStyles(themesText[theme]);
  const width = Dimensions.get("window").width;

  const dataPlaylist = [
    {
      id: 1,
      title: "Mamona",
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
      title: "Motivación",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrewB8Ywe7R2rqWM88ZN-e42mtqjwwZdursw&s",
    },
    {
      id: 4,
      title: "Motivación",
      image:
        "https://www.premadepixels.com/wp-content/uploads/2022/03/Anterior-Album-Cover-PP1.jpg",
    },
    {
      id: 5,
      title: "Motivación",
      image:
        "https://cdn8.openculture.com/2020/01/13215036/ju-art_record_covers-cover_03430-e1578983028736.jpg",
    },
    {
      id: 6,
      title: "Motivación",
      image:
        "https://people.com/thmb/_6-x9pNd5xMw3WJ6luN9YIdNmwg=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/taylor-swift-albums-3-5831d0787fb94e94b56b89cd1d203689.jpg",
    },
  ];

  const dataSongs = [
    {
      id: 1,
      title: "Cancion 1",
      album: "Artista 1",
      image:
        "https://www.billboard.com/wp-content/uploads/media/tyler-the-creator-igor-album-art-2019-billboard-embed.jpg?w=600",
    },
    {
      id: 2,
      title: "Cancion 2",
      album: "Artista 2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhF3_2_mVdY5B9Tgh96dj3iJ_r66xhP0di7g&s",
    },
    {
      id: 3,
      title: "Cancion 3",
      album: "Artista 3",
      image:
        "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/04/18/USAT/73369581007-001-taylor-swift-2006.jpeg?width=700&height=700&fit=crop&format=pjpg&auto=webp",
    },
    {
      id: 4,
      title: "Cancion 4",
      album: "Artista 4",
      image:
        "https://design-assets.adobeprojectm.com/content/download/express/public/urn:aaid:sc:VA6C2:7c3b1fb9-cb85-556e-bc39-b03fc1648116/component?assetType=TEMPLATE&etag=504d5d0336ae43219f94cf4659869a24&revision=c96797a5-5486-4e7c-9413-01b6ab631f29&component_id=2935aeda-9179-4584-902d-4f16d2cbff55",
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

        <View style={[styles.header_icon, { left: width / 2 - 75 }]}>
          <Image
            source={{ uri: user?.icon }}
            style={{
              width: 145,
              height: 145,
              borderRadius: 100,
            }}
          />
        </View>

        {/* Options */}
        <Pressable
          onPress={() => alert("options")}
          style={{ position: "absolute", bottom: 10, right: 10 }}
        >
          <Text style={{ color: "white" }}>Options</Text>
        </Pressable>
      </View>

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
      <View style={{ marginVertical: 20 }}>
        <PlaylistCarousel data={dataPlaylist} />
      </View>

      {/* Top Songs */}
      <Text style={styles.text_xl_margin}>{t("profile.top_songs")}</Text>
      <TopSongs data={dataSongs} />
    </View>
  );
}

const createStyles = (colorText: ThemeText) =>
  StyleSheet.create({
    header: {
      position: "relative",
      marginBottom: 50,
      height: 200,
    },
    header_icon: {
      position: "absolute",
      backgroundColor: "#fff",
      width: 150,
      height: 150,
      borderRadius: 100,
      top: 90,
      justifyContent: "center",
      alignItems: "center",
      shadowColor: "#000",
      shadowRadius: 10,
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 5 },
      elevation: 10,
    },
    starts: {
      width: "80%",
      alignItems: "center",
      gap: 5,
    },
    starts_stats: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-around",
      paddingTop: 10,
      borderColor: "#00000011",
      borderTopWidth: 2,
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
      color: colorText.primary,
      fontSize: fontSizes.xl,
      fontWeight: "bold",
      marginHorizontal: 10,
    },
    text: {
      color: colorText.secondary,
      fontSize: fontSizes.sm,
      fontFamily: "M-PLUS-2-Regular",
    },
  });
