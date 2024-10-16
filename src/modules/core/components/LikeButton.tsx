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
}
// Api

export default function LikeButton({ isLiked, width, height }: Props) {
  const handlePress = () => {
    console.log("Like button pressed", isLiked);
  };

  return (
    <Pressable onPress={handlePress}>
      {isLiked ? (
        <View>
          <HeartIcon
            width={width ?? 25}
            height={height ?? 25}
            fill={colors.light_purple}
            strokeWidth={0}
          />
        </View>
      ) : (
        <View>
          <HeartIcon
            width={width ?? 22}
            height={height ?? 22}
            fill={colors.light_pink}
            stroke={colors.light_pink}
            strokeWidth={2}
          />
        </View>
      )}
    </Pressable>
  );
}
