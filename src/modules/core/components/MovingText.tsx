// Expo

// React

// React Native
import { useEffect } from "react";

// Hooks

// Definitions
import Animated, {
  cancelAnimation,
  Easing,
  StyleProps,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

// Components

// Props
interface Props {
  text: string;
  animationThreshold: number;
  style?: StyleProps;
}
// Api

export default function MovingText({ text, animationThreshold, style }: Props) {
  const translateX = useSharedValue(0);
  const shouldAnimate = text.length > animationThreshold;

  const textWidth = text.length * 2.5;

  useEffect(() => {
    if (!shouldAnimate) return;

    translateX.value = withDelay(
      1000,
      withRepeat(
        withTiming(-textWidth, {
          duration: 5000,
          easing: Easing.linear,
        }),
        -1,
        true,
      ),
    );

    return () => {
      cancelAnimation(translateX);
      translateX.value = 0;
    };
  }, [shouldAnimate, textWidth, translateX]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <Animated.Text
      numberOfLines={1}
      style={[
        style,
        animatedStyle,
        shouldAnimate && { width: 9999, paddingLeft: 10 },
      ]}
    >
      {text}
    </Animated.Text>
  );
}
