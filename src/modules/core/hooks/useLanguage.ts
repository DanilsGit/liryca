import { create } from "zustand";
import * as SecureStorage from "expo-secure-store";
import { LanguageResources } from "@/services/i18next";
import i18next from "i18next";

type Store = {
  language: string | null;
  languages: string[];
  selectLanguage: (lg: string) => void;
  loadAsyncLanguage: () => void;
};

export const useLanguage = create<Store>()((set) => ({
  language: null,
  languages: Object.keys(LanguageResources),
  selectLanguage: async (lg: string) => {
    i18next.changeLanguage(lg);
    await SecureStorage.setItemAsync("language", JSON.stringify(lg));
    set({ language: lg });
  },
  loadAsyncLanguage: async () => {
    const lg = await SecureStorage.getItemAsync("language");
    const language = lg ? JSON.parse(lg) : "en";
    set({ language });
    i18next.changeLanguage(language);
  },
}));
