import { useAuth } from "@/modules/auth/hooks/useAuth";
import {
  publicFollowUserGetRequest,
  publicFollowUserPostRequest,
  publicUnfollowUserDeleteRequest,
} from "app/(tabs)/artistPublicProfile/api/publicArtist";
import { useCallback, useEffect, useState } from "react";

export const useFollow = (user_id: string) => {
  const [follow, setFollow] = useState<boolean>(false);
  const [loadingFollow, setLoadingFollow] = useState<boolean>(false);
  const [follows, setFollows] = useState(null);
  const { user } = useAuth();

  const getFollow = useCallback(async () => {
    if (!user_id) return;
    setLoadingFollow(true);
    try {
      const res = await publicFollowUserGetRequest(user.token, user_id);
      const data = res.data;
      setFollow(data.follow);

      // TODO follow and followers
    } catch (error) {
      console.log(error.response.data);
    }
    setLoadingFollow(false);
  }, [user.token, user_id]);

  const handleFollow = async () => {
    if (follow) {
      try {
        setFollow(false);
        const res = await publicUnfollowUserDeleteRequest(user.token, user_id);
        console.log(res.data);
      } catch (error) {
        console.log(error.response.data);
        setFollow(true);
      }
    }
    if (!follow) {
      try {
        setFollow(true);
        const res = await publicFollowUserPostRequest(user.token, user_id);
        console.log(res.data);
      } catch (error) {
        console.log(error.response.data);
        setFollow(false);
      }
    }
  };

  useEffect(() => {
    getFollow();
  }, [getFollow]);

  return { follow, loadingFollow, handleFollow };
};
