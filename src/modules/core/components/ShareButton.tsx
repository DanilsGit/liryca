// Expo

// React

// React Native
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ShareIcon } from "./Icons";

// Hooks

// Definitions

// Components

// Props
interface Props {
  width?: number;
  height?: number;
}
// Api

export default function ShareButton({ width, height }: Props) {
  return (
    <Pressable onPress={() => console.log("Share button pressed")}>
      <View>
        <ShareIcon width={width ?? 24} height={height ?? 24} />
      </View>
    </Pressable>
  );
}
