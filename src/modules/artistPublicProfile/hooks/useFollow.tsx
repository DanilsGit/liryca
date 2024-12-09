import { useAuth } from "@/modules/auth/hooks/useAuth";
import {
  publicFollowersFollowing,
  publicFollowUserGetRequest,
  publicFollowUserPostRequest,
  publicUnfollowUserDeleteRequest,
} from "app/(tabs)/artistPublicProfile/api/publicArtist";
import { useCallback, useEffect, useState } from "react";

export const useFollow = (user_id: string) => {
  const [follow, setFollow] = useState<boolean>(false);
  const [loadingFollow, setLoadingFollow] = useState<boolean>(false);
  const [follows, setFollows] = useState({
    count_followers: 0,
    count_following: 0,
  });
  const { user } = useAuth();

  const getFollow = useCallback(async () => {
    if (!user_id) return;
    setLoadingFollow(true);
    try {
      const res = await publicFollowUserGetRequest(user.token, user_id);
      const data = res.data;
      setFollow(data.follow);

      const res_follow = await publicFollowersFollowing(user.token, user_id);
      const data_follow = res_follow.data;
      setFollows(data_follow);
    } catch (error) {
      console.log(error.response.data);
    }
    setLoadingFollow(false);
  }, [user.token, user_id]);

  const handleFollow = async () => {
    if (follow) {
      try {
        setFollow(false);
        await publicUnfollowUserDeleteRequest(user.token, user_id);
        setFollows({
          ...follows,
          count_followers: follows.count_followers - 1,
        });
      } catch (error) {
        console.log(error.response.data);
        setFollow(true);
      }
    }
    if (!follow) {
      try {
        setFollow(true);
        await publicFollowUserPostRequest(user.token, user_id);
        setFollows({
          ...follows,
          count_followers: follows.count_followers + 1,
        });
      } catch (error) {
        console.log(error.response.data);
        setFollow(false);
      }
    }
  };

  useEffect(() => {
    getFollow();
  }, [getFollow]);

  return { follow, loadingFollow, handleFollow, follows };
};
