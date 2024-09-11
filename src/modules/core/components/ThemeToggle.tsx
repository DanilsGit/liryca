// Expo

import { Pressable, Text, View } from "react-native";
import { useTheme } from "../hooks/useTheme";

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
  );
}

// const styles = StyleSheet.create({

// });
