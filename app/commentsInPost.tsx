// Expo

// React

// React Native
import { colors, fontSizes } from "@/constants/tokens";
import {
  ArrowLeftIcon,
  CommentIcon,
  HeartIcon,
  ShareIcon,
} from "@/modules/core/components/Icons";
import Screen from "@/modules/core/components/Screen";
import ScreenLoading from "@/modules/core/components/ScreenLoading";
import CommentList from "@/modules/social/components/CommentList";
import IconTextButton from "@/modules/social/components/IconTextButton";
import { useTranslation } from "react-i18next";

import {
  handleGoToAlbum,
  handleGoToArtist,
  handleGoToComment,
  handleGoToPlaylist,
} from "@/modules/social/constants/handlers";
import { useCommentPost } from "@/modules/social/hooks/useCommentPost";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

// Hooks

// Definitions

// Components

// Props

// Api

export default function CommentsInPost() {
  const { t } = useTranslation();
  const styles = createStyles();
  const router = useRouter();
  const { post, comments, loading, handleLikeComment, handleLikePost } =
    useCommentPost("call");

  if (loading) return <ScreenLoading />;

  return (
    <Screen>
      <View style={styles.header}>
        <IconTextButton
          icon={
            <ArrowLeftIcon width={20} height={20} fill={colors.light_purple} />
          }
          text={t("post.post_title")}
          textStyles={styles.main_header_text}
          onPress={() => router.back()}
        />
      </View>
      <View style={{ flexDirection: "row", marginLeft: 15 }}>
        <View style={styles.lateralBar} />
        <View style={{ flex: 1 }}>
          <View style={styles.container}>
            <View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.header_text_1}>@{post.username}</Text>
                <Text style={styles.header_text_2}> {post.action_type}</Text>
              </View>
              <View
                style={{ marginVertical: 10, flexDirection: "row", gap: 20 }}
              >
                <Pressable
                  onPress={
                    post.type === "artist"
                      ? () => handleGoToArtist(post.artist_id)
                      : post.type === "album"
                        ? () => handleGoToAlbum(post.attachment_id)
                        : () => handleGoToPlaylist(post.attachment_id)
                  }
                >
                  <View style={styles.image_container}>
                    <Image source={{ uri: post.image }} style={styles.image} />
                  </View>
                </Pressable>
                <View style={styles.content_container}>
                  <Text style={styles.text_content}>{post.content}</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.footer_text_1}>{post.name_attachment}</Text>
                <Text style={styles.footer_text_2}> {post.owner_name}</Text>
              </View>
            </View>
          </View>
          <View style={styles.actions_container}>
            <IconTextButton
              text={post.like_count.toString()}
              textStyles={styles.header_text_1}
              onPress={() => handleLikePost()}
              icon={
                <HeartIcon
                  width={20}
                  height={20}
                  fill={post.is_liked ? colors.purple : "transparent"}
                  strokeWidth={5}
                  stroke={colors.light_purple}
                />
              }
            />
            <IconTextButton
              text={post.comment_count.toString()}
              textStyles={styles.header_text_1}
              onPress={() => handleGoToComment(post)}
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
              text={t("post.share")}
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
        </View>
      </View>
      <View style={styles.comment_section}>
        <Text style={styles.main_header_text}>{t("post.post_comment")}</Text>
        <CommentList
          comments={comments}
          handleLikeComment={handleLikeComment}
        />
      </View>
    </Screen>
  );
}

const createStyles = () =>
  StyleSheet.create({
    header: {
      height: 50,
      flexDirection: "row",
      margin: 10,
    },
    main_header_text: {
      color: colors.light_purple,
      fontSize: fontSizes.xl2,
      fontFamily: "M-PLUS-2-Regular",
    },
    lateralBar: {
      width: 8,
      backgroundColor: colors.purple,
      borderRadius: 10,
      opacity: 0.5,
    },
    container: {
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
      paddingVertical: 10,
      borderBottomRightRadius: 20,
    },
    comment_section: {
      marginTop: 20,
      marginHorizontal: 20,
      gap: 20,
    },
  });
