// Expo

// React

// React Native
import { FlatListProps, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-actions-sheet";
import { Album } from "../lib/types";
import AlbumItem from "./AlbumItem";
import { useRouter } from "expo-router";
import NoListYet from "./NoListYet";

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
  const router = useRouter();
  const handleAlbumSelect = async (album: Album) => {
    router.push(`/album/${album.id}`);
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
        ListEmptyComponent={<NoListYet>No albums yet</NoListYet>}
      />
    </View>
  );
}

const createStyles = () =>
  StyleSheet.create({
    songs_container: {},
  });
