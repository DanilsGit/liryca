import { useAuth } from "@/modules/auth/hooks/useAuth";
import { useCallback, useEffect, useState } from "react";
import { allAlbumsGetRequest } from "../api/artist";
import { Album } from "@/modules/core/lib/types";

// Api
export const useArtistAlbums = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const { user } = useAuth();
  const { token, version } = user;

  const getAlbums = useCallback(async () => {
    const res = await allAlbumsGetRequest(token);
    setAlbums(res.data);
  }, [token]);

  useEffect(() => {
    getAlbums();
  }, [getAlbums, version]);

  return { albums };
};
