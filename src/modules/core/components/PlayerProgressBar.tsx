// Expo

// React

// React Native
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import { Slider } from "react-native-awesome-slider";
import { useSharedValue } from "react-native-reanimated";
import TrackPlayer, { useProgress } from "react-native-track-player";
import { formatSecondsToMinute } from "../utils/miscellaneous";
import { colors, fontSizes } from "@/constants/tokens";

// Hooks

// Definitions

// Components

// Props
interface Props {
  style: ViewStyle;
}
// Api

export default function PlayerProgressBar({ style }: Props) {
  const styles = createStyles();

  const { duration, position } = useProgress(1000);

  const isSliding = useSharedValue(false);
  const progress = useSharedValue(0);
  const min = useSharedValue(0);
  const max = useSharedValue(1);

  const trackElapsedTime = formatSecondsToMinute(position);
  const trackRemainingTime = formatSecondsToMinute(duration - position);

  if (!isSliding.value) {
    progress.value = position > 0 ? position / duration : 0;
  }

  return (
    <View style={style}>
      <Slider
        progress={progress}
        minimumValue={min}
        maximumValue={max}
        containerStyle={styles.slider}
        thumbWidth={15}
        renderBubble={() => null}
        theme={{
          maximumTrackTintColor: "#fff2",
          minimumTrackTintColor: colors.light_pink,
        }}
        onSlidingStart={() => (isSliding.value = true)}
        onValueChange={async (value) => {
          await TrackPlayer.seekTo(value * duration);
        }}
        onSlidingComplete={async (value) => {
          if (!isSliding.value) return;
          isSliding.value = false;
          await TrackPlayer.seekTo(value * duration);
        }}
      />
      <View style={styles.time_row}>
        <Text style={styles.time_text}>{trackElapsedTime}</Text>
        <Text style={styles.time_text}>
          {"- "}
          {trackRemainingTime}
        </Text>
      </View>
    </View>
  );
}

const createStyles = () =>
  StyleSheet.create({
    slider: {
      height: 4,
      borderRadius: 5,
    },
    time_row: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginTop: 15,
    },
    time_text: {
      color: "#fff9",
      fontFamily: "M-PLUS-2-Bold",
      fontSize: fontSizes.sm,
    },
  });
