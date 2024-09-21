// Expo
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import * as Font from "expo-font";
// React
import { useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";

// React Native
import { View } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

// Hooks
import { useTheme } from "@m/core/hooks/useTheme";
// Definitions
import { themesStatusBar } from "@/constants/themes";
import i18next from "@/services/i18next";

// Components
import ThemeToggle from "@/modules/core/components/ThemeToggle";
import { useAuth } from "@/modules/auth/hooks/useAuth";

export default function App() {
  const { loadAsyncUser } = useAuth();

  const [fontsLoaded, setFontsLoaded] = useState(false);
  useEffect(() => {
    if (!fontsLoaded) {
      Font.loadAsync({
        "M-PLUS-2-Bold": require("@/assets/fonts/MPLUS2-Bold.ttf"),
        "M-PLUS-2-ExtraBold": require("@/assets/fonts/MPLUS2-ExtraBold.ttf"),
        "M-PLUS-2-Regular": require("@/assets/fonts/MPLUS2-Regular.ttf"),
        "PlayfairDisplay-Regular": require("@/assets/fonts/PlayfairDisplay-VariableFont_wght.ttf"),
      }).then(() => setFontsLoaded(true));
    }
  }, [fontsLoaded]);

  useEffect(() => {
    loadAsyncUser();
  }, [loadAsyncUser]);

  if (!fontsLoaded) return <View />;

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <I18nextProvider i18n={i18next}>
        <RootNavigation />
      </I18nextProvider>
    </SafeAreaProvider>
  );
}

const RootNavigation = () => {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();
  const themeStatusBar = themesStatusBar[theme];

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: themeStatusBar,
        paddingTop: insets.top,
      }}
    >
      <ThemeToggle />

      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="(auth)" />
      </Stack>
    </View>
  );
};
