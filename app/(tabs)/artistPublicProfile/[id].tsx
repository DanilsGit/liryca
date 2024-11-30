// Expo

import Screen from "@m/core/components/Screen";
import { useLocalSearchParams } from "expo-router";
import ArtistPublicProfile from "@/modules/artistPublicProfile/screen/ArtistPublicProfile";
import { PublicArtist } from "@/modules/core/lib/types";
import { useCallback, useEffect, useState } from "react";
import { publicArtistGetRequest } from "./api/publicArtist";
import { useAuth } from "@/modules/auth/hooks/useAuth";
import ScreenLoading from "@/modules/core/components/ScreenLoading";
import { useFollow } from "@/modules/artistPublicProfile/hooks/useFollow";

// React

// React Native

// Hooks

// Definitions

// Components

// Props

// Api

const useArtistPublicProfile = (id) => {
  const [artist, setArtist] = useState<PublicArtist>(null);
  const { user } = useAuth();

  const getArtist = useCallback(
    async (id: string) => {
      try {
        const res = await publicArtistGetRequest(user.token, id);
        const data = res.data;
        setArtist(data);
      } catch (error) {
        console.log("Error getting artist");
        console.log(error);
      }
    },
    [user.token]
  );

  useEffect(() => {
    setArtist(null);
    getArtist(id);
  }, [getArtist, id]);

  return { artist };
};

export default function ArtistPublicProfileScreen() {
  const { id } = useLocalSearchParams();
  const { artist } = useArtistPublicProfile(id);
  const { follow, handleFollow } = useFollow(artist?.user_id);

  if (!artist) return <ScreenLoading />;

  return (
    <Screen>
      <ArtistPublicProfile
        artist={artist}
        follow={follow}
        handleFollow={handleFollow}
      />
    </Screen>
  );
}
