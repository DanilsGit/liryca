// Expo

// React

// React Native

import ScreenImage from "@/modules/core/components/ScreenImage";

import { useLocalSearchParams } from "expo-router";
import AlbumSkeleton from "@/modules/album/components/AlbumSkeleton";
import { usePlaylistScreen } from "@/modules/playlist/hooks/usePlaylistScreen";
import Playlist from "@/modules/playlist/screen/Playlist";

// Hooks

// Definitions

// Components

// Props

// Api
export default function PlaylistScreen() {
  const { id } = useLocalSearchParams();
  const id_playlist = id.toString();

  const { playlist, tracks, loading } = usePlaylistScreen(id_playlist);

  if (loading) {
    return <AlbumSkeleton />;
  }

  return (
    <ScreenImage backgroundImage={playlist?.image}>
      <Playlist data={playlist} tracks={tracks} />
    </ScreenImage>
  );
}
