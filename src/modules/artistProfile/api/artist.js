import axios from "axios";
const API_URL = process.env.EXPO_PUBLIC_API_URL;

export const albumRequest = (token, album) =>
  axios.post(`${API_URL}/api/v1/album`, album, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const albumPatchRequest = (token, id, data) =>
  axios.patch(`${API_URL}/api/v1/album/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const trackRequest = (token, track) =>
  axios.post(`${API_URL}/api/v1/song`, track, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const trackPatchRequest = (token, id, data) =>
  axios.patch(`${API_URL}/api/v1/song/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const allAlbumsGetRequest = (token) =>
  axios.get(`${API_URL}/api/v1/album`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const albumPutRequest = (token, id, data) =>
  axios.put(`${API_URL}/api/v1/album/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
