// Expo

// React

// React Native
import { FlatListProps, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-actions-sheet";
import { Album } from "../lib/types";
import AlbumItem from "./AlbumItem";

// Hooks

// Definitions

// Components

// Props

type Props = Partial<FlatListProps<Album>> & {
  data: Album[];
};

// Api

export default function AlbumList({ data }: Props) {
  const styles = createStyles();

  const handleAlbumSelect = async (album: Album) => {
    console.log(album);
  };

  return (
    <View style={styles.songs_container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <AlbumItem item={item} onAlbumSelect={handleAlbumSelect} />
        )}
        keyExtractor={(item) => item.id.toString()}
        scrollEnabled={false}
        ListEmptyComponent={<Text>No Albums</Text>}
      />
    </View>
  );
}

const createStyles = () =>
  StyleSheet.create({
    songs_container: { paddingHorizontal: 15 },
  });
