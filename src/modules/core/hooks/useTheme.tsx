import { Themes } from "@/constants/themesTypes";
import { create } from "zustand";

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
