import { router } from "expo-router";
import { SheetManager } from "react-native-actions-sheet";

export const HandleShowListenerOptions = () => {
  SheetManager.show("listener-options-sheet", {
    payload: {
      goToLanguageScreen: () => router.navigate("/languageScreen"),
      goToThemeScreen: () => router.navigate("/themeScreen"),
    },
  });
};
