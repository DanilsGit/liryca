// Expo

// React

// React Native
import { themesBackground } from "@/constants/themes";
import { LinearGradient } from "expo-linear-gradient";
import { ActivityIndicator } from "react-native";
import { useTheme } from "../hooks/useTheme";

// Hooks

// Definitions

// Components

// Props

// Api

export default function ScreenLoading() {
  const { theme } = useTheme();
  const themeBackgroud = themesBackground[theme];
  return (
    <LinearGradient
      colors={[themeBackgroud.top, themeBackgroud.bottom]}
      start={{ x: 0, y: -1.5 }}
      end={{ x: 0, y: 1 }}
      locations={[0, 1]}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <ActivityIndicator size="large" color="#a5f" />
    </LinearGradient>
  );
}
