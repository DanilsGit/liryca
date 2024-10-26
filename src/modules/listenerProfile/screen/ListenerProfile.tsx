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
import { HandleShowListenerOptions } from "@/modules/core/constants/handles";
import DotsButton from "@/modules/core/components/DotsButton";
import { dataPlaylist, dataSongs } from "@/constants/data";

// Definitions

// Components

// Props

// Api

export default function ListenerProfile() {
  const { user, logout } = useAuth();
  const { theme } = useTheme();
  const styles = createStyles(themesText[theme], themesLine[theme]);
  const { t } = useTranslation();
  const width = Dimensions.get("window").width;

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
        <View style={{ position: "absolute", bottom: 10, right: 10 }}>
          <DotsButton action={HandleShowListenerOptions} />
        </View>
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
