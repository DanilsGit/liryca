// Expo

// React

// React Native
import { Pressable, View } from "react-native";
import { CommentIcon } from "./Icons";

// Hooks

// Definitions

// Components

// Props
interface Props {
  width?: number;
  height?: number;
}
// Api

export default function CommentButton({ width, height }: Props) {
  return (
    <Pressable onPress={() => console.log("Comment button pressed")}>
      <View>
        <CommentIcon width={width ?? 24} height={height ?? 24} />
      </View>
    </Pressable>
  );
}
