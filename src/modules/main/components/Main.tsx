// Expo

// React

// React Native
import { StyleSheet, Text, View } from "react-native";
// Hooks

// Definitions
import { themesText } from "../../../constants/themes";
// Components
import { useTheme } from "../../core/hooks/useTheme";

export default function Main() {
  const { theme } = useTheme();
  const themeText = themesText[theme as keyof typeof themesText];
  const combinedStyle = [styles.text, themeText];

  return (
    <View>
      <Text style={combinedStyle}>Main</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
});
