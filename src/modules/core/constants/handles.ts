import TrackPlayer, { Track } from "react-native-track-player";

export const handleTrackQueue = async (
  selectedTrack: Track,
  activeQueueId: string,
  setActiveQueueId: (id: string) => void,
  queueOffset: React.MutableRefObject<number>,
  id: string,
  data: Track[],
) => {
  const trackIndex = data.findIndex((track) => track.url === selectedTrack.url);
  if (trackIndex === -1) return;
  const isChangingQueue = activeQueueId !== id;
  if (isChangingQueue) {
    const beforeTracks = data.slice(0, trackIndex);
    const afterTracks = data.slice(trackIndex + 1);
    await TrackPlayer.reset();
    // Construct the new queue
    await TrackPlayer.add(selectedTrack);
    await TrackPlayer.add(afterTracks);
    await TrackPlayer.add(beforeTracks);
    await TrackPlayer.play();
    // Set the offset to the current track
    queueOffset.current = trackIndex;
    setActiveQueueId(id);
  } else {
    const nextTrackIndex =
      trackIndex - queueOffset.current < 0
        ? data.length + trackIndex - queueOffset.current
        : trackIndex - queueOffset.current;
    await TrackPlayer.skip(nextTrackIndex);
    TrackPlayer.play();
  }
};
