// Expo

// React
import { useEffect } from "react";

// React Native
import { Dimensions, Text } from "react-native";

// Hooks
import { useTheme } from "../../../src/modules/core/hooks/useTheme";

// Definitions
import { themesText } from "../../../src/constants/themes";

// Components
import Screen from "../../../src/modules/core/components/Screen";
// Props

// Api

export default function HomeScreen() {
  const { theme } = useTheme();
  const themeText = themesText[theme as keyof typeof themesText];
  const width = Dimensions.get("window").width;

  useEffect(() => {
    console.log("width", width);
  }, [width]);

  return (
    <Screen>
      <Text style={themeText}>Home</Text>
    </Screen>
  );
}

// const styles = StyleSheet.create({

// });
