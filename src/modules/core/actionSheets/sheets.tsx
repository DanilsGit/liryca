import { registerSheet, SheetDefinition } from "react-native-actions-sheet";
import ListenerOptionsSheet from "./ListenerOptionsSheet";
import PlaylistOptionsSheet from "./PlaylistOptionsSheet";
import AlbumOptionsSheet from "./AlbumOptionsSheet";

registerSheet("listener-options-sheet", ListenerOptionsSheet);
registerSheet("playlist-options-sheet", PlaylistOptionsSheet);
registerSheet("album-options-sheet", AlbumOptionsSheet);

// We extend some of the types here to give us great intellisense
// across the app for all registered sheets.
declare module "react-native-actions-sheet" {
  interface Sheets {
    "listener-options-sheet": SheetDefinition<{
      payload: {
        goToEditProfile: () => void;
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
    "album-options-sheet": SheetDefinition<{
      payload: {
        editAlbum: () => void;
        inviteAlbum: () => void;
        shareAlbum: () => void;
        likeAlbum: () => void;
        owner: string;
      };
    }>;
  }
}

export {};
