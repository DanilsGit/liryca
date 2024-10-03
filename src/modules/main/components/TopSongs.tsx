// Expo

// React

// React Native
import { FlatList, StyleSheet, View } from "react-native";

// Hooks

// Definitions

// Components
import TrackSongItem from "./TrackSongItem";

// Props

interface Props {
  data: {
    id: number;
    title: string;
    album: string;
    image: string;
  }[];
}

// Api

export default function TopSongs({ data }: Props) {
  const styles = createStyles();

  return (
    <View style={styles.songs_container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <TrackSongItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
        scrollEnabled={false}
      />
    </View>
  );
}

const createStyles = () =>
  StyleSheet.create({
    songs_container: { paddingHorizontal: 15 },
  });
