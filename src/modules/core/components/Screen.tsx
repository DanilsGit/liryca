// Expo

// React

// React Native
import { ScrollView, View } from "react-native";
import { useTheme } from "../hooks/useTheme";
import { themesBackground } from "@/constants/themes";
import { LinearGradient } from "expo-linear-gradient";
import { useActiveTrack } from "react-native-track-player";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Hooks

// Definitions

// Components

//Apis

// Props

export default function Screen({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const activeTrack = useActiveTrack();
  const insets = useSafeAreaInsets();
  const themeBackgroud = themesBackground[theme];

  return (
    <LinearGradient
      colors={[themeBackgroud.top, themeBackgroud.bottom]}
      start={{ x: 0, y: -1.5 }}
      end={{ x: 0, y: 1 }}
      locations={[0, 1]}
      style={{ flex: 1, paddingTop: insets.top }}
    >
      <ScrollView>
        <View style={{ flex: 1 }}>{children}</View>
        <View style={{ padding: activeTrack ? 70 : 25 }} />
      </ScrollView>
    </LinearGradient>
  );
}

// const styles = StyleSheet.create({

// });
