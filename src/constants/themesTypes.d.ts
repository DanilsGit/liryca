import {} from "./themes";

export type Themes = "light" | "dark" | "quiet";

export interface ThemeBackground {
  top: string;
  bottom: string;
}

export interface ThemeTab extends ThemeBackground {}

export interface ThemeText {
  primary: string;
  secondary?: string;
}
