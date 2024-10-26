// Expo

import { Pressable, Text, View } from "react-native";
import { useTheme } from "../hooks/useTheme";
import { colors } from "@/constants/tokens";

// React

// React Native

// Hooks

// Definitions

// Components

// Props

// Api

export default function ThemeToggle() {
  const { selectTheme } = useTheme();
  return (
    <View
      style={{
        position: "absolute",
        bottom: 300,
        right: 0,
        zIndex: 2,
        gap: 10,
      }}
    >
      <Pressable onPress={() => selectTheme("light")}>
        <View
          style={{
            width: 50,
            height: 20,
            borderRadius: 30,
            backgroundColor: colors.light_purple,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#000" }}>Claro</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => selectTheme("dark")}>
        <View
          style={{
            width: 50,
            height: 20,
            borderRadius: 30,
            backgroundColor: colors.dark_purple,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#fff" }}>Oscuro</Text>
        </View>
      </Pressable>
    </View>
  );
}

// const styles = StyleSheet.create({

// });
