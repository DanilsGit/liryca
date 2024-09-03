// Expo
import { Stack } from "expo-router";
// React

// React Native
import { Pressable, Text, View } from "react-native";
import { useTheme } from "../src/modules/core/hooks/useTheme";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Hooks

// Definitions

// Components

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <RootNavigation />
    </SafeAreaProvider>
  );
}

const RootNavigation = () => {
  const { selectTheme } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
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
