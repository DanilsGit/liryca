// Expo

// React

// React Native
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Post } from "../lib/types";
import { useTheme } from "../hooks/useTheme";
import { themesText } from "@/constants/themes";
import { ThemeText } from "@/constants/themesTypes";
import { colors, fontSizes } from "@/constants/tokens";
import { useTranslation } from "react-i18next";
import { Image } from "expo-image";

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
  const styles = createStyles(themesText[theme]);
  return (
    <Pressable
      onPress={() => onPostSelect(item)}
      style={styles.pressable_container}
    >
      {({ pressed }) => (
        <View style={[styles.post_container, { opacity: pressed ? 0.5 : 1 }]}>
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
        </View>
      )}
    </Pressable>
  );
}

const createStyles = (colorText: ThemeText) =>
  StyleSheet.create({
    pressable_container: {
      backgroundColor: colors.dark_pink,
      marginBottom: 10,
      paddingLeft: 5,
    },
    post_container: {
      backgroundColor: colors.semi_dark_purple,
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
  });
