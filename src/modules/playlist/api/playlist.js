import axios from "axios";
const API_URL = process.env.EXPO_PUBLIC_API_URL;

export const allPlaylistGetRequest = (token) =>
  axios.get(`${API_URL}/api/v1/playlist`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const showPlaylistGetRequest = (token, id) =>
  axios.get(`${API_URL}/api/v1/playlist/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const showPlaylistSongGetRequest = (token, id) =>
  axios.get(`${API_URL}/api/v1/playlistsong/${id}`, {
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
    }
  );

export const updatePlaylistPutRequest = (token, id, data) =>
  axios.put(`${API_URL}/api/v1/playlist/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const playlistSongGetRequest = (token, id) =>
  axios.get(`${API_URL}/api/v1/playlistsong/listOfPlaylist/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const playlistSongPostRequest = (token, data) =>
  axios.post(`${API_URL}/api/v1/playlistsong/`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const playlistSongDeleteRequest = (token, playlist, track) =>
  axios.delete(`${API_URL}/api/v1/playlistsong/${playlist}&${track}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
