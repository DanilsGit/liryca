import { colors } from "../constants/tokens";
import { ThemeBackground, ThemeTab, ThemeText, Themes } from "./themesTypes";

export const themesStatusBar = {
  light: colors.white,
  dark: colors.gray,
  quiet: colors.pink,
};

export const themesText: Record<Themes, ThemeText> = {
  light: {
    primary: colors.pink,
    secondary: colors.dark_purple,
  },
  dark: {
    primary: colors.white,
    secondary: colors.white,
  },
  quiet: {
    primary: colors.orange,
  },
};

export const themesBackground: Record<Themes, ThemeBackground> = {
  light: {
    top: colors.purple,
    bottom: colors.white,
  },
  dark: {
    top: colors.black,
    bottom: colors.gray,
  },
  quiet: {
    top: colors.black,
    bottom: colors.gray,
  },
};

export const themesTab: Record<Themes, ThemeTab> = {
  light: {
    top: colors.white,
    bottom: colors.purple,
  },
  dark: {
    top: colors.gray,
    bottom: colors.black,
  },
  quiet: {
    top: colors.gray,
    bottom: colors.black,
  },
};
