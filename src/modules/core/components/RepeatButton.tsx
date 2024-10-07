// Expo

// React

// React Native
import { Pressable, StyleSheet, Text, View } from "react-native";
import { NoRepeatIcon, RepeatIcon, RepeatOnceIcon } from "./Icons";
import { RepeatMode } from "react-native-track-player";
import { useTrackPlayerRepeatMode } from "../hooks/useTrackPlayerRepeatMode";

// Hooks

// Definitions

// Components

// Props

// Api

const repeatOrder = [
  RepeatMode.Off,
  RepeatMode.Track,
  RepeatMode.Queue,
] as const;

export default function RepeatButton() {
  const styles = createStyles();
  const { repeatMode, handleRepeatMode } = useTrackPlayerRepeatMode();

  const handlePress = () => {
    if (repeatMode == null) return;
    const currentIndex = repeatOrder.indexOf(repeatMode);
    const nextIndex = (currentIndex + 1) % repeatOrder.length;

    handleRepeatMode(repeatOrder[nextIndex]);
  };

  return (
    <Pressable onPress={handlePress}>
      {repeatMode === RepeatMode.Off ? (
        <NoRepeatIcon size={25} />
      ) : repeatMode === RepeatMode.Track ? (
        <RepeatOnceIcon size={25} />
      ) : repeatMode === RepeatMode.Queue ? (
        <RepeatIcon size={25} />
      ) : (
        <NoRepeatIcon size={20} />
      )}
    </Pressable>
  );
}

const createStyles = () =>
  StyleSheet.create({
    container: {},
  });
