// Expo

// React

// React Native
import { SvgIconProps } from "@/modules/core/lib/types";
import { Pressable, StyleSheet, Text, TextStyle, View } from "react-native";

// Hooks

// Definitions

// Components

// Props
interface Props {
  icon: React.ReactElement<SvgIconProps>;
  text: string;
  textStyles?: TextStyle;
  onPress: () => void;
}
// Api

export default function IconTextButton({
  icon,
  text,
  textStyles,
  onPress,
}: Props) {
  const styles = createStyles();
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        {icon}
        <Text style={textStyles}>{text}</Text>
      </View>
    </Pressable>
  );
}

const createStyles = () =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      justifyContent: "center",
    },
  });
