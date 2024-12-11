import axios from "axios";
const API_AI_URL = process.env.EXPO_PUBLIC_API_AI_URL;
const API_URL = process.env.EXPO_PUBLIC_API_URL;

export const coverAIRequest = (prompt, folder, id) =>
  axios.get(`${API_AI_URL}/covers/createCover`, {
    params: {
      prompt: prompt,
      folder: folder,
      id: id,
    },
  });

export const uploadCoverRequest = (data) =>
  axios.post(`${API_AI_URL}/covers/uploadCover`, data);

export const postLikeTrackRequest = (token, trackId) =>
  axios.post(`${API_URL}/api/v1/playlistsong/likeSong/${trackId}`, null, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
