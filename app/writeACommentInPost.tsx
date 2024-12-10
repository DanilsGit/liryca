// Expo

// React

// React Native
import { themesText } from "@/constants/themes";
import { ThemeText } from "@/constants/themesTypes";
import { colors, fontSizes } from "@/constants/tokens";
import ImageAndChildren from "@/modules/core/components/ImageAndChildren";
import Screen from "@/modules/core/components/Screen";
import ScreenLoading from "@/modules/core/components/ScreenLoading";
import { useTheme } from "@/modules/core/hooks/useTheme";
import PostItButton from "@/modules/social/components/PostItButton";
import { useCommentPost } from "@/modules/social/hooks/useCommentPost";
import { StyleSheet, Text, TextInput, View } from "react-native";

// Hooks

// Definitions

// Components

// Props

// Api

export default function WriteACommentInPost() {
  const { theme } = useTheme();
  const styles = createStyles(themesText[theme]);
  const {
    handleCommentPost,
    handleCommentContentChange,
    commentContent,
    loading,
    post,
  } = useCommentPost("no-call");

  if (loading) return <ScreenLoading />;

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.line} />
          <ImageAndChildren image={post.profile_picture}>
            <View>
              <Text style={styles.text_1}>Respondiendo a</Text>
              <Text style={styles.text_2}>@{post.username}</Text>
            </View>
          </ImageAndChildren>
          <PostItButton onPress={handleCommentPost} />
        </View>
        <View style={styles.content}>
          <View style={styles.options_and_input}>
            <TextInput
              placeholder="Escribe tu comentario"
              style={styles.input}
              multiline
              value={commentContent}
              onChangeText={handleCommentContentChange}
            />
          </View>
        </View>
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
      position: "relative",
    },
    line: {
      width: 5,
      height: 25,
      backgroundColor: colors.light_purple,
      position: "absolute",
      top: 0,
      left: 26,
      borderRadius: 10,
      opacity: 0.5,
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
      color: colorText.secondary,
      fontFamily: "M-PLUS-2-Bold",
      opacity: 0.8,
    },
    text_2: {
      fontSize: fontSizes.lg,
      color: colorText.secondary,
      fontFamily: "M-PLUS-2-Bold",
    },
  });
