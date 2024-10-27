import { registerSheet, SheetDefinition } from "react-native-actions-sheet";
import ListenerOptionsSheet from "./ListenerOptionsSheet";

registerSheet("listener-options-sheet", ListenerOptionsSheet);

// We extend some of the types here to give us great intellisense
// across the app for all registered sheets.
declare module "react-native-actions-sheet" {
  interface Sheets {
    "listener-options-sheet": SheetDefinition<{
      payload: {
        goToLanguageScreen: () => void;
        goToThemeScreen: () => void;
      };
    }>;
  }
}

export {};
