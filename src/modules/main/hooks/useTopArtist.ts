import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { followedArtistGetRequest } from "../api/main";
import { useAuth } from "@/modules/auth/hooks/useAuth";

export const useMyArtist = () => {
  const { user } = useAuth();
  const [followedArtist, setFollowedArtist] = useState([]);

  const getArtist = useCallback(async () => {
    if (!user?.token) return;
    const res = await followedArtistGetRequest(user.token);
    setFollowedArtist(res.data.data);
  }, [user?.token]);

  useFocusEffect(
    useCallback(() => {
      getArtist();
    }, [getArtist]),
  );

  return { followedArtist };
};
