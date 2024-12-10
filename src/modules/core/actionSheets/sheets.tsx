import { registerSheet, SheetDefinition } from "react-native-actions-sheet";
import ListenerOptionsSheet from "./ListenerOptionsSheet";
import PlaylistOptionsSheet from "./PlaylistOptionsSheet";
import AlbumOptionsSheet from "./AlbumOptionsSheet";
import PublicArtistOptionsSheet from "./PublicArtistOptionsSeet";

registerSheet("listener-options-sheet", ListenerOptionsSheet);
registerSheet("playlist-options-sheet", PlaylistOptionsSheet);
registerSheet("album-options-sheet", AlbumOptionsSheet);
registerSheet("publicArtist-options-sheet", PublicArtistOptionsSheet);

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
    "publicArtist-options-sheet": SheetDefinition<{
      payload: {
        postPublicArtist: () => void;
        sharePublicArtist: () => void;
        followPublicArtist: () => void;
      };
    }>;
    "playlist-options-sheet": SheetDefinition<{
      payload: {
        editPlaylist: () => void;
        invitePlaylist: () => void;
        postPlaylist: () => void;
        sharePlaylist: () => void;
        likePlaylist: () => void;
        owner: string;
      };
    }>;
    "album-options-sheet": SheetDefinition<{
      payload: {
        editAlbum: () => void;
        inviteAlbum: () => void;
        postAlbum: () => void;
        shareAlbum: () => void;
        likeAlbum: () => void;
        owner: string;
      };
    }>;
  }
}

export {};
