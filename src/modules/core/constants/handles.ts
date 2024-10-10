import { SheetManager } from "react-native-actions-sheet";

export const HandleShowListenerOptions = () => {
  SheetManager.show("listener-options-sheet", {
    payload: { action: () => alert("Hello World") },
  });
};
