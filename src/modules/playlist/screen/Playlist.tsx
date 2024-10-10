// Expo

// React

// React Native
import { themesText } from "@/constants/themes";
import { ThemeText } from "@/constants/themesTypes";
import { colors, fontSizes } from "@/constants/tokens";
import HeaderBackTitleOptions from "@/modules/core/components/HeaderBackTitleOptions";
import LikeButton from "@/modules/core/components/LikeButton";
import ShareButton from "@/modules/core/components/ShareButton";
import { HandleShowListenerOptions } from "@/modules/core/constants/handles";
import { useTheme } from "@/modules/core/hooks/useTheme";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import TrackIndexList from "../components/TrackIndexList";
import { dataSongs } from "@/constants/data";
import { Track } from "react-native-track-player";

// Hooks

// Definitions

// Components
// Props
interface Props {
  data: {
    id: string;
    title: string;
    artist: string;
    image: string;
    tracks: Track[];
  };
}

// Api

export default function Playlist({ data }: Props) {
  const styles = createStyles();

  return (
    <View style={styles.overlay_container}>
      <HeaderBackTitleOptions
        title={data.title}
        dotsAction={HandleShowListenerOptions}
      />

      <View style={styles.presentation}>
        <View style={styles.presentation_header}>
          <Image
            source={{ uri: data.image }}
            style={styles.presentation_header_image}
          />

          <View>
            <Text style={styles.title_presentation_header}>{data.title}</Text>
            <Text style={styles.text_presentation_header}>{data.artist}</Text>
          </View>
        </View>

        <View style={styles.presentation_controls}>
          <View style={styles.presentation_controls_like}>
            <LikeButton isLiked={false} />
            <Text style={styles.text}>Me gusta</Text>
          </View>
          <View style={styles.presentation_controls_share}>
            <ShareButton />
            <Text style={styles.text}>Compartir</Text>
          </View>
        </View>
      </View>

      <View style={{ paddingTop: 20 }}>
        <TrackIndexList data={data.tracks} />
      </View>
    </View>
  );
}

const createStyles = () =>
  StyleSheet.create({
    overlay_container: {
      flex: 1,
    },
    text: {
      color: colors.white,
      fontSize: fontSizes.lg,
      fontFamily: "M-PLUS-2-Regular",
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
  });
