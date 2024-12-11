// Expo
import * as SecureStorage from "expo-secure-store";
// React

// React Native
import { colors, fontSizes } from "@/constants/tokens";
import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";
import IconTextButton from "./IconTextButton";
import {
  CommentIcon,
  HeartIcon,
  ShareIcon,
} from "@/modules/core/components/Icons";
import { Post } from "../hooks/usePost";
import { useRouter } from "expo-router";
import {
  handleGoToAlbum,
  handleGoToArtist,
  handleGoToComment,
  handleGoToPlaylist,
} from "../constants/handlers";

// Hooks

// Definitions

// Components

// Props
interface Props {
  data: Post;
  handleLike: (id: number) => void;
}
// Api

export default function OpcPost({ data, handleLike }: Props) {
  const styles = createStyles();
  const router = useRouter();

  const handleExpand = async () => {
    await SecureStorage.setItemAsync("commentsInPost", JSON.stringify(data));
    router.navigate("/commentsInPost");
  };

  return (
    <Pressable style={{ marginBottom: 15 }} onPress={handleExpand}>
      <View style={styles.container}>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.header_text_1}>@{data.username}</Text>
            <Text style={styles.header_text_2}> {data.action_type}</Text>
          </View>
          <View style={{ marginVertical: 10, flexDirection: "row", gap: 20 }}>
            <Pressable
              onPress={
                data.type === "artist"
                  ? () => handleGoToArtist(data.artist_id)
                  : data.type === "album"
                    ? () => handleGoToAlbum(data.attachment_id)
                    : data.type === "song"
                      ? () => handleGoToAlbum(data.attachment_id)
                      : data.type === "playlist"
                        ? () => handleGoToPlaylist(data.attachment_id)
                        : () => {}
              }
            >
              <View style={styles.image_container}>
                <Image source={{ uri: data.image }} style={styles.image} />
              </View>
            </Pressable>
            <View style={styles.content_container}>
              <Text style={styles.text_content}>{data.content}</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.footer_text_1}>{data.name_attachment}</Text>
            <Text style={styles.footer_text_2}> {data.owner_name}</Text>
          </View>
        </View>
      </View>
      <View style={styles.actions_container}>
        <IconTextButton
          text={data.like_count.toString()}
          textStyles={styles.header_text_1}
          onPress={() => handleLike(data.id)}
          icon={
            <HeartIcon
              width={20}
              height={20}
              fill={data.is_liked ? colors.purple : "transparent"}
              strokeWidth={5}
              stroke={colors.light_purple}
            />
          }
        />
        <IconTextButton
          text={data.comment_count.toString()}
          textStyles={styles.header_text_1}
          onPress={() => handleGoToComment(data)}
          icon={
            <CommentIcon
              width={20}
              height={20}
              fill="transparent"
              strokeWidth={1}
              stroke={colors.light_purple}
            />
          }
        />
        <IconTextButton
          text="Compartir"
          textStyles={styles.header_text_1}
          onPress={() => console.log("Compartir")}
          icon={
            <ShareIcon
              width={20}
              height={20}
              fill="transparent"
              strokeWidth={5}
              stroke={colors.light_purple}
            />
          }
        />
      </View>
    </Pressable>
  );
}

const createStyles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.semi_dark_purple,
      height: "auto",
      paddingVertical: 10,
      width: "95%",
      borderTopRightRadius: 20,
      paddingLeft: 20,
      gap: 10,
    },
    header_text_1: {
      color: colors.light_purple,
      fontSize: fontSizes.md,
      fontFamily: "M-PLUS-2-Bold",
      opacity: 0.5,
    },
    header_text_2: {
      color: colors.light_purple,
      fontSize: fontSizes.md,
      fontFamily: "M-PLUS-2-Regular",
      opacity: 0.5,
    },
    footer_text_1: {
      color: colors.light_purple,
      fontSize: fontSizes.md,
      fontFamily: "M-PLUS-2-Bold",
    },
    footer_text_2: {
      color: colors.light_purple,
      fontSize: fontSizes.md,
      fontFamily: "M-PLUS-2-Regular",
    },
    image_container: {
      backgroundColor: colors.white,
      width: 75,
      height: 75,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 100,
    },
    image: {
      height: 70,
      width: 70,
      borderRadius: 100,
    },
    content_container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "flex-start",
      marginRight: 10,
    },
    text_content: {
      color: colors.white,
      fontSize: fontSizes.md,
      fontFamily: "M-PLUS-2-Regular",
    },
    actions_container: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      width: "95%",
      backgroundColor: colors.semi_dark_purple,
      paddingVertical: 10,
      borderBottomRightRadius: 20,
    },
  });
