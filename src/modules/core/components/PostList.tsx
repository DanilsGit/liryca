// Expo

// React

// React Native
import { FlatListProps, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-actions-sheet";
import PostItem from "./PostItem";
import { Post } from "@/modules/social/hooks/usePost";

// Hooks

// Definitions

// Components

// Props
type Props = Partial<FlatListProps<Post>> & {
  data: Post[];
  handleLike: (id: number) => void;
};

// Api

export default function PostList({ data, handleLike }: Props) {
  const styles = createStyles();

  return (
    <View style={styles.post_container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <PostItem data={item} handleLike={handleLike} />
        )}
        keyExtractor={(item) => item.id.toString()}
        scrollEnabled={false}
        ListEmptyComponent={<Text>No Posts</Text>}
      />
    </View>
  );
}

const createStyles = () =>
  StyleSheet.create({
    post_container: { paddingHorizontal: 15, paddingTop: 20 },
  });
