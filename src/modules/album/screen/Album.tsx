// Expo
import * as SecureStorage from "expo-secure-store";
// React

// React Native
import { colors, fontSizes } from "@/constants/tokens";
import HeaderBackTitleOptions from "@/modules/core/components/HeaderBackTitleOptions";
import LikeButton from "@/modules/core/components/LikeButton";
import ShareButton from "@/modules/core/components/ShareButton";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import TrackIndexList from "../components/TrackIndexList";
import { useTranslation } from "react-i18next";
import { generateTrackListId } from "@/modules/core/utils/miscellaneous";
import { Album as AlbumType } from "@/modules/core/lib/types";
import { Track } from "react-native-track-player";
import { AlbumOptionsAction } from "@/modules/core/components/AlbumOptionsAction";
import { useAuth } from "@/modules/auth/hooks/useAuth";
import LargeIconButton from "@/modules/core/components/LargeIconButton";
import { AddSquareIcon } from "@/modules/core/components/Icons";
import { useRouter } from "expo-router";

// Hooks

// Definitions

// Components
// Props
interface Props {
  data: AlbumType;
  tracks: Track[];
}

// Api

export default function Album({ data, tracks }: Props) {
  const styles = createStyles();
  const { user } = useAuth();
  const { t } = useTranslation();
  const router = useRouter();

  const handleAddTracks = async () => {
    await SecureStorage.setItemAsync("TracksToAlbum", JSON.stringify(data.id));
    router.push(`/tracksToAlbum/${data.id}`);
  };

  return (
    <View style={styles.overlay_container}>
      <HeaderBackTitleOptions title={data.title}>
        <AlbumOptionsAction owner={data.artist_id} album={data} />
      </HeaderBackTitleOptions>

      <View style={styles.presentation}>
        <View style={styles.presentation_header}>
          <Image
            source={{ uri: data.icon }}
            style={styles.presentation_header_image}
          />
          <View>
            <Text style={styles.title_presentation_header}>{data.title}</Text>
            <Text style={styles.text_presentation_header}>
              {data.release_date}
            </Text>
          </View>
        </View>

        <View style={styles.presentation_controls}>
          <View style={styles.presentation_controls_like}>
            <LikeButton isLiked={false} />
            <Text style={styles.text}>{t("playlist.like")}</Text>
          </View>
          <View style={styles.presentation_controls_share}>
            <ShareButton />
            <Text style={styles.text}>{t("playlist.share")}</Text>
          </View>
        </View>
      </View>

      <View style={{ paddingTop: 20, gap: 20, minHeight: 400 }}>
        <TrackIndexList
          id={generateTrackListId("publicAlbum_list", data.title)}
          data={tracks}
        />
        {user.role === "artist" && (
          <LargeIconButton
            text="Add Song"
            icon={<AddSquareIcon width={20} height={20} stroke="#000" />}
            onPress={() => handleAddTracks()}
            style={{ width: "95%" }}
          />
        )}
      </View>

      {data.description && (
        <View style={{ padding: 20 }}>
          <Text style={styles.title_presentation_header}>About</Text>
          <View style={styles.description}>
            <Text style={styles.text_presentation_header}>
              {data.description}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}

const createStyles = () =>
  StyleSheet.create({
    overlay_container: {
      flex: 1,
    },
    text: {
      color: colors.light_pink,
      fontSize: fontSizes.md,
      fontFamily: "M-PLUS-2-Bold",
      textTransform: "capitalize",
    },
    presentation: {
      padding: 20,
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: colors.light_purple,
    },
    presentation_header: {
      flexDirection: "row",
      alignItems: "center",
    },
    presentation_header_image: {
      width: 110,
      height: 110,
      borderRadius: 10,
      marginRight: 20,
    },
    title_presentation_header: {
      fontSize: fontSizes.xl,
      fontFamily: "M-PLUS-2-Bold",
      color: colors.light_purple,
      width: 200,
      textTransform: "capitalize",
    },
    text_presentation_header: {
      color: colors.white,
      fontSize: fontSizes.lg,
      fontFamily: "M-PLUS-2-Regular",
    },
    presentation_controls: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 20,
      paddingHorizontal: 10,
    },
    presentation_controls_like: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },
    presentation_controls_share: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },
    description: {
      padding: 10,
      marginTop: 10,
      backgroundColor: colors.semi_dark_purple,
      borderRadius: 10,
    },
  });
