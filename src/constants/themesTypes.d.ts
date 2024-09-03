import { themesBackground, themesTab, themesText } from "./themes";

export interface ThemeBackground {
  top: string;
  bottom: string;
}

export interface ThemeTab extends ThemeBackground {}

export type ThemeBgKey = keyof typeof themesBackground;
export type ThemeTextKey = keyof typeof themesText;
export type ThemeTabKey = keyof typeof themesTab;
