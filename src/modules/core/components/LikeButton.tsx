// Expo

// React

// React Native
import { Pressable, View } from "react-native";
import { HeartIcon } from "./Icons";
import { colors } from "@/constants/tokens";

// Hooks

// Definitions

// Components

// Props
interface Props {
  isLiked: boolean;
  width?: number;
  height?: number;
  handlePress: () => void;
}
// Api

export default function LikeButton({
  isLiked,
  width,
  height,
  handlePress,
}: Props) {
  return (
    <Pressable onPress={handlePress}>
      <View>
        <HeartIcon
          width={width ?? 25}
          height={height ?? 25}
          fill={isLiked ? colors.light_purple : "transparent"}
          strokeWidth={2}
        />
      </View>
    </Pressable>
  );
}
