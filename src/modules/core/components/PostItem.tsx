// Expo
import * as SecureStorage from "expo-secure-store";
// React

// React Native
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../hooks/useTheme";
import { themesBackgroundPost, themesText } from "@/constants/themes";
import { ThemeText } from "@/constants/themesTypes";
import { colors, fontSizes } from "@/constants/tokens";
import { Image } from "expo-image";

import IconTextButton from "@/modules/social/components/IconTextButton";
import { CommentIcon, HeartIcon, ShareIcon } from "./Icons";
import { handleGoToComment } from "@/modules/social/constants/handlers";
import { useRouter } from "expo-router";
import { Post } from "@/modules/social/hooks/usePost";

// Hooks

// Definitions

// Components

// Props
interface Props {
  data: Post;
  handleLike: (id: number) => void;
}

// Api

export default function PostItem({ data, handleLike }: Props) {
  const { theme } = useTheme();
  const styles = createStyles(themesText[theme], themesBackgroundPost[theme]);
  const router = useRouter();

  const handleExpand = async () => {
    await SecureStorage.setItemAsync("commentsInPost", JSON.stringify(data));
    router.navigate("/commentsInPost");
  };

  return (
    <Pressable
      onPress={() => handleExpand()}
      style={styles.pressable_container}
    >
      {({ pressed }) => (
        <View style={[styles.post_container, { opacity: pressed ? 0.8 : 1 }]}>
          <View>
            <Text style={styles.from_text}>
              {data.username} {" " + data.action_type}
            </Text>
          </View>
          <View style={styles.post_main_content}>
            {data.image && (
              <View style={styles.attachment_img_container}>
                <Image
                  style={styles.attachment_img}
                  source={{ uri: data.image }}
                />
              </View>
            )}
            <View style={{ flex: 1 }}>
              <Text style={styles.main_content_text}>{data.content}</Text>
            </View>
          </View>
          {data.name_attachment && (
            <View style={styles.attachment}>
              <Text style={styles.attachment_text}>
                {data.name_attachment} - {data.owner_name}
              </Text>
            </View>
          )}
          <View style={styles.actions_container}>
            <IconTextButton
              text={data.like_count.toString()}
              textStyles={styles.btn_text}
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
              textStyles={styles.btn_text}
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
              textStyles={styles.btn_text}
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
      )}
    </Pressable>
  );
}

const createStyles = (colorText: ThemeText, bgPost: string) =>
  StyleSheet.create({
    pressable_container: {
      backgroundColor: colors.dark_pink,
      marginBottom: 10,
      paddingLeft: 5,
    },
    post_container: {
      backgroundColor: bgPost,
      padding: 10,
    },
    from_text: {
      color: colorText.secondary,
      fontSize: fontSizes.sm,
      opacity: 0.7,
    },
    post_main_content: {
      flexDirection: "row",
      marginVertical: 10,
      marginHorizontal: 5,
    },
    attachment_img_container: {
      width: 70,
      height: 70,
      marginRight: 10,
    },
    attachment_img: { width: "100%", height: "100%", borderRadius: 10 },
    main_content_text: {
      color: colorText.primary,
      fontSize: fontSizes.md,
      opacity: 0.9,
    },
    attachment: {
      flexDirection: "row",
      alignItems: "center",
    },
    attachment_text: {
      color: colorText.primary,
      fontSize: fontSizes.sm,
      opacity: 0.7,
    },
    actions_container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 10,
      paddingTop: 10,
      paddingHorizontal: 10,
    },
    action_button: {
      flexDirection: "row",
      alignItems: "center",
      gap: 5,
    },
    action_text: {
      color: colors.white,
      fontSize: fontSizes.sm,
      marginLeft: 5,
    },
    buttons_container: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    },
    btn_text: {
      color: colors.light_purple,
      fontSize: fontSizes.md,
      fontFamily: "M-PLUS-2-Bold",
      opacity: 0.5,
    },
  });
