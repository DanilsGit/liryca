import { registerSheet, SheetDefinition } from "react-native-actions-sheet";
import ListenerOptionsSheet from "./ListenerOptionsSheet";
import PlaylistOptionsSheet from "./PlaylistOptionsSheet";

registerSheet("listener-options-sheet", ListenerOptionsSheet);
registerSheet("playlist-options-sheet", PlaylistOptionsSheet);

// We extend some of the types here to give us great intellisense
// across the app for all registered sheets.
declare module "react-native-actions-sheet" {
  interface Sheets {
    "listener-options-sheet": SheetDefinition<{
      payload: {
        goToLanguageScreen: () => void;
        goToThemeScreen: () => void;
        logout: () => void;
      };
    }>;
    "playlist-options-sheet": SheetDefinition<{
      payload: {
        editPlaylist: () => void;
        invitePlaylist: () => void;
        sharePlaylist: () => void;
        likePlaylist: () => void;
        owner: string;
      };
    }>;
  }
}

export {};
