import axios from "axios";
const API_URL = process.env.EXPO_PUBLIC_API_URL;

export const albumInformationGetRequest = (token, id) =>
  axios.get(`${API_URL}/api/v1/album/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const albumTracksGetRequest = (token, id) =>
  axios.get(`${API_URL}/api/v1/song/by-album-id/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
