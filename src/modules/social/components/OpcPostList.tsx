// Expo

// React

// React Native
import { FlatList, StyleSheet } from "react-native";
import OpcPost from "./OpcPost";
import { Post } from "../hooks/usePost";

// Hooks

// Definitions

// Components

// Props
interface Props {
  data: Post[];
  handleLike: (id: number) => void;
}
// Api

export default function OpcPostList({ data, handleLike }: Props) {
  const styles = createStyles();
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <OpcPost data={item} handleLike={handleLike} />}
      keyExtractor={(item) => item.id.toString()}
      scrollEnabled={false}
    />
  );
}

const createStyles = () =>
  StyleSheet.create({
    container: {},
  });
