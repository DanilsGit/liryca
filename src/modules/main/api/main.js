import axios from "axios";
const API_URL = process.env.EXPO_PUBLIC_API_URL;

export const recentlyAlbumGetRequest = (token) =>
  axios.get(`${API_URL}/api/v1/album/albums/recents`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const topArtistGetRequest = (token) =>
  axios.get(`${API_URL}/api/v1/artist/artists/top`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const followedArtistGetRequest = (token) =>
  axios.get(`${API_URL}/api/v1/artist/artists/following`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const addTrackToPlaybackRequest = (token, data) =>
  axios.post(`${API_URL}/api/v1/playbackhistory/`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
