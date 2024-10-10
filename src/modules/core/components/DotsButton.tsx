// Expo

// React

// React Native
import { colors, fontSizes } from "@/constants/tokens";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { DotsIcon } from "./Icons";

// Hooks

// Definitions

// Components

// Props
interface Props {
  action: () => void;
}
// Api

export default function DotsButton({ action }: Props) {
  return (
    <Pressable onPress={action}>
      <View>
        <DotsIcon width={25} height={25} />
      </View>
    </Pressable>
  );
}
