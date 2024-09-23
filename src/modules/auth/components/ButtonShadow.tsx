// Expo

// React

// React Native
import { colors, fontSizes } from "@/constants/tokens";
import { Pressable, StyleSheet, Text, View } from "react-native";

// Hooks

// Definitions

// Components

// Props
import { StyleProp, ViewStyle } from "react-native";

interface Props {
  handleClick: () => void;
  text: string;
  extraStyles?: StyleProp<ViewStyle>;
}

// Api

export default function ButtonShadow({
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
      backgroundColor: colors.black,
      borderRadius: 50,
      padding: 10,
      paddingVertical: 20,
      alignItems: "center",
      width: "100%",
      shadowOffset: { width: 15, height: 15 },
      shadowOpacity: 1,
      shadowColor: colors.light_purple,
      shadowRadius: 20,
      elevation: 5,
      borderWidth: 0.3,
      borderColor: colors.light_purple,
    },
    text: {
      fontSize: fontSizes.lg,
      color: colors.light_purple,
      fontWeight: "600",
      letterSpacing: 1.2,
    },
  });
