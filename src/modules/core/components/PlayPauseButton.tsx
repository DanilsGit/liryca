// Expo

// React

// React Native
import { Pressable, View } from "react-native";
import TrackPlayer, { useIsPlaying } from "react-native-track-player";
import { PauseTrackIcon, PlayTrackIcon } from "./Icons";

// Hooks

// Definitions

// Components

// Props
interface Props {
  size?: number;
}

// Api

export default function PlayPauseButton({ size = 24 }: Props) {
  const { playing } = useIsPlaying();
  return (
    <View style={{ height: size }}>
      <Pressable onPress={playing ? TrackPlayer.pause : TrackPlayer.play}>
        {({ pressed }) => (
          <View style={{ opacity: pressed ? 0.6 : 1 }}>
            {playing ? (
              <PauseTrackIcon size={size} />
            ) : (
              <PlayTrackIcon size={size} />
            )}
          </View>
        )}
      </Pressable>
    </View>
  );
}
