import { themesBackground } from "./themes";

export interface ThemeBackground {
  top: string;
  bottom: string;
}

export type ThemeBgKey = keyof typeof themesBackground;
