// Expo

// React

// React Native
import { FlatList, FlatListProps, StyleSheet, Text, View } from "react-native";

// Hooks

// Definitions

// Components
import TrackSongItem from "./TrackSongItem";
import TrackPlayer, { Track } from "react-native-track-player";

// Props

type Props = Partial<FlatListProps<Track>> & {
  data: Track[];
};

// Api

export default function TracksList({ data }: Props) {
  const styles = createStyles();

  const handleTrackSelect = async (track: Track) => {
    await TrackPlayer.load(track);
    await TrackPlayer.play();
  };

  return (
    <View style={styles.songs_container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TrackSongItem item={item} onTrackSelect={handleTrackSelect} />
        )}
        keyExtractor={(item) => item.id.toString()}
        scrollEnabled={false}
        ListEmptyComponent={<Text>No songs</Text>}
      />
    </View>
  );
}

const createStyles = () =>
  StyleSheet.create({
    songs_container: { paddingHorizontal: 15 },
  });
