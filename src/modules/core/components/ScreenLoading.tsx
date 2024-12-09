// Expo

// React

// React Native
import { themesBackground } from "@/constants/themes";
import { LinearGradient } from "expo-linear-gradient";
import { ActivityIndicator, Dimensions } from "react-native";
import { useTheme } from "../hooks/useTheme";
import { colors } from "@/constants/tokens";

// Hooks

// Definitions

// Components

// Props

// Api

export default function ScreenLoading() {
  const { theme } = useTheme();
  const themeBackgroud = themesBackground[theme];
  const height = Dimensions.get("screen").height;
  return (
    <LinearGradient
      colors={[themeBackgroud.top, themeBackgroud.bottom]}
      start={{ x: 0, y: -1.5 }}
      end={{ x: 0, y: 1 }}
      locations={[0, 1]}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        minHeight: height - 100,
      }}
    >
      <ActivityIndicator size="large" color={colors.purple} />
    </LinearGradient>
  );
}
