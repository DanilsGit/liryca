// Expo
import { Stack } from "expo-router";
import * as Font from "expo-font";
// React

// React Native
import { Pressable, Text, View } from "react-native";
import { useTheme } from "@m/core/hooks/useTheme";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { themesStatusBar } from "@/constants/themes";
import { I18nextProvider } from "react-i18next";
import i18next from "@/services/i18next";
import { useEffect, useState } from "react";

// Hooks

// Definitions

// Components

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  useEffect(() => {
    if (!fontsLoaded) {
      Font.loadAsync({
        "M-PLUS-2-Bold": require("@/assets/fonts/MPLUS2-Bold.ttf"),
        "M-PLUS-2-ExtraBold": require("@/assets/fonts/MPLUS2-ExtraBold.ttf"),
        "M-PLUS-2-Regular": require("@/assets/fonts/MPLUS2-Regular.ttf"),
      }).then(() => setFontsLoaded(true));
    }
  }, [fontsLoaded]);

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
  const { selectTheme, theme } = useTheme();
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
      <View
        style={{
          position: "absolute",
          bottom: 50,
          right: 0,
          zIndex: 2,
          gap: 20,
        }}
      >
        <Pressable onPress={() => selectTheme("light")}>
          <View
            style={{
              width: 50,
              height: 20,
              borderRadius: 30,
              backgroundColor: "red",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#fff" }}>Light</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => selectTheme("dark")}>
          <View
            style={{
              width: 50,
              height: 20,
              borderRadius: 30,
              backgroundColor: "red",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#fff" }}>Dark</Text>
          </View>
        </Pressable>
      </View>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </View>
  );
};
