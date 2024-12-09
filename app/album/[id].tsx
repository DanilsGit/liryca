// Expo

// React

// React Native

import ScreenImage from "@/modules/core/components/ScreenImage";

import { useLocalSearchParams } from "expo-router";
import { usePublicAlbumScreen } from "@/modules/album/hooks/usePublicAlbumScreen";
import AlbumSkeleton from "@/modules/album/components/AlbumSkeleton";
import Album from "@/modules/album/screen/Album";

// Hooks

// Definitions

// Components

// Props

// Api
export default function AlbumScreen() {
  const { id } = useLocalSearchParams();
  const id_album = id.toString();
  const { album, tracks, loading } = usePublicAlbumScreen({ id: id_album });

  if (loading) {
    return <AlbumSkeleton />;
  }

  return (
    <ScreenImage backgroundImage={album?.icon}>
      <Album data={album} tracks={tracks} />
    </ScreenImage>
  );
}
