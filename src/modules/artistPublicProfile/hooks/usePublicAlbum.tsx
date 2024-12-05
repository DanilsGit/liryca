import { publicListAlbumGetRequest } from "app/(tabs)/artistPublicProfile/api/publicArtist";
import { useCallback, useEffect, useState } from "react";
import { useAuth } from "@/modules/auth/hooks/useAuth";
import { Album } from "@/modules/core/lib/types";

export const usePublicAlbums = (id: string) => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useAuth();

  const getAlbums = useCallback(
    async (id: string) => {
      setLoading(true);
      try {
        const res = await publicListAlbumGetRequest(user.token, id);
        const data = res.data.data;
        setAlbums(data);
      } catch (error) {
        console.log(error.response.data);
      }
      setLoading(false);
    },
    [user.token],
  );

  useEffect(() => {
    getAlbums(id);
  }, [getAlbums, id]);

  return { albums, loading };
};
