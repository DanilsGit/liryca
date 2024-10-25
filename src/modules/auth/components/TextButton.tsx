// Expo

// React

// React Native
import { colors, fontSizes } from "@/constants/tokens";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

// Hooks

// Definitions

// Components

// Props
interface Props {
  handleClick: () => void;
  text: string;
  containerStyles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
}

// Api

export default function TextButton({
  handleClick,
  text,
  containerStyles,
  textStyles,
}: Props) {
  const styles = createStyles();
  return (
    <Pressable onPress={handleClick}>
      {({ pressed }) => (
        <View
          style={[
            styles.button,
            containerStyles,
            { opacity: pressed ? 0.5 : 1 },
          ]}
        >
          <Text style={[styles.text, textStyles]}>{text}</Text>
        </View>
      )}
    </Pressable>
  );
}

const createStyles = () =>
  StyleSheet.create({
    button: {
      width: "100%",
    },
    text: {
      fontSize: fontSizes.sm,
      color: colors.white,
      textAlign: "center",
      fontFamily: "M-PLUS-2-Bold",
    },
  });
