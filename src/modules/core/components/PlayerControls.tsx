// Expo

// React

// React Native
import { StyleSheet, View, ViewStyle } from "react-native";
import SkipToPreviusButton from "./SkipToPreviusButton";
import SkipToNextButton from "./SkipToNextButton";
import PlayPausePlayerButton from "./PlayPausePlayerButton";

// Hooks

// Definitions

// Components

// Props
interface Props {
  style: ViewStyle;
}
// Api

export default function PlayerControls({ style }: Props) {
  const styles = createStyles();
  return (
    <View style={[styles.container, style]}>
      <View style={styles.row}>
        <SkipToPreviusButton size={30} />
        <PlayPausePlayerButton size={50} />
        <SkipToNextButton size={30} />
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
      justifyContent: "space-evenly",
      alignItems: "center",
    },
  });
