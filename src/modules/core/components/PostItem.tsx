// Expo

// React

// React Native
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Post } from "../lib/types_tracks";
import { useTheme } from "../hooks/useTheme";
import { themesBackgroundPost, themesText } from "@/constants/themes";
import { ThemeText } from "@/constants/themesTypes";
import { colors, fontSizes } from "@/constants/tokens";
import { useTranslation } from "react-i18next";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";

import LikeButton from "@/modules/core/components/LikeButton";
import ShareButton from "@/modules/core/components/ShareButton";
import CommentButton from "@/modules/core/components/CommentButton";

// Hooks

// Definitions

// Components

// Props
interface Props {
  item: Post;
  onPostSelect: (album: Post) => void;
}

// Api

export default function PostItem({ item, onPostSelect }: Props) {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const styles = createStyles(themesText[theme], themesBackgroundPost[theme]);
  return (
    <Pressable
      onPress={() => onPostSelect(item)}
      style={styles.pressable_container}
    >
      {({ pressed }) => (
        <View style={[styles.post_container, { opacity: pressed ? 0.8 : 1 }]}>
          <View>
            <Text style={styles.from_text}>
              {item.from} {t("post.recommended")}
            </Text>
          </View>
          <View style={styles.post_main_content}>
            {item.album_attachment && (
              <View style={styles.attachment_img_container}>
                <Image
                  style={styles.attachment_img}
                  source={{ uri: item.album_attachment.image }}
                />
              </View>
            )}
            <View style={{ flex: 1 }}>
              <Text style={styles.main_content_text}>{item.message}</Text>
            </View>
          </View>
          {item.album_attachment && (
            <View style={styles.attachment}>
              <Text style={styles.attachment_text}>
                {item.album_attachment.title} - {item.album_attachment.from}
              </Text>
            </View>
          )}
          <View style={styles.actions_container}>
            <View style={styles.buttons_container}>
              <LikeButton isLiked={item.isLiked} />
              <Text style={styles.buttons_text}>{t("Like")}</Text>
            </View>
            <View style={styles.buttons_container}>
              <CommentButton />
              <Text style={styles.buttons_text}>Comentar</Text>
            </View>
            <View style={styles.buttons_container}>
              <ShareButton />
              <Text style={styles.buttons_text}>Compartir</Text>
            </View>
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
    buttons_text: {
      color: colors.light_pink,
      fontSize: fontSizes.sm,
    },
  });
