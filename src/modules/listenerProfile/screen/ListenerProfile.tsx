// Expo

import { StyleSheet, Text, View } from "react-native";

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
import { dataSongs } from "@/constants/data";
import { HeartIcon } from "@/modules/core/components/Icons";
import {
  formatMillionsToM_HundredsToK,
  generateTrackListId,
} from "@/modules/core/utils/miscellaneous";
import HeaderProfiles from "@/modules/core/components/HeaderProfiles";
import LargeIconButton from "@/modules/core/components/LargeIconButton";
import { useRouter } from "expo-router";
import { usePlayback } from "../hooks/usePlayback";
import { useFollow } from "@/modules/artistPublicProfile/hooks/useFollow";

// Definitions

// Components

// Props

// Api

export default function ListenerProfile() {
  const { user } = useAuth();
  const { theme } = useTheme();
  const styles = createStyles(themesText[theme], themesLine[theme]);
  const { t } = useTranslation();
  const router = useRouter();
  const { playback } = usePlayback();
  const { follows } = useFollow(user.id);

  const handleGoToPlaylists = () => {
    router.navigate("myPlaylist");
  };

  return (
    <View>
      {/* Header */}
      <HeaderProfiles />

      {/* Stats and Name */}
      <View style={{ alignItems: "center" }}>
        <View style={styles.starts}>
          <Text style={styles.text_name}>{user.username}</Text>
          {/* Stats */}
          <View style={styles.starts_stats}>
            {/* Followers */}
            <View style={styles.stats_number_container}>
              <Text style={styles.text_xl}>
                {formatMillionsToM_HundredsToK(follows.count_followers)}
              </Text>
              <Text style={styles.text}>{t("profile.followers")}</Text>
            </View>
            {/* Likes */}
            <View style={styles.stats_number_container}>
              <Text style={styles.text_xl}>
                {formatMillionsToM_HundredsToK(follows.count_following)}
              </Text>
              <Text style={styles.text}>{t("profile.following")}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Buttons */}
      <View style={{ margin: 20, gap: 10 }}>
        <LargeIconButton
          onPress={() => router.navigate("/myLikedTracks")}
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
          onPress={() => handleGoToPlaylists()}
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
      </View>

      {/* Top Songs */}
      {playback.length > 0 && (
        <View>
          <Text style={styles.text_xl_margin}>Tus recientes</Text>
          <View style={{ marginHorizontal: 20 }}>
            <TracksList
              id={generateTrackListId("listenerPlayback_list")}
              data={playback}
            />
          </View>
        </View>
      )}
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
