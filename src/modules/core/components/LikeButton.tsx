// Expo

// React

// React Native
import { Pressable, StyleSheet, View } from "react-native";
import { HeartIcon } from "./Icons";
import { colors } from "@/constants/tokens";

// Hooks

// Definitions

// Components

// Props
interface Props {
  isLiked: boolean;
}
// Api

export default function LikeButton({ isLiked }: Props) {
  const handlePress = () => {
    console.log("Like button pressed", isLiked);
  };

  return (
    <Pressable onPress={handlePress}>
      {isLiked ? (
        <View>
          <HeartIcon
            width={32}
            height={32}
            fill={colors.light_purple}
            strokeWidth={0}
          />
        </View>
      ) : (
        <View>
          <HeartIcon
            width={32}
            height={32}
            fill="transparent"
            stroke="#fff"
            strokeWidth={2}
          />
        </View>
      )}
    </Pressable>
  );
}

const createStyles = () =>
  StyleSheet.create({
    container: {},
  });
