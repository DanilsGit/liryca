import axios from "axios";
const API_URL = process.env.EXPO_PUBLIC_API_URL;

export const recentlyAlbumGetRequest = (token) =>
  axios.get(`${API_URL}/api/v1/album/albums/recents`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
