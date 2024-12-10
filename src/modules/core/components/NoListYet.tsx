// Expo

// React

// React Native
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../hooks/useTheme";
import { themesText } from "@/constants/themes";
import { ThemeText } from "@/constants/themesTypes";
import { fontSizes } from "@/constants/tokens";

// Hooks

// Definitions

// Components

// Props
interface Props {
  children: React.ReactNode;
}
// Api

export default function NoListYet({ children }: Props) {
  const { theme } = useTheme();
  const styles = createStyles(themesText[theme]);
  return (
    <View style={styles.empty}>
      <Text style={styles.empty_text}>{children}</Text>
    </View>
  );
}

const createStyles = (colorText: ThemeText) =>
  StyleSheet.create({
    empty: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 25,
      borderBottomWidth: 2,
      borderBottomColor: colorText.secondary,
    },
    empty_text: {
      fontSize: fontSizes.lg,
      color: colorText.primary,
      fontFamily: "M-PLUS-2-Regular",
    },
  });
