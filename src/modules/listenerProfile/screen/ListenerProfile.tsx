// Expo

import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

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
import TracksList from "@/modules/main/components/TracksList";
import { HandleShowListenerOptions } from "@/modules/core/constants/handles";
import { dataSongs } from "@/constants/data";
import { HeartIcon } from "@/modules/core/components/Icons";
import { generateTrackListId } from "@/modules/core/utils/miscellaneous";
import HeaderProfiles from "@/modules/core/components/HeaderProfiles";
import LargeIconButton from "@/modules/core/components/LargeIconButton";

// Definitions

// Components

// Props

// Api

export default function ListenerProfile() {
  const { user } = useAuth();
  const { theme } = useTheme();
  const styles = createStyles(themesText[theme], themesLine[theme]);
  const { t } = useTranslation();

  return (
    <View>
      {/* Header */}
      <HeaderProfiles handleDotsButton={HandleShowListenerOptions} />

      {/* Stats and Name */}
      <View style={{ alignItems: "center" }}>
        <View style={styles.starts}>
          <Text style={styles.text_name}>{user.username}</Text>
          {/* Stats */}
          <View style={styles.starts_stats}>
            {/* Followers */}
            <View style={styles.stats_number_container}>
              <Text style={styles.text_xl}>999</Text>
              <Text style={styles.text}>{t("profile.followers")}</Text>
            </View>
            {/* Likes */}
            <View style={styles.stats_number_container}>
              <Text style={styles.text_xl}>999</Text>
              <Text style={styles.text}>{t("profile.likes")}</Text>
            </View>
            {/* Playlist */}
            <View style={styles.stats_number_container}>
              <Text style={styles.text_xl}>99</Text>
              <Text style={styles.text}>{t("profile.playlists")}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Buttons */}
      <View style={{ margin: 20, gap: 10 }}>
        <LargeIconButton
          onPress={() => console.log("xd")}
          icon={
            <HeartIcon
              width={20}
              height={20}
              fill={colors.purple}
              strokeWidth={0}
            />
          }
          text={t("profile.liked_songs")}
        />
        <LargeIconButton
          onPress={() => console.log("xd")}
          icon={
            <HeartIcon
              width={20}
              height={20}
              fill={colors.purple}
              strokeWidth={0}
            />
          }
          text={t("profile.liked_playlists")}
        />
        <LargeIconButton
          onPress={() => console.log("xd")}
          icon={
            <HeartIcon
              width={20}
              height={20}
              fill={colors.purple}
              strokeWidth={0}
            />
          }
          text={t("profile.saved_albums")}
        />
      </View>

      {/* Top Songs */}
      <Text style={styles.text_xl_margin}>{t("profile.top_songs")}</Text>
      <TracksList
        id={generateTrackListId("listenerTop_list")}
        data={dataSongs}
      />
    </View>
  );
}

const createStyles = (colorText: ThemeText, colorLine: string) =>
  StyleSheet.create({
    starts: {
      width: "80%",
      alignItems: "center",
      gap: 10,
    },
    starts_stats: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-around",
      borderColor: colorLine,
      borderTopWidth: 1,
    },
    stats_number_container: {
      alignItems: "center",
    },
    text_name: {
      color: colorText.primary,
      fontSize: fontSizes.xl,
      fontFamily: "M-PLUS-2-Bold",
    },
    text_xl: {
      color: colorText.secondary,
      fontSize: fontSizes.xl2,
      fontFamily: "M-PLUS-2-Bold",
    },
    text_xl_margin: {
      color: colorText.secondary,
      fontSize: fontSizes.xl,
      fontFamily: "M-PLUS-2-Bold",
      marginHorizontal: 20,
      marginBottom: 10,
    },
    text: {
      color: colorText.secondary,
      fontSize: fontSizes.sm,
      fontFamily: "M-PLUS-2-Regular",
    },
  });
