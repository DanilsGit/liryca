// Expo

// React

// React Native
import { themesText } from "@/constants/themes";
import { ThemeText } from "@/constants/themesTypes";
import { colors, fontSizes } from "@/constants/tokens";
import Screen from "@/modules/core/components/Screen";
import ScreenLoading from "@/modules/core/components/ScreenLoading";
import { useTheme } from "@/modules/core/hooks/useTheme";
import HeaderImageTitle from "@/modules/search/components/HeaderImageTitle";
import PostItButton from "@/modules/social/components/PostItButton";
import TypeActionSelect from "@/modules/social/components/TypeActionSelect";
import { useWriteAPost } from "@/modules/social/hooks/useWriteAPost";
import { Image } from "expo-image";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { SheetManager } from "react-native-actions-sheet";

// Hooks

// Definitions

// Components

// Props

// Api

export default function WriteAPost() {
  const { theme } = useTheme();
  const styles = createStyles(themesText[theme]);
  const {
    postContent,
    handleWritePost,
    handleSubmitPost,
    handleActionChange,
    action,
    loading,
    attachment,
  } = useWriteAPost();

  SheetManager.hide("album-options-sheet");
  SheetManager.hide("playlist-options-sheet");

  if (loading) return <ScreenLoading />;

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.header}>
          <HeaderImageTitle>
            <Text style={styles.title}>Nuevo post</Text>
          </HeaderImageTitle>
          <PostItButton onPress={handleSubmitPost} />
        </View>
        <View style={styles.content}>
          <View style={styles.options_and_input}>
            <TypeActionSelect
              action={action}
              changeAction={handleActionChange}
            />
            <TextInput
              placeholder="Escribe tu post"
              style={styles.input}
              multiline
              value={postContent}
              onChangeText={handleWritePost}
            />
          </View>
        </View>
        {attachment && (
          <View style={styles.footer}>
            <View>
              <Image source={{ uri: attachment.image }} style={styles.image} />
            </View>
            <View style={{ justifyContent: "center" }}>
              <Text style={styles.text_1}>{attachment.name}</Text>
              <Text style={styles.text_2}>{attachment.owner}</Text>
            </View>
          </View>
        )}
      </View>
    </Screen>
  );
}

const createStyles = (colorText: ThemeText) =>
  StyleSheet.create({
    container: {
      gap: 20,
    },
    title: {
      fontSize: fontSizes.xl2,
      color: colorText.secondary,
      fontFamily: "M-PLUS-2-ExtraBold",
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-end",
      paddingRight: 10,
    },
    content: {
      width: "100%",
      justifyContent: "center",
      alignItems: "flex-start",
    },
    options_and_input: {
      backgroundColor: colors.light_purple,
      width: "90%",
      height: 250,
      marginHorizontal: 20,
      borderRadius: 10,
      padding: 10,
      gap: 10,
    },
    input: {
      fontSize: fontSizes.lg,
      fontFamily: "M-PLUS-2-Regular",
      height: "100%",
      textAlignVertical: "top",
    },
    footer: {
      marginHorizontal: 20,
      borderRadius: 10,
      flexDirection: "row",
      backgroundColor: colors.light_purple,
      padding: 10,
      gap: 10,
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 10,
    },
    text_1: {
      fontSize: fontSizes.md,
      color: colors.semi_dark_purple,
      fontFamily: "M-PLUS-2-Bold",
    },
    text_2: {
      fontSize: fontSizes.md,
      color: colors.semi_dark_purple,
      fontFamily: "M-PLUS-2-Regular",
    },
  });
