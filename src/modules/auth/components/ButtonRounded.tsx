// Expo

// React

// React Native
import { colors, fontSizes } from "@/constants/tokens";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
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
  extraStyles?: StyleProp<ViewStyle>;
}

// Api

export default function ButtonRounded({
  handleClick,
  text,
  extraStyles,
}: Props) {
  const styles = createStyles();
  return (
    <Pressable onPress={handleClick}>
      {({ pressed }) => (
        <View
          style={[styles.button, extraStyles, { opacity: pressed ? 0.5 : 1 }]}
        >
          <Text style={styles.text}>{text}</Text>
        </View>
      )}
    </Pressable>
  );
}

const createStyles = () =>
  StyleSheet.create({
    button: {
      backgroundColor: colors.light_purple,
      borderRadius: 50,
      padding: 10,
      paddingVertical: 15,
      width: "100%",
      alignItems: "center",
    },
    text: {
      fontSize: fontSizes.lg,
      color: colors.black,
      fontWeight: "600",
      letterSpacing: 1.2,
    },
  });
