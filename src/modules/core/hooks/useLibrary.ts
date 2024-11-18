import { create } from "zustand";
import { Playlist, TrackWithPlaylist } from "../lib/types_tracks";
import { Track } from "react-native-track-player";

type Store = {
  tracks: TrackWithPlaylist[];
  refreshTracks: (tracks: TrackWithPlaylist[]) => void;
  toggleTrackFavorite: (track: Track) => void;
  addToPlaylist: (track: Track, playlist: Playlist) => void;
};

export const useLibraryStore = create<Store>()((set) => ({
  tracks: [],
  refreshTracks: (tracks: TrackWithPlaylist[]) => {
    set({ tracks });
  },
  toggleTrackFavorite: (track: Track) => {},
  addToPlaylist: (track: Track, playlist: Playlist) => {},
}));

export const useTracks = () => useLibraryStore((state) => state.tracks);

export const useFavorites = () => {
  const favorites = useTracks().filter((track) => track.rating === 1);
  const toggleTrackFavorite = useLibraryStore(
    (state) => state.toggleTrackFavorite,
  );
  return { favorites, toggleTrackFavorite };
};
