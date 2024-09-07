import { colors } from "../constants/tokens";
import { ThemeBackground, ThemeTab, ThemeText, Themes } from "./themesTypes";

export const themesStatusBar = {
  light: colors.white,
  dark: colors.dark_purple,
  quiet: colors.pink,
};

export const themesText: Record<Themes, ThemeText> = {
  light: {
    primary: colors.light_pink,
    secondary: colors.dark_purple,
  },
  dark: {
    primary: colors.pink,
    secondary: colors.light_pink,
  },
  quiet: {
    primary: colors.orange,
  },
};

export const themesBackground: Record<Themes, ThemeBackground> = {
  light: {
    top: colors.white,
    bottom: colors.white,
  },
  dark: {
    top: colors.dark_purple,
    bottom: colors.black,
  },
  quiet: {
    top: colors.black,
    bottom: colors.dark_purple,
  },
};

export const themesTab: Record<Themes, ThemeTab> = {
  light: {
    top: colors.white,
    bottom: colors.purple,
  },
  dark: {
    top: colors.black,
    bottom: colors.black,
  },
  quiet: {
    top: colors.gray,
    bottom: colors.black,
  },
};
