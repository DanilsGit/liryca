// Expo

// React

// React Native
import { themesText } from "@/constants/themes";
import { ThemeText } from "@/constants/themesTypes";
import { colors, fontSizes } from "@/constants/tokens";
import DotsButton from "@/modules/core/components/DotsButton";
import { useTheme } from "@/modules/core/hooks/useTheme";
import { formatMillionsToM_HundredsToK } from "@/modules/core/utils/miscellaneous";
import { Image, ImageBackground } from "expo-image";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import MusicArtistPublicProfile from "../components/MusicArtistPublicProfile";
import PostList from "@/modules/core/components/PostList";
import { dataPost } from "@/constants/data";

// Hooks

// Definitions

// Components

// Props
interface Props {
  artist: {
    id: string;
    banner: string;
    icon: string;
    to_follow: boolean;
    followers: string;
    likes: number;
    name: string;
  };
}
type filters = "music" | "posts";

// Api

export default function ArtistPublicProfile({ artist }: Props) {
  const { theme } = useTheme();
  const styles = createStyles(themesText[theme]);
  const width = Dimensions.get("window").width;
  const { t } = useTranslation();
  const [filter, setFilter] = useState<filters>("music");

  return (
    <View>
      {/* Header */}
      <View style={styles.header}>
        <ImageBackground
          source={{ uri: artist.banner }}
          style={{ width: "100%", height: "100%" }}
        >
          <View
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.7)",
            }}
          ></View>
        </ImageBackground>

        <View style={styles.header_title_container}>
          <Text style={styles.header_title_text}>{artist.name}</Text>
        </View>

        <View style={[styles.header_icon, { left: width / 2 - 66 }]}>
          <Image source={{ uri: artist.icon }} style={styles.header_icon_img} />
        </View>

        {/* Options */}
        <View style={{ position: "absolute", bottom: 10, right: 10 }}>
          <DotsButton action={() => {}} />
        </View>
      </View>

      {/* Stats and follow */}
      <View style={styles.stats_follow_container}>
        <View style={styles.stats_follow}>
          <Text style={styles.stats_follow_text}>
            {artist.to_follow
              ? t("artist_public_profile.following")
              : t("artist_public_profile.follow")}
          </Text>
        </View>
        <View style={styles.stats_followers_conainer}>
          <Text style={styles.stats_followers_text}>{artist.followers}</Text>
          <Text style={styles.stats_followers_subtext}>
            {t("artist_public_profile.followers")}
          </Text>
        </View>
        <View style={styles.stats_followers_conainer}>
          <Text style={styles.stats_followers_text}>
            {formatMillionsToM_HundredsToK(artist.likes)}
          </Text>
          <Text style={styles.stats_followers_subtext}>
            {t("artist_public_profile.likes")}
          </Text>
        </View>
      </View>

      {/* Filters */}
      <View style={styles.filters_container}>
        <View
          style={[
            { borderBottomWidth: filter === "music" ? 2 : 0 },
            styles.filters_text_container,
          ]}
        >
          <Pressable onPress={() => setFilter("music")}>
            <Text style={styles.filters_text}>{t("profile.filter_music")}</Text>
          </Pressable>
        </View>
        <View
          style={[
            { borderBottomWidth: filter === "posts" ? 2 : 0 },
            styles.filters_text_container,
          ]}
        >
          <Pressable onPress={() => setFilter("posts")}>
            <Text style={styles.filters_text}>{t("profile.filter_posts")}</Text>
          </Pressable>
        </View>
      </View>

      {/* Music component */}
      {filter === "music" && <MusicArtistPublicProfile id={artist.id} />}

      {/* Posts component */}
      {filter === "posts" && <PostList data={dataPost} />}
    </View>
  );
}

const createStyles = (colorText: ThemeText) =>
  StyleSheet.create({
    header: {
      position: "relative",
      width: "100%",
      height: 200,
    },
    header_title_container: {
      position: "absolute",
      width: "100%",
      alignItems: "center",
      top: 20,
    },
    header_title_text: {
      fontSize: fontSizes.xl2,
      color: colors.white,
      fontFamily: "M-PLUS-2-Bold",
    },
    header_icon: {
      position: "absolute",
      top: 90,
      justifyContent: "center",
      alignItems: "center",
    },
    header_icon_img: {
      width: 120,
      height: 120,
      borderRadius: 100,
    },
    stats_follow_container: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      marginTop: 20,
    },
    stats_follow: {
      borderWidth: 2,
      borderColor: colorText.primary,
      height: 35,
      justifyContent: "center",
      paddingHorizontal: 20,
      borderRadius: 100,
    },
    stats_followers_conainer: {
      alignItems: "center",
      marginHorizontal: 20,
    },
    stats_follow_text: {
      color: colorText.primary,
      fontSize: fontSizes.md,
      fontFamily: "M-PLUS-2-Bold",
    },
    stats_followers_text: {
      color: colorText.primary,
      fontSize: fontSizes.xl3,
      fontFamily: "M-PLUS-2-ExtraBold",
    },
    stats_followers_subtext: {
      color: colorText.secondary,
      fontSize: fontSizes.sm,
      fontFamily: "M-PLUS-2-Regular",
    },
    filters_container: {
      flexDirection: "row",
      justifyContent: "flex-start",
      marginTop: 20,
    },
    filters_text_container: {
      marginHorizontal: 20,
      paddingBottom: 5,
      borderColor: colors.purple,
    },
    filters_text: {
      color: colorText.primary,
      fontSize: fontSizes.md,
      fontFamily: "M-PLUS-2-Bold",
    },
  });
