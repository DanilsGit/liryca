// Expo

// React

// React Native
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Comment } from "../hooks/useCommentPost";
import CommentItem from "./CommentItem";
import NoListYet from "@/modules/core/components/NoListYet";

// Hooks

// Definitions

// Components

// Props
interface Props {
  comments: Comment[];
  handleLikeComment: (commentId: number) => void;
}
// Api

export default function CommentList({ comments, handleLikeComment }: Props) {
  return (
    <FlatList
      data={comments}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <CommentItem comment={item} handleLikeComment={handleLikeComment} />
      )}
      scrollEnabled={false}
      ListEmptyComponent={
        <NoListYet>
          <Text>Se el primero en comentar</Text>
        </NoListYet>
      }
    />
  );
}
