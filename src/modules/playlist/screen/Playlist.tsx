// Expo

// React

// React Native
import { colors, fontSizes } from "@/constants/tokens";
import TrackIndexList from "@/modules/album/components/TrackIndexList";
import HeaderBackTitleOptions from "@/modules/core/components/HeaderBackTitleOptions";
import LikeButton from "@/modules/core/components/LikeButton";
import ShareButton from "@/modules/core/components/ShareButton";
import { Playlist as PlaylistType } from "@/modules/core/lib/types_tracks";
import { generateTrackListId } from "@/modules/core/utils/miscellaneous";
import { Image } from "expo-image";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";
import { Track } from "react-native-track-player";
import OwnerAndPartners from "../components/OwnerAndPartners";
import PlaylistOptiosAction from "../components/PlaylistOptiosAction";

// Hooks

// Definitions

// Components

// Props
interface Props {
  data: PlaylistType;
  tracks: Track[];
}
// Api

export default function Playlist({ data, tracks }: Props) {
  const styles = createStyles();
  const { t } = useTranslation();

  return (
    <View style={styles.overlay_container}>
      <HeaderBackTitleOptions title={data.name}>
        <PlaylistOptiosAction owner={data.user_id} id_playlist={data.id} />
      </HeaderBackTitleOptions>

      <View style={styles.presentation}>
        <View style={styles.presentation_header}>
          <Image
            source={{ uri: data.image }}
            style={styles.presentation_header_image}
          />
          <View>
            <Text style={styles.title_presentation_header}>{data.name}</Text>
            <Text style={styles.text_presentation_header}>
              {data.created_at}
            </Text>
          </View>
        </View>

        {data.shared_with && (
          <OwnerAndPartners
            owner_picture={data.profile_picture}
            partners={data.shared_with}
          />
        )}

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

      <View style={{ paddingTop: 20, minHeight: 400 }}>
        <TrackIndexList
          id={generateTrackListId("publicAlbum_list", data.name)}
          data={tracks}
        />
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
      height: "100%",
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
      marginTop: 10,
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
