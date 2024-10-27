import { colors } from "../constants/tokens";
import { ThemeBackground, ThemeTab, ThemeText, Themes } from "./themesTypes";

export const themesStatusBar = {
  light: colors.white,
  dark: colors.dark_purple,
  quiet: colors.pink,
};

export const themesText: Record<Themes, ThemeText> = {
  light: {
    primary: colors.purple,
    secondary: colors.dark_purple,
  },
  dark: {
    primary: colors.white,
    secondary: colors.light_purple,
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
    bottom: colors.dark_purple,
  },
  quiet: {
    top: colors.black,
    bottom: colors.dark_purple,
  },
};

export const themesTab: Record<Themes, ThemeTab> = {
  light: {
    top: colors.white,
    bottom: colors.white,
  },
  dark: {
    top: colors.dark_purple,
    bottom: colors.dark_purple,
  },
  quiet: {
    top: colors.gray,
    bottom: colors.black,
  },
};

export const themesLine: Record<Themes, string> = {
  light: colors.light_purple,
  dark: colors.light_pink,
  quiet: colors.pink,
};

export const themesBackgroundPost: Record<Themes, string> = {
  light: colors.extra_light_purple,
  dark: colors.semi_dark_purple,
  quiet: colors.pink,
};
