// Expo

import { colors } from "@/constants/tokens";
import { useTheme } from "@/modules/core/hooks/useTheme";
import { useAuth } from "@/modules/core/hooks/useAuth";
import { ThemeText } from "@/constants/themesTypes";
import { fontSizes } from "@/constants/tokens";
import React from "react";

import { StyleSheet, Text, View, Image, Pressable } from "react-native";

// FALTARÍA: Hacer que los botones sean presionables, como en la nav bar

// React

// React Native

// Hooks

// Definitions

// Components

// Props

// Api

export default function Header() {
  const { user } = useAuth();

  return (
    <View style={styles.header}>
      <View style={styles.header_icon}>
        <Image source={{ uri: user?.icon }} style={styles.header_icon_img} />
      </View>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Text style={styles.header_text}>Todas</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.header_text}>Canciones</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.header_text}>Playlist</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // NOTA: PASAR A FUNCION
  header: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 15,
    backgroundColor: "transparent",
    paddingHorizontal: 5,
  },
  header_icon: {
    backgroundColor: "#F4B1EE",
    width: 45,
    height: 45,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  header_icon_img: {
    width: 45,
    height: 45,
    borderRadius: 100,
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  button: {
    backgroundColor: colors.light_pink,
    paddingHorizontal: 15,
    height: 35,
    borderRadius: 25,
    justifyContent: "center",
  },
  header_text: {
    fontFamily: "M-PLUS-2-Bold",
    fontSize: fontSizes.md,
  },
});
