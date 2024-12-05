// Expo

// React

// React Native

import ScreenImage from "@/modules/core/components/ScreenImage";

import { useLocalSearchParams } from "expo-router";
import { usePublicAlbumScreen } from "@/modules/album/hooks/usePublicAlbumScreen";
import { useAuth } from "@/modules/auth/hooks/useAuth";
import AlbumSkeleton from "@/modules/album/components/AlbumSkeleton";
import AlbumArtist from "@/modules/album/screen/AlbumArtist";
import Album from "@/modules/album/screen/Album";

// Hooks

// Definitions

// Components

// Props

// Api
export default function AlbumScreen() {
  const { id } = useLocalSearchParams();
  const id_album = id.toString();

  const { user } = useAuth();
  const { album, tracks, loading } = usePublicAlbumScreen({ id: id_album });

  if (loading) {
    return <AlbumSkeleton />;
  }

  return (
    <ScreenImage backgroundImage={album?.icon}>
      {user.role === "artist" && <AlbumArtist data={album} tracks={tracks} />}
      {user.role === "user" && <Album data={album} tracks={tracks} />}
    </ScreenImage>
  );
}
