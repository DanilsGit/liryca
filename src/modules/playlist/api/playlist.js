import axios from "axios";
const API_URL = process.env.EXPO_PUBLIC_API_URL;

export const allPlaylistGetRequest = (token) =>
  axios.get(`${API_URL}/api/v1/playlist`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const playlistPostRequest = (token) =>
  axios.post(
    `${API_URL}/api/v1/playlist`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
