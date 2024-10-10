// Expo

// React

// React Native
import { Pressable, StyleSheet, Text, View } from "react-native";
import { DownArrowIcon } from "./Icons";

// Hooks

// Definitions

// Components

// Props
interface Props {
  action: () => void;
}
// Api

export default function DownArrowButton({ action }: Props) {
  return (
    <Pressable onPress={action}>
      <View>
        <DownArrowIcon width={35} height={35} />
      </View>
    </Pressable>
  );
}
