// Expo

// React

// React Native
import { StyleSheet, Text, View } from "react-native";
import { Comment } from "../hooks/useCommentPost";
import { Image } from "expo-image";
import { colors, fontSizes } from "@/constants/tokens";
import IconTextButton from "./IconTextButton";
import { HeartIcon } from "@/modules/core/components/Icons";

// Hooks

// Definitions

// Components

// Props
interface Props {
  comment: Comment;
  handleLikeComment: (commentId: number) => void;
}
// Api

export default function CommentItem({ comment, handleLikeComment }: Props) {
  const styles = createStyles();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header_text_1}>{comment.name}</Text>
      </View>
      <View style={{ flexDirection: "row", gap: 20 }}>
        <View style={styles.image_container}>
          <Image
            source={{ uri: comment.profile_picture }}
            style={styles.image}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.text_content}>{comment.content}</Text>
        </View>
      </View>
      <View>
        <IconTextButton
          icon={
            <HeartIcon
              width={20}
              height={20}
              strokeWidth={5}
              stroke={colors.light_purple}
              fill={comment.liked ? colors.light_purple : "transparent"}
            />
          }
          text={comment.likes.toString()}
          textStyles={styles.header_text_1}
          onPress={() => handleLikeComment(comment.id)}
        />
      </View>
    </View>
  );
}

const createStyles = () =>
  StyleSheet.create({
    container: {
      gap: 10,
      backgroundColor: colors.semi_dark_purple,
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderTopEndRadius: 20,
      borderBottomEndRadius: 20,
      marginBottom: 10,
    },
    image_container: {
      width: 53,
      height: 53,
      borderRadius: 30,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.white,
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 30,
    },
    header_text_1: {
      color: colors.light_purple,
      fontSize: fontSizes.md,
      fontFamily: "M-PLUS-2-Bold",
      opacity: 0.5,
    },
    text_content: {
      color: colors.white,
      fontSize: fontSizes.md,
      fontFamily: "M-PLUS-2-Regular",
    },
  });
