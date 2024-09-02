import { create } from "zustand";
import { Themes } from "../lib/types";

type Store = {
  theme: Themes;
  selectTheme: (theme: Themes) => void;
};

export const useTheme = create<Store>()((set) => ({
  theme: "light",
  selectTheme: (theme: Themes) => {
    set({ theme });
  },
}));
