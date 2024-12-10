import { router } from "expo-router";
import * as SecureStorage from "expo-secure-store";
import { Post } from "../hooks/usePost";

export const handleGoToArtist = (artist_id: string) => {
  router.navigate(`/artistPublicProfile/${artist_id}`);
};
export const handleGoToAlbum = (attachment_id: string) => {
  router.navigate(`/album/${attachment_id}`);
};
export const handleGoToPlaylist = (attachment_id: string) => {
  router.navigate(`/playlist/${attachment_id}`);
};

export const handleGoToComment = async (data: Post) => {
  await SecureStorage.setItemAsync("postToComment", JSON.stringify(data));
  router.navigate("/writeACommentInPost");
};
