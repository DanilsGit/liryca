import { themesBackground, themesText } from "./themes";

export interface ThemeBackground {
  top: string;
  bottom: string;
}

export type ThemeBgKey = keyof typeof themesBackground;
export type ThemeTextKey = keyof typeof themesText;
