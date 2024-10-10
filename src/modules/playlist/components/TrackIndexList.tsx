// Expo

// React

// React Native
import { FlatListProps, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-actions-sheet";
import TrackPlayer, { Track } from "react-native-track-player";
import TrackIndexItem from "./TrackIndexItem";

// Hooks

// Definitions

// Components

// Props
type Props = Partial<FlatListProps<Track>> & {
  data: Track[];
};
// Api

export default function TrackIndexList({ data }: Props) {
  const styles = createStyles();

  const handleTrackSelect = async (track: Track) => {
    await TrackPlayer.load(track);
    await TrackPlayer.play();
  };

  return (
    <View style={styles.songs_container}>
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <TrackIndexItem
            item={item}
            index={index}
            onTrackSelect={handleTrackSelect}
          />
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
