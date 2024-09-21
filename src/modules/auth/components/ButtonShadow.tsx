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
      paddingVertical: 15,
      alignItems: "center",
      width: "100%",
      shadowOffset: { width: 10, height: 10 },
      shadowOpacity: 1,
      shadowColor: "#fff",
      shadowRadius: 10,
      elevation: 10,
    },
    text: {
      fontSize: fontSizes.md,
      color: colors.white,
      fontWeight: "bold",
    },
  });
