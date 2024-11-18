// Expo

// React

// React Native
import { colors, fontSizes } from "@/constants/tokens";
import { Pressable, StyleSheet, Text, View, ViewStyle } from "react-native";

// Hooks

// Definitions

// Components

// Props
interface Props {
  onPress: () => void;
  text: string;
  icon: React.ReactNode;
  style?: ViewStyle;
}

// Api

export default function LargeIconButton({ onPress, text, icon, style }: Props) {
  const styles = createStyles();
  return (
    <Pressable style={[styles.container]} onPress={onPress}>
      {({ pressed }) => (
        <View
          style={[
            styles.likes_container,
            style,
            { opacity: pressed ? 0.5 : 1 },
          ]}
        >
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
      alignItems: "center",
    },
    likes_container: {
      width: "100%",
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
