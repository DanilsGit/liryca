// Expo
import * as SecureStorage from "expo-secure-store";
// React

// React Native
import { colors, fontSizes } from "@/constants/tokens";
import HeaderBackTitleOptions from "@/modules/core/components/HeaderBackTitleOptions";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import TrackIndexList from "../components/TrackIndexList";
import { generateTrackListId } from "@/modules/core/utils/miscellaneous";
import { Album as AlbumType } from "@/modules/core/lib/types";
import LargeIconButton from "@/modules/core/components/LargeIconButton";
import { AddSquareIcon } from "@/modules/core/components/Icons";
import { useRouter } from "expo-router";
// Hooks

// Definitions

// Components
// Props
interface Props {
  data: AlbumType;
  tracks: any[];
}

// Api

export default function AlbumArtist({ data, tracks }: Props) {
  const styles = createStyles();
  const router = useRouter();

  const handleAddSong = async () => {
    // TODO: AGREGAR CANCIONES Y EDITAR ALBUM
    await SecureStorage.setItemAsync("albumToEdit", JSON.stringify(data));
    router.push(`/editAlbum/${data.id}`);
  };

  return (
    <View style={styles.overlay_container}>
      <HeaderBackTitleOptions title={data.title} />

      <View style={styles.presentation}>
        <View style={styles.presentation_header}>
          <Image
            source={{ uri: data.icon }}
            style={styles.presentation_header_image}
          />
          <View>
            <Text style={styles.title_presentation_header}>{data.title}</Text>
            <View style={{ width: "85%" }}>
              <Text style={styles.text}>{data.description}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{ paddingTop: 10, gap: 20 }}>
        <TrackIndexList
          id={generateTrackListId("albumArtist_list", data.title)}
          data={tracks}
        />
        <LargeIconButton
          text="Add Song"
          icon={<AddSquareIcon width={20} height={20} stroke="#000" />}
          onPress={handleAddSong}
          style={{ width: "95%" }}
        />
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
  });
