// Expo

import { colors } from "@/constants/tokens";
import { View } from "react-native";

// React

// React Native

// Hooks

// Definitions

// Components

// Props

// Api

export default function PinkDots() {
  return (
    <View style={{ gap: 6 }}>
      <View
        style={{
          width: 5,
          height: 5,
          backgroundColor: colors.light_purple, // NOTA: Arreglarlo para que cambie según el tema
          borderRadius: 100,
        }}
      />
      <View
        style={{
          width: 5,
          height: 5,
          backgroundColor: colors.light_purple, // NOTA: Arreglarlo para que cambie según el tema
          borderRadius: 100,
        }}
      />
    </View>
  );
}

// const styles = StyleSheet.create({

// });
