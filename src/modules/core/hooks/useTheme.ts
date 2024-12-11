import { Themes } from "@/constants/themesTypes";
import { create } from "zustand";
import * as SecureStorage from "expo-secure-store";

type Store = {
  theme: Themes;
  selectTheme: (theme: Themes) => void;
  loadAsyncTheme: () => void;
};

export const useTheme = create<Store>()((set) => ({
  theme: "dark",
  selectTheme: async (theme: Themes) => {
    await SecureStorage.setItemAsync("theme", JSON.stringify(theme));
    set({ theme });
  },
  loadAsyncTheme: async () => {
    const theme = await SecureStorage.getItemAsync("theme");
    set({ theme: theme ? JSON.parse(theme) : "dark" });
  },
}));
