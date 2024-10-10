// Expo

// React

// React Native
import { Pressable, StyleSheet, View } from "react-native";
import TrackPlayer, { useIsPlaying } from "react-native-track-player";
import { PausePlayerIcon, PlayPlayerIcon } from "./Icons";

// Hooks

// Definitions

// Components

// Props
interface Props {
  size?: number;
}
// Api

export default function PlayPausePlayerButton({ size }: Props) {
  const { playing } = useIsPlaying();
  return (
    <View style={{ height: size }}>
      <Pressable onPress={playing ? TrackPlayer.pause : TrackPlayer.play}>
        {({ pressed }) => (
          <View style={{ opacity: pressed ? 0.6 : 1 }}>
            {playing ? (
              <PausePlayerIcon width={size} height={size} />
            ) : (
              <PlayPlayerIcon width={size} height={size} />
            )}
          </View>
        )}
      </Pressable>
    </View>
  );
}

const createStyles = () =>
  StyleSheet.create({
    container: {},
  });
