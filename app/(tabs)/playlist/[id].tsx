// Expo

// React

// React Native
import { dataSongs } from "@/constants/data";
import { themesText } from "@/constants/themes";
import { ThemeText } from "@/constants/themesTypes";
import Screen from "@/modules/core/components/Screen";
import ScreenImage from "@/modules/core/components/ScreenImage";
import { useTheme } from "@/modules/core/hooks/useTheme";
import Playlist from "@/modules/playlist/screen/Playlist";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

// Hooks

// Definitions

// Components

// Props

// Api

export default function PlaylistScreen() {
  const { id } = useLocalSearchParams();

  const playlistData = {
    id: id.toString(),
    title: "Currents (deluxe version)",
    artist: "Tame Impala",
    image:
      "https://external-preview.redd.it/8_hXMu9g6_3fClv0Gzoq_sN41LRQyExQqIB-c_jeGx8.jpg?width=640&crop=smart&auto=webp&s=42a594e036d1f290a5dfc5f959280c72be4e6641",
    tracks: dataSongs,
  };

  return (
    <ScreenImage backgroundImage={playlistData.image}>
      <Playlist data={playlistData} />
    </ScreenImage>
  );
}
