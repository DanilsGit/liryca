// Expo
import { StatusBar } from "expo-status-bar";
import { SplashScreen, Stack } from "expo-router";
import * as Font from "expo-font";
// React
import { useCallback, useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";

// React Native
import { View } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

// Hooks
import { useTheme } from "@/modules/core/hooks/useTheme";
// Definitions
import { themesStatusBar } from "@/constants/themes";
import i18next from "@/services/i18next";
import "@m/core/actionSheets/sheets";

// Components
import ThemeToggle from "@m/core/components/ThemeToggle";
import { useAuth } from "@m/auth/hooks/useAuth";
import { useSetupTrackPlayer } from "@m/main/hooks/useSetupTrackPlayer";
import { useLogTrackPlayerState } from "@m/main/hooks/useLogTrackPlayerState";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SheetProvider } from "react-native-actions-sheet";

// SplashScreen.preventAutoHideAsync();

export default function App() {
  const { loadAsyncUser } = useAuth();
  useLogTrackPlayerState();

  const handleTrackPlayerLoaded = useCallback(() => {
    SplashScreen.hideAsync();
  }, []);

  useSetupTrackPlayer({ onLoad: handleTrackPlayerLoaded });

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
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SheetProvider>
          <StatusBar style="auto" />
          <I18nextProvider i18n={i18next}>
            <RootNavigation />
          </I18nextProvider>
        </SheetProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

const RootNavigation = () => {
  const { theme } = useTheme();

  const themeStatusBar = themesStatusBar[theme];

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: themeStatusBar,
      }}
    >
      <ThemeToggle />

      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen
          name="playerScreen"
          options={{
            presentation: "card",
            gestureEnabled: true,
            gestureDirection: "vertical",
            animationDuration: 400,
          }}
        />
      </Stack>
    </View>
  );
};
