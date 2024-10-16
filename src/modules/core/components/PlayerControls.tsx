// Expo

// React

// React Native
import { StyleSheet, View, ViewStyle } from "react-native";
import SkipToPreviusButton from "./SkipToPreviusButton";
import SkipToNextButton from "./SkipToNextButton";
import PlayPausePlayerButton from "./PlayPausePlayerButton";
import LikeButton from "@/modules/core/components/LikeButton";
import RepeatButton from "@/modules/core/components/RepeatButton";

// Hooks

// Definitions

// Components

// Props
interface Props {
  style: ViewStyle;
}
// Api

export default function PlayerControls({ style }: Props) {
  const isLiked = false;
  const styles = createStyles();
  return (
    <View style={[styles.container, style]}>
      <View style={styles.row}>
        <RepeatButton />
        <SkipToPreviusButton size={35} />
        <PlayPausePlayerButton size={70} />
        <SkipToNextButton size={35} />
        <LikeButton isLiked={isLiked} />
      </View>
    </View>
  );
}

const createStyles = () =>
  StyleSheet.create({
    container: {
      width: "100%",
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  });
