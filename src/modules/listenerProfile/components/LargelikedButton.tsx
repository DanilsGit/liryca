// Expo

// React

// React Native
import { colors, fontSizes } from "@/constants/tokens";
import { HeartIcon } from "@/modules/core/components/Icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

// Hooks

// Definitions

// Components

// Props
interface Props {
  onPress: () => void;
  text: string;
  icon: React.ReactNode;
}

// Api

export default function LargelikedButton({ onPress, text, icon }: Props) {
  const styles = createStyles();
  return (
    <Pressable style={styles.container} onPress={onPress}>
      {({ pressed }) => (
        <View style={[styles.likes_container, { opacity: pressed ? 0.5 : 1 }]}>
          <View style={styles.likes_svg_container}>{icon}</View>
          {/* Text */}
          <Text style={styles.likes_text}>{text}</Text>
        </View>
      )}
    </Pressable>
  );
}

const createStyles = () =>
  StyleSheet.create({
    container: {
      width: "100%",
    },
    likes_container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: 10,
      backgroundColor: colors.light_purple,
      borderRadius: 10,
    },
    likes_svg_container: {
      backgroundColor: colors.light_pink,
      padding: 10,
      borderRadius: 10,
      marginRight: 10,
    },
    likes_text: {
      fontFamily: "M-PLUS-2-Bold",
      fontSize: fontSizes.md,
      color: colors.dark_purple,
    },
  });
