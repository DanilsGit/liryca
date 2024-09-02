// Expo

// React

// React Native
import { ScrollView, View } from "react-native";
import { useTheme } from "../hooks/useTheme";
import { themesBackground } from "../../../constants/themes";
import { LinearGradient } from "expo-linear-gradient";
import { ThemeBackground, ThemeBgKey } from "../../../constants/themesTypes";
import { useSafeAreaInsets } from "react-native-safe-area-context";
// Hooks

// Definitions

// Components

//Apis

// Props

export default function Screen({ children }: { children: React.ReactNode }) {
  const insets = useSafeAreaInsets();
  const { theme } = useTheme();
  const themeBackgroud = themesBackground[
    theme as ThemeBgKey
  ] as ThemeBackground;

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={[themeBackgroud.top, themeBackgroud.bottom]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0.15 }}
        locations={[0, 1]}
        style={{ flex: 1 }}
      >
        <ScrollView style={{ flex: 1, paddingTop: insets.top }}>
          {children}
          <View style={{ paddingBottom: 100 }}></View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

// const styles = StyleSheet.create({

// });
