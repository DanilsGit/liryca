// Expo

// React

// React Native
import { Pressable, View } from "react-native";
import { SkipToNextTrackIcon } from "./Icons";
import TrackPlayer from "react-native-track-player";

// Hooks

// Definitions

// Components

// Props
interface Props {
  size?: number;
}
// Api

export default function SkipToNextButton({ size }: Props) {
  return (
    <Pressable onPress={() => TrackPlayer.skipToNext()}>
      {({ pressed }) => (
        <View style={{ opacity: pressed ? 0.6 : 1 }}>
          <SkipToNextTrackIcon size={size} />
        </View>
      )}
    </Pressable>
  );
}
