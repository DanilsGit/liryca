// Expo

// React

// React Native
import { FlatListProps, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-actions-sheet";
import { Track } from "react-native-track-player";
import TrackIndexItem from "./TrackIndexItem";
import { useRef } from "react";
import { useQueue } from "@/modules/core/hooks/useQueue";
import { handleTrackQueue } from "@/modules/core/constants/handles";
import NoListYet from "@/modules/core/components/NoListYet";

// Hooks

// Definitions

// Components

// Props
type Props = Partial<FlatListProps<Track>> & {
  id: string;
  data: Track[];
};
// Api

export default function TrackIndexList({ id, data }: Props) {
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
        renderItem={({ item, index }) => (
          <TrackIndexItem
            item={item}
            index={index}
            onTrackSelect={handleTrackSelect}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        scrollEnabled={false}
        ListEmptyComponent={<NoListYet>No songs yet</NoListYet>}
      />
    </View>
  );
}

const createStyles = () =>
  StyleSheet.create({
    songs_container: { paddingHorizontal: 15 },
  });
