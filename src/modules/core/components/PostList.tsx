// Expo

// React

// React Native
import { FlatListProps, StyleSheet, Text, View } from "react-native";
import { Post } from "../lib/types_tracks";
import { FlatList } from "react-native-actions-sheet";
import PostItem from "./PostItem";

// Hooks

// Definitions

// Components

// Props
type Props = Partial<FlatListProps<Post>> & {
  data: Post[];
};

// Api

export default function PostList({ data }: Props) {
  const styles = createStyles();

  const handlePostSelect = async (album: Post) => {
    console.log(album);
  };

  return (
    <View style={styles.post_container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <PostItem item={item} onPostSelect={handlePostSelect} />
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
