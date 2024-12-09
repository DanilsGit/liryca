// Expo

// React

// React Native
import { FlatList, FlatListProps, StyleSheet, Text, View } from "react-native";

// Hooks

// Definitions

// Components
import TrackSongItem from "./TrackSongItem";
import { Track } from "react-native-track-player";
import { useQueue } from "@/modules/core/hooks/useQueue";
import { useRef } from "react";
import { handleTrackQueue } from "@/modules/core/constants/handles";

// Props

type Props = Partial<FlatListProps<Track>> & {
  id: string;
  data: Track[];
};

// Api

export default function TracksList({ id, data }: Props) {
  const styles = createStyles();
  const queueOffset = useRef(0);
  const { activeQueueId, setActiveQueueId } = useQueue();

  const handleTrackSelect = async (selectedTrack: Track) => {
    handleTrackQueue(
      selectedTrack,
      activeQueueId,
      setActiveQueueId,
      queueOffset,
      id,
      data,
    );
  };

  return (
    <View style={styles.songs_container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TrackSongItem item={item} onTrackSelect={handleTrackSelect} />
        )}
        keyExtractor={(_, index) => index.toString()}
        scrollEnabled={false}
        ListEmptyComponent={<Text>No songs</Text>}
      />
    </View>
  );
}

const createStyles = () =>
  StyleSheet.create({
    songs_container: { paddingHorizontal: 0 },
  });
