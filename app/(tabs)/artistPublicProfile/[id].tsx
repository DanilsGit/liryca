// Expo

import Screen from "@m/core/components/Screen";
import { useFocusEffect, useLocalSearchParams } from "expo-router";
import ArtistPublicProfile from "@/modules/artistPublicProfile/screen/ArtistPublicProfile";
import { PublicArtist } from "@/modules/core/lib/types";
import { useCallback, useEffect, useState } from "react";
import {
  publicArtistGetRequest,
  publicFollowersFollowing,
} from "./api/publicArtist";
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
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const getArtist = useCallback(
    async (id: string) => {
      setLoading(true);
      try {
        const res = await publicArtistGetRequest(user.token, id);
        const data = res.data;
        setArtist(data);
      } catch (error) {
        console.log("Error getting artist");
        console.log(error);
      }
      setLoading(false);
    },
    [user.token],
  );

  useFocusEffect(
    useCallback(() => {
      getArtist(id);
    }, [getArtist, id]),
  );

  return { artist, loading };
};

export default function ArtistPublicProfileScreen() {
  const { id } = useLocalSearchParams();
  const { artist, loading } = useArtistPublicProfile(id);
  const { follow, handleFollow, follows } = useFollow(artist?.user_id);

  if (loading || !artist) return <ScreenLoading />;

  return (
    <Screen>
      <ArtistPublicProfile
        artist={artist}
        follow={follow}
        follows={follows}
        handleFollow={handleFollow}
      />
    </Screen>
  );
}
