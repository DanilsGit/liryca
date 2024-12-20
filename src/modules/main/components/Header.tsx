// Expo

import { colors } from "@/constants/tokens";
import { useAuth } from "@/modules/auth/hooks/useAuth";
import { fontSizes } from "@/constants/tokens";
import React from "react";

import { StyleSheet, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import { Image } from "expo-image";

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
  const { t } = useTranslation();

  return (
    <View style={styles.header}>
      <View style={styles.header_icon}>
        <Image
          source={{ uri: user?.profile_picture }}
          style={styles.header_icon_img}
        />
      </View>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Text style={styles.header_text}>{t("main.filter.all")}</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.header_text}>{t("main.filter.songs")}</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.header_text}>{t("main.filter.playlist")}</Text>
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
    backgroundColor: colors.light_pink,
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
