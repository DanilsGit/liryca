// Expo

// React

// React Native
import { Pressable, View } from "react-native";
import { SkipToPreviousTrackIcon } from "./Icons";
import TrackPlayer from "react-native-track-player";

// Hooks

// Definitions

// Components

// Props
interface Props {
  size?: number;
}
// Api

export default function SkipToPreviusButton({ size }: Props) {
  return (
    <Pressable onPress={() => TrackPlayer.skipToPrevious}>
      {({ pressed }) => (
        <View style={{ opacity: pressed ? 0.6 : 1 }}>
          <SkipToPreviousTrackIcon size={size} />
        </View>
      )}
    </Pressable>
  );
}
