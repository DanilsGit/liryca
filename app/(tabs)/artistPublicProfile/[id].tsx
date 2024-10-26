// Expo

import { StyleSheet, Text, View } from "react-native";
import Screen from "@m/core/components/Screen";
import { useLocalSearchParams } from "expo-router";
import { useTheme } from "@/modules/core/hooks/useTheme";
import { themesText } from "@/constants/themes";
import { ThemeText } from "@/constants/themesTypes";
import ArtistPublicProfile from "@/modules/artistPublicProfile/screen/ArtistPublicProfile";

// React

// React Native

// Hooks

// Definitions

// Components

// Props

// Api

export default function ArtistPublicProfileScreen() {
  const { id } = useLocalSearchParams();
  console.log(id);

  const data = {
    id: id.toString(),
    banner: "https://picsum.photos/200",
    icon: "https://picsum.photos/200",
    to_follow: false,
    followers: "100",
    likes: 200000,
    name: "King Crimson",
  };

  return (
    <Screen>
      <ArtistPublicProfile artist={data} />
    </Screen>
  );
}
