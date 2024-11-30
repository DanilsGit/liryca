// Expo
import { StatusBar } from "expo-status-bar";
import { SplashScreen, Stack } from "expo-router";
import * as Font from "expo-font";
// React
import { useCallback, useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";

// React Native
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Hooks
import { useTheme } from "@/modules/core/hooks/useTheme";
// Definitions
import { themesStatusBar } from "@/constants/themes";
import i18next from "@/services/i18next";
import "@m/core/actionSheets/sheets";
import { MenuProvider } from "react-native-popup-menu";

// Components
import ThemeToggle from "@m/core/components/ThemeToggle";
import { useAuth } from "@m/auth/hooks/useAuth";
import { useSetupTrackPlayer } from "@m/main/hooks/useSetupTrackPlayer";
import { useLogTrackPlayerState } from "@m/main/hooks/useLogTrackPlayerState";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SheetProvider } from "react-native-actions-sheet";
import { useLanguage } from "@/modules/core/hooks/useLanguage";

// SplashScreen.preventAutoHideAsync();

export default function App() {
  const { loadAsyncUser, user } = useAuth();
  const { loadAsyncTheme } = useTheme();
  const { loadAsyncLanguage } = useLanguage();
  useLogTrackPlayerState();

  console.log("user", user);

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
        "PlayfairDisplay-Bold": require("@/assets/fonts/PlayfairDisplay-Bold.ttf"),
      }).then(() => setFontsLoaded(true));
    }
  }, [fontsLoaded]);

  useEffect(() => {
    loadAsyncUser();
    loadAsyncTheme();
    loadAsyncLanguage();
  }, [loadAsyncLanguage, loadAsyncTheme, loadAsyncUser]);

  if (!fontsLoaded) return <View />;

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SheetProvider>
          <MenuProvider>
            <StatusBar style="auto" />
            <I18nextProvider i18n={i18next}>
              <RootNavigation />
            </I18nextProvider>
          </MenuProvider>
        </SheetProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

const RootNavigation = () => {
  const { theme } = useTheme();
  const themeStatusBar = themesStatusBar[theme];

  // Sólo en producción
  const isProduction = process.env.NODE_ENV === "production";

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: themeStatusBar,
      }}
    >
      {!isProduction && <ThemeToggle />}

      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen
          name="editAlbum"
          options={{
            presentation: "card",
            gestureEnabled: true,
            gestureDirection: "vertical",
            animationDuration: 400,
          }}
        />
        <Stack.Screen
          name="album"
          options={{
            presentation: "card",
            gestureEnabled: true,
            gestureDirection: "vertical",
            animationDuration: 400,
          }}
        />
        <Stack.Screen
          name="playerScreen"
          options={{
            presentation: "card",
            gestureEnabled: true,
            gestureDirection: "vertical",
            animationDuration: 400,
          }}
        />
        <Stack.Screen
          name="languageScreen"
          options={{
            presentation: "card",
            gestureEnabled: true,
            gestureDirection: "vertical",
            animationDuration: 400,
          }}
        />
        <Stack.Screen
          name="uploadAlbum"
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
