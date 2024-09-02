import { StyleSheet } from "react-native";
import { colors } from "../constants/tokens";

export const themesText = StyleSheet.create({
  light: {
    color: colors.black,
  },
  dark: {
    color: colors.white,
  },
  quiet: {
    color: colors.orange,
  },
});

export const themesBackground = {
  light: {
    top: colors.pink,
    bottom: colors.light_pinmk,
  },
  dark: {
    top: colors.black,
    bottom: colors.gray,
  },
  quiet: {
    backgroundColor: colors.orange,
  },
};
